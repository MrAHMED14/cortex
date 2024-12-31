"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { lucia, validateRequest } from "./auth"

export const getUser = async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
  if (!sessionId) return null

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
    // Next.js throws error when attempting to set cookies when rendering page
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
