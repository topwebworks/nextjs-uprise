import Image from "next/image";

// Shared Next/Image replacement for former CSS background photos.
export default function ImageBackground({
  src,
  alt = "",
  fixed = false,
  priority = false,
  sizes = "100vw",
  objectPosition = "center",
  className = "",
}) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`tww-next-bg-image${className ? ` ${className}` : ""}`}
      style={{ objectFit: "cover", objectPosition }}
    />
  );

  if (fixed) {
    return <div className="tww-fixed-bg-layer">{image}</div>;
  }

  return image;
}
