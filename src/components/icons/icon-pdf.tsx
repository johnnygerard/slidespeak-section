import type { FC } from "react";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
};

export const IconPDF: FC<Props> = ({ className }) => (
  <div
    className={tw([
      "rounded-[0.8125rem] bg-rose-100 p-3",
      "outline-2 -outline-offset-2 outline-white",
      className,
    ])}
    style={{
      boxShadow:
        "0 -0.778px 0.778px 0 rgba(61, 61, 61, 0.08) inset, 0 6.224px 12.447px 0 rgba(82, 82, 82, 0.06), 0 3.112px 6.224px 0 rgba(82, 82, 82, 0.04), 0 1.556px 3.112px 0 rgba(82, 82, 82, 0.04), 0 1.556px 3.112px 0 rgba(228, 229, 231, 0.24)",
    }}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img alt="" className="size-8" src="/assets/images/icons/pdf.svg" />
  </div>
);
