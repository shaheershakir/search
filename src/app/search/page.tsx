import { db } from '@/db';
import { productsTable } from '@/db/schema';
import { redirect } from 'next/navigation';

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const query = searchParams.query;

  if (Array.isArray(query) || !query) {
    return redirect('/');
  }

  let products = await db.select().from(productsTable);

  return <p>hello</p>;
};

export default Page;
