import { useMDXComponent } from 'next-contentlayer/hooks';

interface MDXContentProps {
  code: string;
}

export default function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-lg prose-gray max-w-none">
      <Component />
    </div>
  );
}
