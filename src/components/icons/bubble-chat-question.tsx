import { type FC, type SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const BubbleChatQuestionIcon: FC<Props> = ({ ...props }) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_2_183)">
      <path
        d="M14.6667 7.71106C14.6667 11.2332 11.6815 14.0889 8.00004 14.0889C7.56716 14.0894 7.13554 14.0494 6.71032 13.9696C6.40426 13.9121 6.25123 13.8833 6.14439 13.8997C6.03756 13.916 5.88616 13.9965 5.58336 14.1575C4.7268 14.613 3.72801 14.7739 2.76745 14.5952C3.13253 14.1462 3.38187 13.6074 3.49189 13.0298C3.55856 12.6765 3.39337 12.3332 3.14597 12.082C2.02226 10.9409 1.33337 9.40331 1.33337 7.71106C1.33337 4.18897 4.31856 1.33325 8.00004 1.33325C11.6815 1.33325 14.6667 4.18897 14.6667 7.71106Z"
        stroke="url(#paint0_linear_2_183)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.66669 6.56402C6.66669 5.88429 7.26364 5.33325 8.00002 5.33325C8.7364 5.33325 9.33335 5.88429 9.33335 6.56402C9.33335 6.80904 9.25579 7.03733 9.1221 7.22912C8.72362 7.80074 8.00002 8.34582 8.00002 9.02556V9.33325"
        stroke="url(#paint1_linear_2_183)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 11H8.00599"
        stroke="url(#paint2_linear_2_183)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2_183"
        x1="1.33337"
        y1="1.33325"
        x2="14.6667"
        y2="1.33325"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1570EF" />
        <stop offset="1" stopColor="#2E90FA" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2_183"
        x1="6.66669"
        y1="5.33325"
        x2="9.33335"
        y2="5.33325"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1570EF" />
        <stop offset="1" stopColor="#2E90FA" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2_183"
        x1="8"
        y1="11"
        x2="8.00599"
        y2="11"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1570EF" />
        <stop offset="1" stopColor="#2E90FA" />
      </linearGradient>
      <clipPath id="clip0_2_183">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
