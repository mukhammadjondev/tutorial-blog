import SnippetEditForm from '@/components/snippet-edit-form';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetShowPageProps {
  params: { id: string };
}

export default async function SnippetEditPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: +props.params.id },
  });

  if (!snippet) {
    return notFound();
  }

  return <SnippetEditForm snippet={snippet} />;
}
