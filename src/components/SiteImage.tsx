import { useEffect, useState } from "react";

type SiteImageProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  /** CSS object-position for cover crops */
  objectPosition?: string;
};

export function SiteImage({
  src,
  alt,
  caption,
  className = "figure--wide",
  priority = false,
  objectPosition,
}: SiteImageProps) {
  const [failed, setFailed] = useState(false);
  const filename = src.split("/").pop()?.split("?")[0] ?? src;

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return (
    <figure className={`figure ${className}`.trim()}>
      <div className="figure__media">
        {!failed ? (
          <img
            key={src}
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            style={objectPosition ? { objectPosition } : undefined}
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="figure__placeholder"
            aria-label={`Missing image: ${filename}`}
          >
            <span>ADD IMAGE</span>
            <code>{filename}</code>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="figure__caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
