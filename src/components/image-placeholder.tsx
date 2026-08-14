type ImagePlaceholderProps = {
  title: string;
  detail: string;
  className?: string;
};

export function ImagePlaceholder({
  title,
  detail,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder ${className}`} role="img" aria-label={`${title}: ${detail}`}>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z" />
        <path d="m6.5 16 3.2-3.3 2.4 2.4 2.6-3.1 2.8 4" />
        <circle cx="9" cy="8.5" r="1.25" />
      </svg>
      <span>{title}</span>
      <small>{detail}</small>
    </div>
  );
}

