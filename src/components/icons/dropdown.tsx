import { type FC, type SVGProps } from "react";
import { tw } from "~/utils/tw";

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const DropdownIcon: FC<Props> = ({ className, ...props }) => (
  <svg
    className={tw(["size-[0.71431rem]", className])}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <path
      className="stroke-gray-500"
      d="M2.85718 4.28577L5.71432 7.14291L8.57146 4.28577"
      strokeWidth="0.952381"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
