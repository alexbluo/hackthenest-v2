import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

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

  if (
    url.basePath.startsWith("/dashboard") ||
    url.basePath.startsWith("/app")
  ) {
    if (!auth.token) redirect("/login");
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/app/:path*"],
};
