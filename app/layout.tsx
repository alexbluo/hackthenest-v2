/* eslint-disable @typescript-eslint/naming-convention */
import { Flow_Circular, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <head>
        <link rel="icon" href="/logo-colored.png" />
      </head>
      <body
        className={`${mono.variable} ${sans.variable} ${flow_circular.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
