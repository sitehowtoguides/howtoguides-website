import '../styles/globals.css';
import '../styles/mobile.css';
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
      </Head>
      
      {/* Only show Header if not on home page */}
      {!isHomePage && <Header />}
      
      <Component {...pageProps} />
      
      {/* Only show Footer if not on home page */}
      {!isHomePage && <Footer />}
    </>
  ) ;
}

export default MyApp;
