/* eslint-disable @typescript-eslint/naming-convention */
import { ReactNode } from "react";
import { Metadata } from "next";
import { Flow_Circular, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
// import { Flow_Circular, IBM_Plex_Mono } from "next/font/google";
import GoogleAnalytics from "utils/GoogleAnalytics";
import "../index.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const flow_circular = Flow_Circular({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-flow-circular",
});

export const metadata: Metadata = {
  title: "Hack the Nest",
  description:
    "This September, join 300 hackers for the DMV area's largest high school hackathon. Hack the Nest is a 36-hour collaborative coding event/competition where participants (also called hackers) create cool new tech projects from scratch. Whether it's 2am-debugging with cookies or ping-pong without paddles, our ultimate goal is to host an unforgettable experience for an audience normally barred from hackathons.",
  metadataBase: new URL("https://www.hackthenest.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "",
    title: "Hack the Nest",
    description:
      "This September, join 300 hackers for the DMV area's largest high school hackathon. Hack the Nest is a 36-hour collaborative coding event/competition where participants (also called hackers) create cool new tech projects from scratch. Whether it's 2am-debugging with cookies or ping-pong without paddles, our ultimate goal is to host an unforgettable experience for an audience normally barred from hackathons.",
    siteName: "Hack the Nest",
    images: [{ url: "/banner.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hackthenest",
    creator: "@hackthenest",
    images: "/banner.png",
  },
};

// TODO: admin table and qr check in
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      className={`${mono.variable} ${sans.variable} ${flow_circular.variable} font-sans`}
      lang="en"
    >
      <GoogleAnalytics />
      <body>
        {/* doesn't show up correctly on google search results, could just be update lag? */}
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://www.hackthenest.org/" />
          <meta itemProp="name" content="Hack the Nest" />
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
