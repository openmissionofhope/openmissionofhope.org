/** Open Mission of Hope mark: first light over the horizon. */
export default function Mark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="7" fill="#184f95" />
      <path d="M9 20a7 7 0 0 1 14 0" fill="none" stroke="#fcfcfb" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 7.5v3.2M8.2 10.8l2.1 2.1M23.8 10.8l-2.1 2.1" stroke="#fcfcfb" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M6 20h20" stroke="#fcfcfb" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M11 24.5h10" stroke="#fcfcfb" strokeWidth="2.2" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}
