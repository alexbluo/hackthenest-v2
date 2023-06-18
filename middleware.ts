import { redirect } from "next/navigation";
import { withAuth } from "next-auth/middleware";

export default withAuth((req) => {
  const { nextUrl: url, nextauth: auth } = req;

  console.log(url.basePath, url.basePath.startsWith("/admin"))
  if (!auth.token && !url.basePath.startsWith("/admin")) {
    redirect("/login");
  }
});

export const config = { matcher: ["/dashboard/:path*", "/application/:path*"] };
