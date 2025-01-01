"use server"

import prisma from "@/lib/db/prisma"
import { hash } from "@node-rs/argon2"
import { signUpSchema } from "@/lib/utils"
import { generateIdFromEntropySize } from "lucia"
import { isRedirectError } from "next/dist/client/components/redirect"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { lucia } from "../auth"
import { mergeAnonymousCartIntoUserCart } from "../../cart/lib"
import { z } from "zod"

export async function signUp(
  credentials: z.infer<typeof signUpSchema>
): Promise<{ error: string }> {
  try {
    const { name, email, password } = signUpSchema.parse(credentials)

    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    })

    const userId = generateIdFromEntropySize(10)

    const existingEmail = await prisma.user.findUnique({
      where: { email },
    })

    if (existingEmail) {
      return {
        error: "Email already taken",
      }
    }

    await prisma.user.create({
      data: {
        id: userId,
        displayName: name,
        email,
        passwordHash,
      },
    })

    await mergeAnonymousCartIntoUserCart(userId)
    const session = await lucia.createSession(userId, {})
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
