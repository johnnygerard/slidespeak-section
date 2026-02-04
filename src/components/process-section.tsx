import type { FC, ReactNode } from "react";
import { Badge } from "~/components/badge";
import { displayLgSemibold, textLgRegular } from "~/styles/components";
import { tw } from "~/utils/tw";
import { ProcessStep } from "./process-step";

const sectionContainerStyles = tw("mx-auto max-w-7xl px-8");

const steps: Array<{
  content: ReactNode;
  title: string;
  description: string;
}> = [
  {
    content: <div>Step 1</div>,
    title: "Upload PDF",
    description:
      "Select any PDF file from your device. Our AI supports large reports, research papers, and any PDF document, even scanned documents.",
  },
  {
    content: <div>Step 2</div>,
    title: "AI Summary & Insights",
    description:
      "Automatically extracts key points, takeaways, and insights from your PDF to create presentation-ready slides with a clear storyline.",
  },
  {
    content: <div>Step 3</div>,
    title: "Edit with AI",
    description:
      "Use our ChatGPT-powered AI to edit your PDF presentation. Need an additional slide or want to change the headline for a slide? No problem.",
  },
];

export const ProcessSection: FC = () => (
  <section className="space-y-16 px-20 py-24 text-center">
    <div className={sectionContainerStyles}>
      <Badge
        icon="/assets/images/icons/bubble-chat-question.svg"
        label="How it works"
      />
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
    <ol className={tw(sectionContainerStyles, "grid grid-cols-3 gap-6")}>
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
