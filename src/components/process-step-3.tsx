import type { FC } from "react";
import { BoldIcon } from "~/components/icons/bold";
import { DropdownIcon } from "~/components/icons/dropdown";
import { EllipsisIcon } from "~/components/icons/ellipsis";
import { TextColorIcon } from "~/components/icons/text-color";
import { TextFrame } from "~/components/text-frame";
import { tw } from "~/utils/tw";

export const ProcessStep3: FC = () => (
  <div
    className={tw([
      "relative h-30 w-full overflow-hidden bg-white pt-3.5",
      "rounded-xl border border-gray-200",
    ])}
  >
    {/* Toolbar */}
    <div
      className={tw([
        "inline-flex h-8 items-center gap-1 bg-white ps-1 pe-0.5 shadow-sm",
        "rounded-lg border-[0.571px] border-gray-200",
      ])}
    >
      {/* Button */}
      <div className="flex h-4.5 items-center gap-[0.21431rem] px-[0.28569rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className="size-[0.57144rem]"
          src="/assets/images/icons/stars.svg"
        />
        <span
          className={tw(
            "text-[0.5rem]/[0.64288rem] font-semibold",
            "bg-linear-90 from-brand-600 to-brand-500 bg-clip-text",
          )}
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Rewrite with AI
        </span>
      </div>

      {/* Typeface selector */}
      <div
        className={tw([
          "inline-flex h-4.5 items-center gap-1 bg-white px-1",
          "rounded-sm border-[0.571px] border-gray-300",
        ])}
      >
        <span className="text-[0.5rem]/3 font-medium text-gray-900">
          IBM Plex Sans
        </span>
        <DropdownIcon />
      </div>

      {/* Font size selector */}
      <div
        className={tw([
          "inline-flex h-4.5 items-center gap-1 bg-white px-1",
          "rounded-sm border-[0.571px] border-gray-300",
        ])}
      >
        <span className="text-[0.5rem]/3 font-medium text-gray-900">24</span>
        <DropdownIcon />
      </div>

      {/* WYSIWYG editor icons */}
      <div className="flex gap-[0.14288rem]">
        <TextColorIcon />
        <BoldIcon />
        <EllipsisIcon />
      </div>
    </div>

    <div className="absolute left-1/2 mt-1.5 flex -translate-x-1/2 gap-4">
      <TextFrame />
      <TextFrame isEmpty={false} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="absolute -bottom-2.5 left-1/2 w-10 translate-x-15.5"
        src="/assets/images/icons/cursor-arrow.svg"
      />
      <TextFrame />
    </div>
  </div>
);
