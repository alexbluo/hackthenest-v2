import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

// TODO: test
export default withAuth((req) => {
  const { nextUrl: url, nextauth: auth } = req;

  if (url.basePath.startsWith("/api/admin")) {
    if (auth.token?.email !== "ADMIN") {
      return NextResponse.json(null, { status: 400 });
    }
  }

  if (url.basePath.startsWith("/api")) {
    if (!auth.token) return NextResponse.json(null, { status: 400 });
  }

  if (url.basePath.startsWith("/admin")) {
    if (!auth.token && !url.basePath.startsWith("/admin/login")) {
      redirect("/admin/login")
    }
  }

  if (
    url.basePath.startsWith("/dashboard") ||
    url.basePath.startsWith("/app")
  ) {
    if (!auth.token) redirect("/login");
    if (auth.token.email === "ADMIN") redirect("/admin");
  }
});

export const config = {
  matcher: ["/api/:path*", "/admin/:path*", "/dashboard/:path*", "/app/:path*"],
};
