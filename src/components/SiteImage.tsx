import { useState } from "react";

type SiteImageProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export function SiteImage({
  src,
  alt,
  caption,
  className = "figure--wide",
  priority = false,
}: SiteImageProps) {
  const [failed, setFailed] = useState(false);
  const filename = src.split("/").pop() ?? src;

  return (
    <figure className={`figure ${className}`.trim()}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="figure__placeholder" aria-label={`Missing image: ${filename}`}>
          <span>ADD IMAGE</span>
          <code>{filename}</code>
        </div>
      )}
      {caption ? <figcaption className="figure__caption">{caption}</figcaption> : null}
    </figure>
  );
}
