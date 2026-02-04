import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import type { FC, ReactNode } from "react";
import "~/styles/globals.css";
import { tw } from "~/utils/tw";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
});

const APP_NAME = "Next.js 16 Starter";
const TITLE = APP_NAME;
const DESCRIPTION =
  "A starter template for Next.js 16 with the latest features and best practices.";

export const metadata: Metadata = {
  icons: (["light", "dark"] as const).map((theme) => ({
    url: `/assets/images/favicon-${theme}.png`,
    type: "image/png",
    sizes: "32x32",
    media: `(prefers-color-scheme: ${theme})`,
  })),
  metadataBase: new URL("https://starter-nextjs-16.vercel.app"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => (
  <html className={figtree.variable} data-scroll-behavior="smooth" lang="en-US">
    <body
      className={tw([
        "bg-neutral-950 font-sans text-base text-neutral-100",
        "selection:bg-neutral-200 selection:text-neutral-900",
      ])}
    >
      {/* This wrapper prevents a body overflow in mobile browsers. */}
      <div className="flex min-h-screen flex-col">
        {/* <Header /> */}
        <main className="grid flex-1 items-center">{children}</main>
        {/* <Footer /> */}
      </div>
    </body>
  </html>
);

export default RootLayout;
