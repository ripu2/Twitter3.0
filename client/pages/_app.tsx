import '../styles/globals.css'
import "../lib/hexStyle.css"
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID as string} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL as string}>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
