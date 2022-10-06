import Layout from '../components/Layout/Layout'
import GenericLP from '../components/CLheader/Layout'
import Head from 'next/head'
import Script from 'next/script'
import App from 'next/app'

function MyApp({ Component, pageProps, router }) {

    if (router.pathname.startsWith('/ass')) {

return (
    <GenericLP>
        <Component {...pageProps} />
    </GenericLP>
)

}

else if (router.pathname.startsWith('/gtd-assessment-results')) {

  return (
      <GenericLP>
          <Component {...pageProps} />
      </GenericLP>
  )
  
  }

else {
return (
  <Layout>
  <Head>           
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

      </Head>
  <Component {...pageProps} />
  </Layout>
)
}
}

export default MyApp
