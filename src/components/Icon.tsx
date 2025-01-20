import Image from "next/image";

const Icon = ({ src="", alt="", className = "", width = 24, height = 24 }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`icon ${className}`}
    />
  );
};

export default Icon;
