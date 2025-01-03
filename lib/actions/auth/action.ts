"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { lucia, validateRequest } from "./auth"
import prisma from "@/lib/db/prisma"

export const getUser = async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
  if (!sessionId) return null

  const session = await prisma.session.findUnique({ where: { id: sessionId } })
  if (!session) return null

  try {
    const { user, session } = await lucia.validateSession(sessionId)
    if (session && session.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id)
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      )
    }
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie()
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      )
    }
    return user
  } catch {
    throw new Error("Please check your internet connection.")
  }
}

export async function logout() {
  const { session } = await validateRequest()

  if (!session) {
    throw new Error("Unauthorized")
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  return redirect("/login")
}
