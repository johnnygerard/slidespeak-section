import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";
import { Badge } from "~/components/badge";
import { displayLgSemibold, textLgRegular } from "~/styles/components";
import { tw } from "~/utils/tw";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const NotFound: FC = () => (
  <section className={tw(["px-4 sm:px-8 md:px-20", "py-16 md:py-24"])}>
    <div className="mx-auto w-full max-w-4xl text-center">
      <div className="space-y-6">
        <Badge label="404 Error" />
        <h1 className={tw(displayLgSemibold, "text-gray-900")}>
          Page Not Found
        </h1>
      </div>
      <p className={tw(textLgRegular, "mt-4 text-gray-600")}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <div className="mt-10 flex items-center justify-center">
        <Link
          href="/"
          className={tw([
            "inline-flex items-center gap-2",
            "rounded-full border border-brand-600/20 bg-brand-600 px-6 py-3",
            "text-sm font-semibold text-white shadow-sm",
            "transition hover:-translate-y-0.5 hover:shadow-md",
            "focus-visible:outline-brand-500",
          ])}
        >
          Back to Home
        </Link>
      </div>
    </div>
  </section>
);

export default NotFound;
