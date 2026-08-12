import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-raiton-locale", request.nextUrl.pathname === "/tr" || request.nextUrl.pathname.startsWith("/tr/") ? "tr" : "en");

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|icon.svg|robots.txt).*)"],
};
