import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Home Page</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {snippets.map(c => (
          <Link
            href={`/snippets/${c.id}`}
            className="flex justify-between items-center p-2 border rounded"
            key={c.id}
          >
            {c.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
