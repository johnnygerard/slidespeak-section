import type { Metadata } from "next";
import { Cascadia_Code, Figtree } from "next/font/google";
import type { FC, ReactNode } from "react";
import "~/styles/globals.css";
import { tw } from "~/utils/tw";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
});

const cascadiaCode = Cascadia_Code({
  display: "swap",
  fallback: ["Consolas", "Menlo", "Monaco", "Courier New", "monospace"],
  subsets: ["latin"],
  variable: "--font-cascadia-code",
});

const APP_NAME = "SlideSpeak";
const TITLE = `Turn PDF into Presentation with AI | ${APP_NAME}`;
const DESCRIPTION =
  "Instantly convert PDF files into structured, editable presentations with SlideSpeak AI. Automate your design workflow and eliminate manual copy-pasting. Try it for free.";

export const metadata: Metadata = {
  metadataBase: new URL("https://slidespeak-section.vercel.app"),
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
  <html
    className={tw([cascadiaCode.variable, figtree.variable])}
    data-scroll-behavior="smooth"
    lang="en-US"
  >
    <body className="bg-white font-sans text-base">
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
