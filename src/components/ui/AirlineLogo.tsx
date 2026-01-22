'use client'

import Image from "next/image";
import { useState } from "react";
import { colors } from "../../statics/color";

interface AirlineLogoProps {
  code: string;
  size?: number; // px
}

export default function AirlineLogo({
  code,
  size = 48,
}: AirlineLogoProps) {
  const [error, setError] = useState(false);

  const logoUrl = `https://content.airhex.com/content/logos/airlines_${code}_200_200_s.png`;

  //  FALLBACK
  if (error) {
    return (
      <div
        className="flex items-center justify-center rounded-full font-semibold tracking-wide shadow-sm"
        style={{
          width: size,
          height: size,
          backgroundColor: colors.primary,
          color: "#fff",
        }}
      >
        {code}
      </div>
    );
  }

  return (
    <Image
      src={logoUrl}
      alt={`Airline ${code}`}
      width={size}
      height={size}
      className="object-contain"
      onError={() => setError(true)}
    />
  );
}
