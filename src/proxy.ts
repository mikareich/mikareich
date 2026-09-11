import { NextResponse } from "next/dist/api/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = new URL(request.url);

  const response = NextResponse.next();
  response.cookies.set("x-url", url.href);

  return response;
}

export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
