import React, { FC } from 'react';

interface Props {
  color?: string;
  multiplier?: number;
}

const LoaderSpinner: FC<Props> = ({ color = '#000000', multiplier = 1 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: 'auto' }}
      width={100 * multiplier + 'px'}
      height={100 * multiplier + 'px'}
      viewBox={`0 0 ${50 * multiplier} ${50 * multiplier}`}
      className="spinner"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx={25 * multiplier}
        cy={25 * multiplier}
        fill="none"
        stroke={color}
        strokeWidth={5 * (multiplier / 1.2)}
        r={16 * multiplier}
        strokeDasharray={`${80 * multiplier} ${28 * multiplier}`}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values={`0 ${25 * multiplier} ${25 * multiplier}; 360 ${
            25 * multiplier
          } ${25 * multiplier}`}
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
};

export default LoaderSpinner;
