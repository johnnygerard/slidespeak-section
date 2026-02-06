import type { ElementType, FC } from "react";
import { textSmSemibold } from "~/styles/components";
import { tw } from "~/utils/tw";

type Props = {
  icon?: ElementType;
  label: string;
};

export const Badge: FC<Props> = ({ icon: Icon, label }) => (
  <div
    className={tw([
      "inline-flex items-center gap-2 px-3 py-2",
      "rounded-xl border border-brand-600 shadow-xs",
    ])}
  >
    {Icon && <Icon aria-hidden className="size-4" />}
    <span
      className={tw(
        textSmSemibold,
        "bg-linear-90 from-brand-600 to-brand-500 bg-clip-text",
      )}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {label}
    </span>
  </div>
);
