import { db } from '../../db';
import { test } from '../../db/schema';

export default async function Page() {
  await db.insert(test).values({ name: 'test' });
  const data = await db.select().from(test);
  return (
    <main>
      <h1>Test Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
