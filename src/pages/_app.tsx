import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

//JSX.Element es lo mismo que ReactNode
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

/* type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
} */

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  return <Component {...pageProps} />

}
