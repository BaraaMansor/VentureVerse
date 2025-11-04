import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
  className?: string;
  title?: string;
};

export default function VentureVerseLogo({
  width = 160,
  height = 40,
  className,
  title = "VentureVerse logo",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className={className}
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="vvGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {/* Icon: circular gradient with stylized 'V' */}
      <g transform="translate(8,4)">
        <circle cx="16" cy="16" r="16" fill="url(#vvGrad)" />
        <path
          d="M8 12 L16 24 L24 12 L20 12 L16 18 L12 12 Z"
          fill="rgba(255,255,255,0.95)"
        />
      </g>

      {/* App name */}
      <text
        x="56"
        y="26"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
        fontSize="16"
        fontWeight={700}
        fill="#0F172A"
      >
        VentureVerse
      </text>
    </svg>
  );
}
