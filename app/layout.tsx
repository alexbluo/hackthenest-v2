/* eslint-disable @typescript-eslint/naming-convention */
import { ReactNode } from "react";
import { Metadata } from "next";
import { Flow_Circular, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "../index.css";
import GoogleAnalytics from "utils/GoogleAnalytics";

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
  description: "...",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      className={`${mono.variable} ${sans.variable} ${flow_circular.variable} font-sans`}
      lang="en"
    >
      <GoogleAnalytics />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;