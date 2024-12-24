import { NextRequest, NextResponse } from "next/server"
import { getUser } from "./lib/actions/auth/action"

export default async function middleware(request: NextRequest) {
  const user = await getUser()
  const authCookie = request.cookies.get("auth_session")

  if (!authCookie || !user)
    return NextResponse.redirect(new URL("/login", request.url))

  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    user.role !== "ADMIN"
  ) {
    return Response.json(
      { success: false, message: "authentication failed" },
      { status: 401 }
    )
  }
}

export const config = {
  matcher: ["/my-orders", "/checkout", "/dashboard/:path*"],
}
