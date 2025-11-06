import React from "react";
import Image from "next/image";

const LogoImage = ({
  width = 100,
  height = 100,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      src={"/website-ui/thriverise-logo.svg"}
      alt="ThriveRise Logo"
      width={width}
      height={height}
      className="object-contain cursor-pointer"
    />
  );
};

export default LogoImage;
