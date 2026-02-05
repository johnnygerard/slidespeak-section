import { type FC, type SVGProps } from "react";
import { tw } from "~/utils/tw";

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const BoldIcon: FC<Props> = ({ className, ...props }) => (
  <svg
    className={tw([
      "size-4.5 rounded-sm bg-gray-100 p-[0.133935rem]",
      className,
    ])}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      className="stroke-gray-700"
      d="M3.42859 6.85719H8.00002C9.26238 6.85719 10.2857 5.83385 10.2857 4.57148C10.2857 3.30912 9.26238 2.28577 8.00002 2.28577H3.42859V6.85719ZM3.42859 6.85719H8.57145C9.83381 6.85719 10.8572 7.88054 10.8572 9.14291C10.8572 10.4053 9.83381 11.4286 8.57145 11.4286H3.42859V6.85719Z"
      strokeWidth="1.14286"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
