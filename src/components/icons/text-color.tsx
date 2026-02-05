import { type FC, type SVGProps } from "react";
import { tw } from "~/utils/tw";

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const TextColorIcon: FC<Props> = ({ className, ...props }) => (
  <svg
    className={tw(["size-4.5 p-[0.133935rem]", className])}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      className="fill-gray-700"
      d="M6.28556 1.14294L3.1427 9.14294H4.42841L5.06841 7.42866H8.63984L9.27984 9.14294H10.5656L7.42841 1.14294H6.28556ZM5.49699 6.2858L6.85699 2.66866L8.21699 6.2858H5.49699Z"
    />
    <rect
      x="1.71411"
      y="10.8572"
      width="10.2857"
      height="2.28571"
      rx="1.14286"
      fill="#194185"
    />
  </svg>
);
