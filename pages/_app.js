import '../styles/globals.css'
import i18nextConfig from '../next-i18next.config';
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp, i18nextConfig);
