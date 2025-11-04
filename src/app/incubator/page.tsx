import { allIdeas } from 'contentlayer/generated';
import Container from '@/components/container';
import IdeaCard from '@/components/idea-card';
import MDXContent from '@/components/mdx-content';

export const metadata = {
  title: 'Incubator | Open Mission of Hope',
  description: 'Ideas and projects in development, working toward becoming active programs.',
};

export default function IncubatorPage() {
  // Sort ideas by priority (lower number = higher priority)
  const sortedIdeas = allIdeas
    .filter((idea) => idea.stage === 'incubating')
    .sort((a, b) => a.priority - b.priority);

  return (
    <div className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Incubator</h1>
          <p className="text-lg text-gray-600">
            Projects and ideas we're actively developing. Some are close to launch; others are
            early explorations. All share our commitment to open, transparent, faith-driven work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {sortedIdeas.map((idea) => (
            <div key={idea.slug}>
              <IdeaCard
                title={idea.title}
                summary={idea.summary}
                stage={idea.stage}
                priority={idea.priority}
                slug={idea.slug}
              />
              {/* Show full content for each idea */}
              <div className="mt-4 px-6">
                <MDXContent code={idea.body.code} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Have an idea that aligns with our mission?
          </p>
          <a
            href="/brainstorm"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Share Your Idea
          </a>
        </div>
      </Container>
    </div>
  );
}
