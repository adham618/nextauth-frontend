import { signIn, signOut, useSession } from 'next-auth/react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            {session ? (
              <>
                Signed in as {session?.user?.email} <br />
                <button className='border-2 p-3' onClick={() => signOut()}>
                  Sign out
                </button>
              </>
            ) : (
              <>
                Not signed in <br />
                <button className='border-2 p-3' onClick={() => signIn()}>
                  Sign in
                </button>
              </>
            )}
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://adhamtarek.vercel.app'>
                Adham Tarek
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
