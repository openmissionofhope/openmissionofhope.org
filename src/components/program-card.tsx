import Link from 'next/link';

interface ProgramCardProps {
  title: string;
  summary: string;
  url: string;
}

export default function ProgramCard({ title, summary, url }: ProgramCardProps) {
  return (
    <Link href={url} className="group block">
      <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-blue-300">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{summary}</p>
        <div className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
          Learn more →
        </div>
      </div>
    </Link>
  );
}
