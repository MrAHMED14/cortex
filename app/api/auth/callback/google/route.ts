import kyInstance, { slugify } from "@/lib/utils"
import { google, lucia } from "@/lib/actions/auth/auth"
import prisma from "@/lib/db/prisma"
import { OAuth2RequestError } from "arctic"
import { generateIdFromEntropySize } from "lucia"
import { cookies } from "next/headers"
import { NextRequest } from "next/server"
import { mergeAnonymousCartIntoUserCart } from "@/lib/actions/cart/lib"

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code")
  const state = req.nextUrl.searchParams.get("state")

  const storedState = cookies().get("state")?.value
  const storedCodeVerifier = cookies().get("code_verifier")?.value

  if (
    !code ||
    !state ||
    !storedState ||
    !storedCodeVerifier ||
    state !== storedState
  ) {
    return new Response(null, { status: 400 })
  }

  try {
    const tokens = await google.validateAuthorizationCode(
      code,
      storedCodeVerifier
    )

    const googleUser = await kyInstance
      .get("https://www.googleapis.com/oauth2/v1/userinfo", {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      })
      .json<{ id: string; name: string; email: string; picture: string }>()

    const existingUser = await prisma.user.findUnique({
      where: {
        googleId: googleUser.id,
      },
    })

    if (existingUser) {
      await mergeAnonymousCartIntoUserCart(existingUser.id)

      const session = await lucia.createSession(existingUser.id, {})
      const sessionCookie = lucia.createSessionCookie(session.id)
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      )
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      })
    }

    let userId = generateIdFromEntropySize(10)

    const username = slugify(googleUser.name) + "-" + userId.slice(0, 4)

    // Try Make this work
    const existingEmail = await prisma.user.findUnique({
      where: {
        email: googleUser.email,
      },
    })

    if (existingEmail) {
      userId = existingEmail.id
      await prisma.user.update({
        where: { id: userId },
        data: {
          avatarUrl: googleUser.picture,
          googleId: googleUser.id,
        },
      })
    } else {
      await prisma.user.create({
        data: {
          id: userId,
          username,
          avatarUrl: googleUser.picture,
          email: googleUser.email,
          displayName: googleUser.name,
          googleId: googleUser.id,
        },
      })
    }

    await mergeAnonymousCartIntoUserCart(userId)

    const session = await lucia.createSession(userId, {})
    const sessionCookie = lucia.createSessionCookie(session.id)
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    )

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    })
  } catch (error) {
    console.error(error)
    if (error instanceof OAuth2RequestError) {
      return new Response(null, {
        status: 400,
      })
    }
    return new Response("Something went wrong. Please try again later", {
      status: 500,
    })
  }
}
