import { NextPage } from 'next'
import { AppProps } from 'next/app'
import '../styles/globals.css'

type NextPageWidthLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWidthLayout = AppProps & {
  Component: NextPageWidthLayout
}

function MyApp({ Component, pageProps }: AppPropsWidthLayout)  {
  const getLayout = Component.getLayout || (page => page)
  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
