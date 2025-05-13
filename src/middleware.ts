import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/get-url";

export function middleware(request: NextRequest) {
  let token;
  const prodToken = request.cookies.get("__Secure-authjs.session-token");
  const localToken = request.cookies.get("authjs.session-token");

  if (process.env.ENV_TYPE === "prod") {
    token = prodToken;
  } else {
    token = localToken;
  }

  console.log({ token, env: process.env.ENV_TYPE });

  const pathname = request.nextUrl.pathname;

  const whiteboardRegex = /^\/whiteboard\/[^/]+$/;

  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL(getUrl("/app/challenges")));
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
