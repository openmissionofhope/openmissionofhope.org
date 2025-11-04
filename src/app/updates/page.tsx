import { allUpdates } from 'contentlayer/generated';
import Link from 'next/link';
import Container from '@/components/container';

export const metadata = {
  title: 'Updates | Open Mission of Hope',
  description: 'News, progress reports, and reflections on our work.',
};

export default function UpdatesPage() {
  const sortedUpdates = allUpdates.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Updates</h1>
          <p className="text-lg text-gray-600">
            News, progress reports, and reflections on our work. Subscribe to stay informed.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {sortedUpdates.map((update) => (
            <article
              key={update.slug}
              className="border-b border-gray-200 pb-12 last:border-0"
            >
              <Link href={update.url} className="group">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {update.title}
                </h2>
              </Link>
              <time className="text-sm text-gray-500 block mb-3">
                {new Date(update.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {update.summary && (
                <p className="text-gray-600 mb-4">{update.summary}</p>
              )}
              <Link
                href={update.url}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
