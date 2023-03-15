import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

import Nav from '../components/navigation/navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
         <Fragment>
          <Nav />
          <Component {...pageProps} />
         </Fragment>
  )
}

export default MyApp
