import type { FC } from "react";
import { UploadIcon } from "./upload-icon";

export const ProcessStep1: FC = () => (
  <div className="relative w-full rounded-3xl bg-white p-4 shadow-md">
    <svg className="h-30 w-full" fill="none">
      <rect
        className="stroke-gray-300"
        width="100%"
        height="100%"
        rx="0.75rem"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
    </svg>
    <UploadIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  </div>
);
