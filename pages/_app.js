import '../styles/globals.css';
import '../styles/mobile.css';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>How-ToGuides.com - Master AI Tools with Step-by-Step Guides</title>
        <meta name="description" content="Comprehensive tutorials for AI tools including ChatGPT, Midjourney, DALL-E, and more. Learn how to use AI effectively with our step-by-step guides." />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
