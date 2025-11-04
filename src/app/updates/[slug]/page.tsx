import { allUpdates } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/container';
import MDXContent from '@/components/mdx-content';

interface UpdatePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allUpdates.map((update) => ({
    slug: update.slug,
  }));
}

export async function generateMetadata({ params }: UpdatePageProps) {
  const update = allUpdates.find((u) => u.slug === params.slug);

  if (!update) {
    return {
      title: 'Update Not Found',
    };
  }

  return {
    title: `${update.title} | Open Mission of Hope`,
    description: update.summary || update.title,
  };
}

export default function UpdatePage({ params }: UpdatePageProps) {
  const update = allUpdates.find((u) => u.slug === params.slug);

  if (!update) {
    notFound();
  }

  return (
    <div className="py-16">
      <Container>
        <article className="mx-auto max-w-3xl">
          <Link
            href="/updates"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-8"
          >
            ← Back to Updates
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{update.title}</h1>
            <time className="text-sm text-gray-500">
              {new Date(update.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          <MDXContent code={update.body.code} />
        </article>
      </Container>
    </div>
  );
}
