import type { FC } from "react";
import { IconPDF } from "~/components/icons/icon-pdf";
import { IconUpload } from "~/components/icons/icon-upload";
import { tw } from "~/utils/tw";

export const ProcessStep1: FC = () => (
  <div className="relative w-full rounded-3xl bg-white p-4 shadow-md">
    <div
      className={tw([
        "grid h-30 w-full place-items-center",
        "rounded-xl border-[1.5px] border-dashed border-gray-300",
      ])}
    >
      <IconUpload />
    </div>
    <IconPDF className="absolute right-7 bottom-2" />
  </div>
);
