import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/get-url";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authjs.session-token");
  const pathname = request.nextUrl.pathname;

  const whiteboardRegex = /^\/whiteboard\/[^/]+$/;

  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL(getUrl("/app")));
  }

  if (pathname.includes("/whiteboard") && !whiteboardRegex.test(pathname)) {
    return NextResponse.redirect(new URL(getUrl("/app/challenges")));
  }

  if (pathname.includes("/whiteboard") && !token) {
    return NextResponse.redirect(new URL(getUrl("/auth")));
  }

  if (pathname.includes("/app") && !token) {
    return NextResponse.redirect(new URL(getUrl("/auth")));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
