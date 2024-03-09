import './globals.css'
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({subsets: ['latin'],});
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Portifólio Arthur 2024</title>
      <meta name="description" content="Portifólio desenvolvido por Carlos Arthur" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
    <main className={inter.className}>
        <Component {...pageProps} />
    </main>
    </>
  );
}