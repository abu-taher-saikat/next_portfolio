import Heading from '../components/Heading'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Heading></Heading>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
