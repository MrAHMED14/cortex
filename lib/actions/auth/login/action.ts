"use server"

import prisma from "@/lib/db/prisma"
import { loginSchema } from "@/lib/utils"
import { verify } from "@node-rs/argon2"
import { isRedirectError } from "next/dist/client/components/redirect"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { lucia } from "../auth"
import { mergeAnonymousCartIntoUserCart } from "../../cart/lib"
import { z } from "zod"

export async function login(
  credentials: z.infer<typeof loginSchema>
): Promise<{ error: string }> {
  try {
    const { email, password } = loginSchema.parse(credentials)

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!existingUser || !existingUser.passwordHash) {
      return {
        error: "Incorrect username or password",
      }
    }

    const validPassword = await verify(existingUser.passwordHash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    })

    if (!validPassword) {
      return {
        error: "Incorrect username or password",
      }
    }

    await mergeAnonymousCartIntoUserCart(existingUser.id)
    const session = await lucia.createSession(existingUser.id, {})
    const sessionCookie = lucia.createSessionCookie(session.id)
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    )

    return redirect("/")
  } catch (error) {
    if (isRedirectError(error)) throw error
    console.error(error)
    return {
      error: "Something went wrong. Please try again.",
    }
  }
}
