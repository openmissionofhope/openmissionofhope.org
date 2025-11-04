import { allPrograms } from 'contentlayer/generated';
import Container from '@/components/container';
import ProgramCard from '@/components/program-card';

export const metadata = {
  title: 'Programs | Open Mission of Hope',
  description: 'Our active programs serving communities around the world.',
};

export default function ProgramsPage() {
  const activePrograms = allPrograms.filter((program) => program.status === 'active');

  return (
    <div className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Active Programs</h1>
          <p className="text-lg text-gray-600">
            These programs are currently active and serving communities around the world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {activePrograms.map((program) => (
            <ProgramCard
              key={program.slug}
              title={program.title}
              summary={program.summary}
              url={program.url}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
