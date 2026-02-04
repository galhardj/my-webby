import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // console.log("🚀 MIDDLEWARE IS RUNNING!");
  // console.log("Path:", request.nextUrl.pathname);

  const response = NextResponse.next();
  response.headers.set("x-middleware-executed", "true");
  response.headers.set("x-pathname", request.nextUrl.pathname);

  return response;
}

export const config = {
  matcher: ["/:path*"],
};
