import type { FC } from "react";
import { Badge } from "~/components/badge";
import { displayLgSemibold, textLgRegular } from "~/styles/components";
import { tw } from "~/utils/tw";

export const ProcessSection: FC = () => (
  <section className="px-20 py-24 text-center">
    <Badge
      icon="/assets/images/icons/bubble-chat-question.svg"
      label="How it works"
    />
    <hgroup className="mt-6 space-y-5">
      <h1 className={tw(displayLgSemibold, "text-gray-900")}>
        Create presentations in 3 Steps
      </h1>
      <p className={tw(textLgRegular, "text-gray-600")}>
        Lorem ipsum dolor sit amet consectetur. Et sollicitudin felis id
        maecenas id sed molestie.
      </p>
    </hgroup>
  </section>
);
