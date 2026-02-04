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
      className={tw([
        "grid h-58 place-items-center bg-[#F8F9FC] p-8",
        "rounded-3xl border border-[#EAECF5]",
      ])}
    >
      {children}
    </div>
    <div className="mt-6 space-y-3 text-left">
      <h3 className={tw(textXlSemibold, "text-[#181D27]")}>{title}</h3>
      <p className={tw(textMdRegular, "text-[#535862]")}>{description}</p>
    </div>
  </>
);
