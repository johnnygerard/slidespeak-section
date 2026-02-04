import type { FC } from "react";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
};

export const UploadIcon: FC<Props> = ({ className }) => (
  <div className={tw(["rounded-full bg-brand-600 p-2", className])}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      alt=""
      className="size-6"
      src="/assets/images/icons/upload-circle.svg"
    />
  </div>
);
