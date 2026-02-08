import { allPrograms } from 'contentlayer/generated';
import Container from '@/components/container';
import ProgramCard from '@/components/program-card';

export const metadata = {
  title: 'Programs | Open Mission of Hope',
  description: 'Our active programs serving communities around the world.',
};

export default function ProgramsPage() {
  const activePrograms = allPrograms.filter((program) => program.status === 'active');
  const standalone = activePrograms.filter((p) => !p.sphere);
  const maishaSphere = activePrograms.filter((p) => p.sphere === 'maisha');

  return (
    <div className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Active Programs</h1>
          <p className="text-lg text-gray-600">
            These programs are currently active and serving communities around the world.
          </p>
        </div>

        {/* Standalone programs */}
        {standalone.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
            {standalone.map((program) => (
              <ProgramCard
                key={program.slug}
                title={program.title}
                summary={program.summary}
                url={program.url}
              />
            ))}
          </div>
        )}

        {/* Maisha-sphere */}
        {maishaSphere.length > 0 && (
          <div className="max-w-6xl mx-auto rounded-lg border-2 border-emerald-200 bg-emerald-50/30 p-8">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 mb-2">
                Maisha-sphere
              </span>
              <p className="text-gray-600">
                Practical knowledge for health and resilience in Sub-Saharan Africa, curated by the people who need it most.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {maishaSphere.map((program) => (
                <ProgramCard
                  key={program.slug}
                  title={program.title}
                  summary={program.summary}
                  url={program.url}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
