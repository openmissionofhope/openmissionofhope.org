import { allPrograms } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Container from '@/components/container';
import MDXContent from '@/components/mdx-content';

interface ProgramPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPrograms.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: ProgramPageProps) {
  const program = allPrograms.find((p) => p.slug === params.slug);

  if (!program) {
    return {
      title: 'Program Not Found',
    };
  }

  return {
    title: `${program.title} | Open Mission of Hope`,
    description: program.summary,
  };
}

export default function ProgramPage({ params }: ProgramPageProps) {
  const program = allPrograms.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="py-16">
      <Container>
        <article className="mx-auto max-w-3xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{program.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{program.summary}</p>
            <div className="mt-4 text-sm text-gray-500">
              <span className="font-semibold">Led by:</span> {program.owner}
            </div>
          </header>

          <MDXContent code={program.body.code} />
        </article>
      </Container>
    </div>
  );
}
