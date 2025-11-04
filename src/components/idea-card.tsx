interface IdeaCardProps {
  title: string;
  summary: string;
  stage: 'incubating' | 'brainstorm';
  priority: number;
  slug: string;
}

export default function IdeaCard({ title, summary, stage, priority, slug }: IdeaCardProps) {
  const isPinned = priority === 0;

  return (
    <div id={slug} className="rounded-lg border border-gray-200 p-6 scroll-mt-24">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="flex gap-2 flex-shrink-0 ml-4">
          {isPinned && (
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
              Pinned
            </span>
          )}
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
              stage === 'incubating'
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {stage === 'incubating' ? 'Incubating' : 'Brainstorm'}
          </span>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{summary}</p>
    </div>
  );
}
