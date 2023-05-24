import GlobalStyles from './../styles/GlobalStyles'
import Head from 'next/head';

// import BaseStyles from './../styles/Base.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>AutoPanas - Tu Pana!</title>
    </Head>

    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
      rel="stylesheet"
    />
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
