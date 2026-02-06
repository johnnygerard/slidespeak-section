import { type FC, type SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const StarsIcon: FC<Props> = ({ ...props }) => (
  <svg viewBox="0 0 10 10" fill="none" {...props}>
    <g clipPath="url(#clip0_63_303)">
      <path
        d="M1.71428 8.38101V6.47625M1.71428 2.66672V0.761963M0.761902 1.71434H2.66666M0.761902 7.42863H2.66666M4.95238 1.14292L4.29174 2.86058C4.18431 3.1399 4.13059 3.27957 4.04706 3.39704C3.97302 3.50116 3.88205 3.59213 3.77793 3.66616C3.66046 3.7497 3.52079 3.80341 3.24147 3.91085L1.52381 4.57149L3.24147 5.23213C3.52079 5.33956 3.66046 5.39327 3.77793 5.47681C3.88205 5.55084 3.97302 5.64181 4.04706 5.74593C4.13059 5.86341 4.18431 6.00307 4.29174 6.2824L4.95238 8.00006L5.61302 6.2824C5.72045 6.00307 5.77417 5.86341 5.8577 5.74593C5.93173 5.64181 6.0227 5.55084 6.12682 5.47681C6.2443 5.39327 6.38396 5.33956 6.66329 5.23213L8.38095 4.57149L6.66329 3.91085C6.38396 3.80341 6.2443 3.7497 6.12682 3.66616C6.0227 3.59213 5.93173 3.50116 5.8577 3.39704C5.77417 3.27957 5.72045 3.1399 5.61302 2.86058L4.95238 1.14292Z"
        stroke="url(#paint0_linear_63_303)"
        strokeWidth="0.761905"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_63_303"
        x1="0.761902"
        y1="0.761963"
        x2="8.38095"
        y2="0.761963"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1570EF" />
        <stop offset="1" stopColor="#2E90FA" />
      </linearGradient>
      <clipPath id="clip0_63_303">
        <rect width="9.14286" height="9.14286" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
