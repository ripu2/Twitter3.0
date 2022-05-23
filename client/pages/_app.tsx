import '../styles/globals.css'
import "../lib/hexStyle.css"
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
