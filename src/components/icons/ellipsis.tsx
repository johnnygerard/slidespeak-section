import { type FC, type SVGProps } from "react";
import { tw } from "~/utils/tw";

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const EllipsisIcon: FC<Props> = ({ className, ...props }) => (
  <svg
    className={tw(["size-4.5 p-[0.133935rem]", className])}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <g
      className="stroke-gray-700"
      strokeWidth="1.14286"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.85719 7.42862C7.17279 7.42862 7.42862 7.17279 7.42862 6.8572C7.42862 6.5416 7.17279 6.28577 6.85719 6.28577C6.5416 6.28577 6.28577 6.5416 6.28577 6.8572C6.28577 7.17279 6.5416 7.42862 6.85719 7.42862Z" />
      <path d="M10.8572 7.42862C11.1728 7.42862 11.4286 7.17279 11.4286 6.8572C11.4286 6.5416 11.1728 6.28577 10.8572 6.28577C10.5416 6.28577 10.2858 6.5416 10.2858 6.8572C10.2858 7.17279 10.5416 7.42862 10.8572 7.42862Z" />
      <path d="M2.8572 7.42862C3.17279 7.42862 3.42862 7.17279 3.42862 6.8572C3.42862 6.5416 3.17279 6.28577 2.8572 6.28577C2.5416 6.28577 2.28577 6.5416 2.28577 6.8572C2.28577 7.17279 2.5416 7.42862 2.8572 7.42862Z" />
    </g>
  </svg>
);
