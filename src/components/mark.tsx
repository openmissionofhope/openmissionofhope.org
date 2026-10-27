/** The Open Mission of Hope penguin. Decorative next to the written name. */
export default function Mark({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, image already sized
    <img src="/brand/omh-penguin-128.png" alt="" width={128} height={128} className={className} />
  );
}
