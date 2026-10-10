/**
 * Organic section boundary drawn with one SVG path (no animation library).
 * `topClass` / `bottomClass` set the colors of the section above and below.
 * The wrapper takes the lower section's background so there is never a gap,
 * and the path fills the upper section's color with a curved lower edge.
 */
export default function Curve({
  topClass,
  bottomClass,
}: {
  topClass: string; // e.g. "text-ink" (fill of the section above)
  bottomClass: string; // e.g. "bg-paper" (background of the section below)
}) {
  return (
    <div aria-hidden="true" className={`relative -mb-px -mt-px leading-[0] ${bottomClass}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-[clamp(40px,7vw,110px)] w-full ${topClass}`}
      >
        <path d="M0 0H1440V28C1180 126 260 126 0 28Z" fill="currentColor" />
      </svg>
    </div>
  );
}
