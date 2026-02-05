import type { FC } from "react";
import { GrabbedPdfIcon } from "~/components/icons/grabbed-pdf";
import { UploadIcon } from "~/components/icons/upload";

const STROKE_WIDTH = 1.5;

export const ProcessStep1: FC = () => (
  <div className="relative w-full rounded-3xl bg-white p-4 shadow-md">
    <svg className="h-30 w-full" fill="none">
      <rect
        x={STROKE_WIDTH / 2}
        y={STROKE_WIDTH / 2}
        className="stroke-gray-300"
        width={`calc(100% - ${STROKE_WIDTH}px)`}
        height={`calc(100% - ${STROKE_WIDTH}px)`}
        rx="0.75rem"
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
    </svg>
    <UploadIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <GrabbedPdfIcon className="absolute right-7 bottom-2" />
  </div>
);
