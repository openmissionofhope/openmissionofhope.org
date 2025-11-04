import { allIdeas } from 'contentlayer/generated';
import Container from '@/components/container';
import MDXContent from '@/components/mdx-content';

export const metadata = {
  title: 'Brainstorm | Open Mission of Hope',
  description: 'Early-stage ideas and community contributions.',
};

export default function BrainstormPage() {
  const brainstormIdeas = allIdeas
    .filter((idea) => idea.stage === 'brainstorm')
    .sort((a, b) => a.priority - b.priority);

  return (
    <div className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Brainstorm</h1>
          <p className="text-lg text-gray-600">
            Early-stage ideas from our community. These need more research, refinement, and
            prayer before they're ready for the incubator. If one resonates with you, reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {brainstormIdeas.map((idea) => (
            <article key={idea.slug} className="border-b border-gray-200 pb-12 last:border-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{idea.title}</h2>
              <p className="text-gray-600 mb-4">{idea.summary}</p>
              {idea.owner && (
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-semibold">Suggested by:</span> {idea.owner}
                </p>
              )}
              <MDXContent code={idea.body.code} />
            </article>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Have an Idea?
          </h2>
          <p className="text-gray-700 mb-4 text-center">
            We welcome ideas that align with our mission: open, transparent, faith-driven work
            that serves people in crisis. No formal proposal needed—just share what's on your
            heart.
          </p>
          <p className="text-gray-600 text-center">
            Contact us: <a href="mailto:hello@openmissionhope.org" className="text-blue-600 hover:text-blue-700 font-semibold">hello@openmissionhope.org</a>
          </p>
        </div>
      </Container>
    </div>
  );
}
