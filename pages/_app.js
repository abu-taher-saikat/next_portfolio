import Header from '../components/Header'
import '../styles/globals.scss'
import 'antd/dist/antd.css';


function MyApp({ Component, pageProps }) {
  return(
    <>
      {/* <Header></Header> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
