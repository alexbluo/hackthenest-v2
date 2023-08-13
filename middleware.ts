import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const middleware = async (req: NextRequest) => {
  const { nextUrl: url } = req;
  const token = await getToken({ req });

  if (url.pathname.startsWith("/api/admin")) {
    if (token?.email !== "ADMIN") {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  if (
    url.pathname.startsWith("/api") &&
    !url.pathname.startsWith("/api/auth")
  ) {
    if (!token) return NextResponse.json(null, { status: 400 });
  }

  if (url.pathname.startsWith("/admin")) {
    if (!url.pathname.startsWith("/admin/login") && token?.email !== "ADMIN") {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
    if (url.pathname.startsWith("/admin/login") && token?.email === "ADMIN") {
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }
  }

  if (url.pathname.startsWith("/login")) {
    if (token?.email === "ADMIN") {
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }
    if (token) {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
  }

  if (
    url.pathname.startsWith("/dashboard") ||
    url.pathname.startsWith("/app")
  ) {
    if (!token) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    if (token.email === "ADMIN") {
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }
  }
};

export const config = {
  matcher: [
    "/api/:path*",
    "/admin/:path*",
    "/login",
    "/dashboard/:path*",
    "/app/:path*",
  ],
};
