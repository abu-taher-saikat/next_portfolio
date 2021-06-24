import Head from 'next/head';
import AnimatedCursor from "react-animated-cursor"
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Styles from '../styles/Layout.module.scss';


export default function Layout({title, keywords, description, children}) {
    // const router = useRouter();
    const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
        ssr: false
      });
      

     return (
         <div>
             <Head>
                <title>{title}</title>
                 <meta name="description" content={description} />
                 <meta name="keywords" content={keywords} /> 
             </Head>
             <AnimatedCursor
                innerSize={18}
                outerSize={20}
                color='193, 11, 111'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
            />

             <Header />
            
             {/* {router.pathname === '/' && <Showcase />} */}
             <div className={Styles.container}>
                {children}
             </div>
             <Footer />
         </div>
     )
 }
 

Layout.defaultProps = {
    title : 'codebysaikat | Full Stack Web Developer.',
    description : 'Find a afordable Full Stack developer.',
    keywords : 'programming, fullStack, Web developer, website'
}