import type { FC, ReactNode } from "react";
import { Badge } from "~/components/badge";
import { BubbleChatQuestionIcon } from "~/components/icons/bubble-chat-question";
import { ProcessStep } from "~/components/process-step";
import { ProcessStep1 } from "~/components/process-step-1";
import { ProcessStep2 } from "~/components/process-step-2";
import { ProcessStep3 } from "~/components/process-step-3";
import { displayLgSemibold, textLgRegular } from "~/styles/components";
import { tw } from "~/utils/tw";

const sectionContainerStyles = tw("mx-auto max-w-7xl px-8");

const steps: Array<{
  content: ReactNode;
  title: string;
  description: string;
}> = [
  {
    content: <ProcessStep1 />,
    title: "Upload PDF",
    description:
      "Select any PDF file from your device. Our AI supports large reports, research papers, and any PDF document, even scanned documents.",
  },
  {
    content: <ProcessStep2 />,
    title: "AI Summary & Insights",
    description:
      "Automatically extracts key points, takeaways, and insights from your PDF to create presentation-ready slides with a clear storyline.",
  },
  {
    content: <ProcessStep3 />,
    title: "Edit with AI",
    description:
      "Use our ChatGPT-powered AI to edit your PDF presentation. Need an additional slide or want to change the headline for a slide? No problem.",
  },
];

export const ProcessSection: FC = () => (
  <section
    className={tw([
      "space-y-10 text-center md:space-y-16",
      "px-4 sm:px-8 md:px-20",
      "py-12 md:py-24",
    ])}
  >
    <div className={sectionContainerStyles}>
      <Badge icon={BubbleChatQuestionIcon} label="How it works" />
      <hgroup className="mt-6 space-y-5">
        <h2 className={tw(displayLgSemibold, "text-gray-900")}>
          Create presentations in 3 Steps
        </h2>
        <p className={tw(textLgRegular, "text-gray-600")}>
          Lorem ipsum dolor sit amet consectetur. Et sollicitudin felis id
          maecenas id sed molestie.
        </p>
      </hgroup>
    </div>
    <ol
      className={tw(
        sectionContainerStyles,
        "grid gap-6",
        "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3",
      )}
    >
      {steps.map(({ content, title, description }, index) => (
        <li key={index}>
          <ProcessStep title={title} description={description}>
            {content}
          </ProcessStep>
        </li>
      ))}
    </ol>
  </section>
);
