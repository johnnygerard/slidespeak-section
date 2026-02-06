import type { FC, ReactNode } from "react";
import { textMdRegular, textXlSemibold } from "~/styles/components";
import { tw } from "~/utils/tw";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

export const ProcessStep: FC<Props> = ({ children, title, description }) => (
  <>
    <div
      aria-hidden
      className={tw([
        "flex h-58 items-center bg-gray-blue-50 p-8 select-none",
        "rounded-3xl border border-gray-blue-100",
      ])}
    >
      {children}
    </div>
    <div className="mt-6 space-y-3 text-left">
      <h3 className={tw(textXlSemibold, "text-gray-900")}>{title}</h3>
      <p className={tw(textMdRegular, "text-gray-600")}>{description}</p>
    </div>
  </>
);
