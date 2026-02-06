import { useId, type FC, type SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const CursorArrowIcon: FC<Props> = ({ ...props }) => {
  const filterId = useId();

  return (
    <svg viewBox="0 0 39 50" fill="none" {...props}>
      <g filter={`url(#${filterId})`}>
        <path
          d="M9.91695 3.91695C10.3791 3.4546 11.0591 3.2859 11.6838 3.47813L28.1543 8.54587C28.8437 8.7581 29.3345 9.36821 29.394 10.087C29.4533 10.8059 29.0696 11.4884 28.4244 11.811L21.3489 15.3489L17.811 22.4244C17.4884 23.0695 16.8059 23.4533 16.087 23.394C15.3682 23.3345 14.7581 22.8437 14.5459 22.1543L9.47813 5.68377C9.2859 5.05906 9.4546 4.37907 9.91695 3.91695Z"
          fill="#1570EF"
        />
        <path
          d="M9.42249 3.42151C10.068 2.77611 11.0173 2.54098 11.8893 2.8092L28.36 7.87659C29.3226 8.17293 30.0082 9.02514 30.0914 10.0289L30.0914 10.0299C30.174 11.0335 29.6379 11.9857 28.7369 12.4362L28.7379 12.4371L21.8707 15.8707L18.4371 22.7379L18.4362 22.7369C17.9857 23.6379 17.0335 24.1741 16.0299 24.0914L16.0289 24.0914C15.0251 24.0082 14.1729 23.3226 13.8766 22.36L8.8092 5.88928C8.5409 5.01698 8.77662 4.06705 9.42249 3.42151Z"
          stroke="white"
          strokeWidth="1.4"
        />
      </g>
      <defs>
        <filter
          id={filterId}
          x="0"
          y="0"
          width="38.8"
          height="51.8"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.12 0 0 0 0 0.12 0 0 0 0 0.12 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_63_361"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_63_361"
            result="effect2_dropShadow_63_361"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="11" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_63_361"
            result="effect3_dropShadow_63_361"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="19" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0.01 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_63_361"
            result="effect4_dropShadow_63_361"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_63_361"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect5_innerShadow_63_361"
          />
        </filter>
      </defs>
    </svg>
  );
};
