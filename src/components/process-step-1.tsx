import type { FC } from "react";
import { GrabbedPdfIcon } from "~/components/icons/grabbed-pdf";
import { UploadIcon } from "~/components/icons/upload";
import { tw } from "~/utils/tw";

export const ProcessStep1: FC = () => (
  <div className="relative w-full rounded-3xl bg-white p-4 shadow-md">
    <div
      className={tw([
        "grid h-30 w-full place-items-center",
        "rounded-xl border-[1.5px] border-dashed border-gray-300",
      ])}
    >
      <UploadIcon />
    </div>
    <GrabbedPdfIcon className="absolute right-7 bottom-2" />
  </div>
);
