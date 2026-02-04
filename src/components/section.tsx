import type { FC } from "react";
import { displayLgSemibold } from "~/styles/components";
import { tw } from "~/utils/tw";

export const Section: FC = () => (
  <section className="px-20 py-24 text-center">
    <h1 className={tw(displayLgSemibold, "text-gray-900")}>
      Create presentations in 3 Steps
    </h1>
  </section>
);
