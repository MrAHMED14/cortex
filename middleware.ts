import { NextRequest, NextResponse } from "next/server"
import { getUser } from "./lib/actions/auth/action"

export default async function middleware(request: NextRequest) {
  const user = await getUser()
  const authCookie = request.cookies.get("auth_session")

  if (!authCookie || !user)
    return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
  matcher: ["/my-orders", "/checkout"],
}
