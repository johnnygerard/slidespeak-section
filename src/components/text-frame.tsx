import { useId, type FC, type SVGProps } from "react";
import { tw } from "~/utils/tw";

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
  isEmpty?: boolean;
};

export const TextFrame: FC<Props> = ({
  className,
  isEmpty = true,
  ...props
}) => {
  const strokeColor = tw(isEmpty ? "stroke-gray-100" : "stroke-brand-600");
  const filterId = useId();
  const filterIds = Array.from({ length: 6 }, (_, i) => `${filterId}-${i}`);

  return (
    <svg
      className={tw(["h-15", className])}
      viewBox="0 0 161 59"
      fill="none"
      {...props}
    >
      <rect className={strokeColor} x="5.5" y="5.5" width="150" height="47" />
      {!isEmpty && (
        <path
          d="M28.9963 31.848H20.4843V41H15.6203V18.664H20.4843V27.56H28.9963V18.664H33.8603V41H28.9963V31.848ZM45.5285 41.384C44.2485 41.384 43.1072 41.1813 42.1045 40.776C41.1018 40.3493 40.2485 39.7627 39.5445 39.016C38.8618 38.248 38.3392 37.32 37.9765 36.232C37.6352 35.144 37.4645 33.928 37.4645 32.584C37.4645 31.2613 37.6352 30.0667 37.9765 29C38.3178 27.912 38.8192 26.984 39.4805 26.216C40.1632 25.448 40.9952 24.8613 41.9765 24.456C42.9578 24.0293 44.0778 23.816 45.3365 23.816C46.7232 23.816 47.9072 24.0507 48.8885 24.52C49.8912 24.9893 50.7018 25.6187 51.3205 26.408C51.9605 27.1973 52.4192 28.1147 52.6965 29.16C52.9952 30.184 53.1445 31.2613 53.1445 32.392V33.8H42.3605V34.056C42.3605 35.1653 42.6592 36.0507 43.2565 36.712C43.8538 37.352 44.7925 37.672 46.0725 37.672C47.0538 37.672 47.8538 37.48 48.4725 37.096C49.0912 36.6907 49.6672 36.2107 50.2005 35.656L52.5685 38.6C51.8218 39.4747 50.8405 40.1573 49.6245 40.648C48.4298 41.1387 47.0645 41.384 45.5285 41.384ZM45.4325 27.304C44.4725 27.304 43.7152 27.624 43.1605 28.264C42.6272 28.8827 42.3605 29.7147 42.3605 30.76V31.016H48.2485V30.728C48.2485 29.704 48.0138 28.8827 47.5445 28.264C47.0965 27.624 46.3925 27.304 45.4325 27.304ZM68.9053 41C68.0519 41 67.3373 40.7333 66.7613 40.2C66.2066 39.6667 65.8546 38.952 65.7053 38.056H65.5133C65.2573 39.144 64.6919 39.976 63.8173 40.552C62.9426 41.1067 61.8653 41.384 60.5853 41.384C58.8999 41.384 57.6093 40.936 56.7133 40.04C55.8173 39.144 55.3693 37.96 55.3693 36.488C55.3693 34.7173 56.0093 33.4053 57.2893 32.552C58.5906 31.6773 60.3506 31.24 62.5693 31.24H65.2253V30.184C65.2253 29.3733 65.0119 28.7333 64.5853 28.264C64.1586 27.7733 63.4439 27.528 62.4413 27.528C61.5026 27.528 60.7559 27.7307 60.2013 28.136C59.6466 28.5413 59.1879 29 58.8253 29.512L56.0093 27.016C56.6919 26.0133 57.5453 25.2347 58.5693 24.68C59.6146 24.104 61.0226 23.816 62.7933 23.816C65.1826 23.816 66.9746 24.3387 68.1693 25.384C69.3639 26.4293 69.9613 27.9547 69.9613 29.96V37.32H71.5293V41H68.9053ZM62.3453 38.088C63.1346 38.088 63.8066 37.9173 64.3613 37.576C64.9373 37.2347 65.2253 36.68 65.2253 35.912V33.928H62.9213C61.0653 33.928 60.1373 34.5573 60.1373 35.816V36.296C60.1373 36.9147 60.3293 37.3733 60.7133 37.672C61.0973 37.9493 61.6413 38.088 62.3453 38.088ZM85.012 38.184H84.852C84.724 38.632 84.5213 39.0587 84.244 39.464C83.9667 39.848 83.6253 40.1893 83.22 40.488C82.836 40.7653 82.388 40.9787 81.876 41.128C81.3853 41.2987 80.8733 41.384 80.34 41.384C78.2067 41.384 76.596 40.6373 75.508 39.144C74.42 37.6293 73.876 35.4427 73.876 32.584C73.876 29.7253 74.42 27.5493 75.508 26.056C76.596 24.5627 78.2067 23.816 80.34 23.816C81.428 23.816 82.388 24.1147 83.22 24.712C84.0733 25.3093 84.6173 26.0773 84.852 27.016H85.012V17.32H89.748V41H85.012V38.184ZM81.908 37.544C82.804 37.544 83.54 37.3307 84.116 36.904C84.7133 36.456 85.012 35.848 85.012 35.08V30.12C85.012 29.352 84.7133 28.7547 84.116 28.328C83.54 27.88 82.804 27.656 81.908 27.656C81.012 27.656 80.2653 27.976 79.668 28.616C79.092 29.2347 78.804 30.0773 78.804 31.144V34.056C78.804 35.1227 79.092 35.976 79.668 36.616C80.2653 37.2347 81.012 37.544 81.908 37.544ZM98.8808 41C97.2594 41 96.0648 40.6053 95.2968 39.816C94.5501 39.0267 94.1768 37.8853 94.1768 36.392V17.32H98.9128V37.32H101.025V41H98.8808ZM106.232 22.408C105.272 22.408 104.568 22.1947 104.12 21.768C103.694 21.32 103.48 20.7547 103.48 20.072V19.368C103.48 18.6853 103.694 18.1307 104.12 17.704C104.568 17.256 105.272 17.032 106.232 17.032C107.192 17.032 107.886 17.256 108.312 17.704C108.76 18.1307 108.984 18.6853 108.984 19.368V20.072C108.984 20.7547 108.76 21.32 108.312 21.768C107.886 22.1947 107.192 22.408 106.232 22.408ZM103.864 24.2H108.6V41H103.864V24.2ZM113.021 41V24.2H117.757V27.048H117.949C118.247 26.1733 118.77 25.416 119.517 24.776C120.263 24.136 121.298 23.816 122.621 23.816C124.349 23.816 125.65 24.392 126.525 25.544C127.421 26.696 127.869 28.3387 127.869 30.472V41H123.133V30.856C123.133 29.768 122.962 28.968 122.621 28.456C122.279 27.9227 121.671 27.656 120.797 27.656C120.413 27.656 120.039 27.7093 119.677 27.816C119.314 27.9013 118.983 28.0507 118.685 28.264C118.407 28.4773 118.183 28.744 118.013 29.064C117.842 29.3627 117.757 29.7147 117.757 30.12V41H113.021ZM139.091 41.384C137.811 41.384 136.67 41.1813 135.667 40.776C134.664 40.3493 133.811 39.7627 133.107 39.016C132.424 38.248 131.902 37.32 131.539 36.232C131.198 35.144 131.027 33.928 131.027 32.584C131.027 31.2613 131.198 30.0667 131.539 29C131.88 27.912 132.382 26.984 133.043 26.216C133.726 25.448 134.558 24.8613 135.539 24.456C136.52 24.0293 137.64 23.816 138.899 23.816C140.286 23.816 141.47 24.0507 142.451 24.52C143.454 24.9893 144.264 25.6187 144.883 26.408C145.523 27.1973 145.982 28.1147 146.259 29.16C146.558 30.184 146.707 31.2613 146.707 32.392V33.8H135.923V34.056C135.923 35.1653 136.222 36.0507 136.819 36.712C137.416 37.352 138.355 37.672 139.635 37.672C140.616 37.672 141.416 37.48 142.035 37.096C142.654 36.6907 143.23 36.2107 143.763 35.656L146.131 38.6C145.384 39.4747 144.403 40.1573 143.187 40.648C141.992 41.1387 140.627 41.384 139.091 41.384ZM138.995 27.304C138.035 27.304 137.278 27.624 136.723 28.264C136.19 28.8827 135.923 29.7147 135.923 30.76V31.016H141.811V30.728C141.811 29.704 141.576 28.8827 141.107 28.264C140.659 27.624 139.955 27.304 138.995 27.304Z"
          fill="#101828"
        />
      )}
      <g filter={`url(#${filterIds[0]})`}>
        <path
          d="M2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6Z"
          fill="white"
        />
        <path
          d="M6 2.5C7.933 2.5 9.5 4.067 9.5 6C9.5 7.933 7.933 9.5 6 9.5C4.067 9.5 2.5 7.933 2.5 6C2.5 4.067 4.067 2.5 6 2.5Z"
          className={strokeColor}
          strokeLinejoin="round"
        />
      </g>
      <g filter={`url(#${filterIds[1]})`}>
        <path
          d="M151 6C151 3.79086 152.791 2 155 2C157.209 2 159 3.79086 159 6C159 8.20914 157.209 10 155 10C152.791 10 151 8.20914 151 6Z"
          fill="white"
        />
        <path
          d="M155 2.5C156.933 2.5 158.5 4.067 158.5 6C158.5 7.933 156.933 9.5 155 9.5C153.067 9.5 151.5 7.933 151.5 6C151.5 4.067 153.067 2.5 155 2.5Z"
          className={strokeColor}
          strokeLinejoin="round"
        />
      </g>
      <g filter={`url(#${filterIds[2]})`}>
        <path
          d="M2 52C2 49.7909 3.79086 48 6 48C8.20914 48 10 49.7909 10 52C10 54.2091 8.20914 56 6 56C3.79086 56 2 54.2091 2 52Z"
          fill="white"
        />
        <path
          d="M6 48.5C7.933 48.5 9.5 50.067 9.5 52C9.5 53.933 7.933 55.5 6 55.5C4.067 55.5 2.5 53.933 2.5 52C2.5 50.067 4.067 48.5 6 48.5Z"
          className={strokeColor}
          strokeLinejoin="round"
        />
      </g>
      <g filter={`url(#${filterIds[3]})`}>
        <path
          d="M151 52C151 49.7909 152.791 48 155 48C157.209 48 159 49.7909 159 52C159 54.2091 157.209 56 155 56C152.791 56 151 54.2091 151 52Z"
          fill="white"
        />
        <path
          d="M155 48.5C156.933 48.5 158.5 50.067 158.5 52C158.5 53.933 156.933 55.5 155 55.5C153.067 55.5 151.5 53.933 151.5 52C151.5 50.067 153.067 48.5 155 48.5Z"
          className={strokeColor}
          strokeLinejoin="round"
        />
      </g>
      <g filter={`url(#${filterIds[4]})`}>
        <rect x="69" y="1" width="24" height="8" rx="4" fill="white" />
        <rect
          x="69.5"
          y="1.5"
          width="23"
          height="7"
          rx="3.5"
          className={strokeColor}
          strokeLinejoin="round"
        />
      </g>
      <g filter={`url(#${filterIds[5]})`}>
        <rect x="69" y="48" width="24" height="8" rx="4" fill="white" />
        <rect
          x="69.5"
          y="48.5"
          width="23"
          height="7"
          rx="3.5"
          className={strokeColor}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id={filterIds[0]}
          x="0"
          y="1"
          width="12"
          height="12"
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
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_63_292"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_63_292"
            result="shape"
          />
        </filter>
        <filter
          id={filterIds[1]}
          x="149"
          y="1"
          width="12"
          height="12"
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
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_63_292"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_63_292"
            result="shape"
          />
        </filter>
        <filter
          id={filterIds[2]}
          x="0"
          y="47"
          width="12"
          height="12"
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
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_63_292"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_63_292"
            result="shape"
          />
        </filter>
        <filter
          id={filterIds[3]}
          x="149"
          y="47"
          width="12"
          height="12"
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
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_63_292"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_63_292"
            result="shape"
          />
        </filter>
        <filter
          id={filterIds[4]}
          x="67"
          y="0"
          width="28"
          height="12"
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
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_63_292"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_63_292"
            result="shape"
          />
        </filter>
        <filter
          id={filterIds[5]}
          x="67"
          y="47"
          width="28"
          height="12"
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
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_63_292"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_63_292"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
