import type { FC } from "react";
import { tw } from "~/utils/tw";

const LoadingBars: FC = () => (
  <div className="grid h-1.5 w-full grid-cols-3 gap-1">
    {[0, 1, 2].map((i) => (
      <div
        className="h-full animate-pulse rounded-full bg-gray-300/30"
        key={i}
      />
    ))}
  </div>
);

const Card: FC<{
  className?: string;
  isLoading: boolean;
  title: string;
  description: string;
}> = ({ className, isLoading, title, description }) => (
  <div
    className={tw([
      "flex h-15 items-center rounded-2xl bg-gray-25",
      "border border-gray-200",
      !isLoading && "shadow-md",
      className,
    ])}
  >
    {/* Bullet point */}
    <div className="relative z-0 px-3.75">
      <div
        className={tw([
          "size-4.5 rounded-full border-[0.375rem] bg-gray-25",
          isLoading ? "animate-pulse border-gray-300" : "border-brand-600",
        ])}
      />
      {/* Bullet point shadow */}
      {!isLoading && (
        <div
          className={tw([
            "-z-10 size-2.5 bg-brand-600 blur-xs",
            "absolute top-1/2 left-1/2 -translate-x-1/2",
          ])}
        />
      )}
    </div>
    {/* Card content */}
    {isLoading ? (
      <div className="flex w-full flex-col gap-3 pe-6">
        {[0, 1].map((i) => (
          <LoadingBars key={i} />
        ))}
      </div>
    ) : (
      <div className="space-y-1.5 overflow-hidden pe-3 text-left font-mono">
        <p className="truncate text-[0.75rem]/[1] font-semibold -tracking-[0.0075rem] text-gray-900">
          {title}
        </p>
        <p className="truncate text-[0.625rem]/[1] -tracking-[0.00625rem] text-gray-400">
          {description}
        </p>
      </div>
    )}
  </div>
);

export const ProcessStep2: FC = () => (
  <div className="w-full -space-y-7.5">
    <Card
      className="relative z-30"
      isLoading={false}
      title="Introduction to the presentation on"
      description="Overview of the importance of effective communication in professional settings."
    />
    <Card
      className="relative z-20"
      isLoading={true}
      title="Extracting insights"
      description="Pulling metrics, quotes, and trends from the source PDF."
    />
    <Card
      isLoading={true}
      title="Drafting slide outline"
      description="Organizing sections into a clear, presentation-ready flow."
    />
  </div>
);
