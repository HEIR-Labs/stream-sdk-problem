import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import type { inferProcedureOutput } from '@trpc/server';
import type { AppRouter } from '@heir/api';

const PostCard: React.FC<{
  post: inferProcedureOutput<AppRouter['post']['all']>[number];
}> = ({ post }) => {
  return (
    <div className="max-w-2xl rounded-lg border-2 border-gray-500 p-4">
      <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
      <p className="text-gray-600">{post.content}</p>
    </div>
  );
};

const Home: NextPage = () => {
  const postQuery = trpc.post.all.useQuery();
  const number = trpc.random.number.useQuery({ min: 1, max: 2 });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <button>Pizza is good!</button>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center py-16">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Create <span className="text-indigo-500">T3</span> Turbo
        </h1>
        <pre>{JSON.stringify(number.data, null, 2)}</pre>
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {postQuery.data ? (
            <div className="flex flex-col gap-4">
              {postQuery.data?.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          ) : (
            <p>Loading..</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
