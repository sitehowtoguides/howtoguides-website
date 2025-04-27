import '../styles/globals.css';
import '../styles/mobile.css';
import '../styles/home-header.css';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Check if we're on the home page
  const isHomePage = router.pathname === '/';
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>How-ToGuides.com - Master AI Tools with Step-by-Step Guides</title>
        <meta name="description" content="Comprehensive tutorials for AI tools including ChatGPT, Midjourney, DALL-E, and more. Learn how to use AI effectively with our step-by-step guides." />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/images/logo/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/images/logo/favicon/safari-pinned-tab.svg" color="#5bbad5" />
    <link rel="shortcut icon" href="/images/logo/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="msapplication-config" content="/images/logo/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />
    
      </Head>
      
      {/* Always show Header, but with conditional class for home page */}
      <Header isHomePage={isHomePage} />
      
      <Component {...pageProps} />
      
      {/* Always show Footer, but with conditional class for home page */}
      <Footer isHomePage={isHomePage} />
    </>
  );
}

export default MyApp;
