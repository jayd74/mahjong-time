import App from '@components/App';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahjong Time</title>
        <meta
          name="description"
          content="Built by an Unbe-leafable team of MJ enthusiasts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <App />
    </>
  );
}
