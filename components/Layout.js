import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Styles from '../styles/Layout.module.scss';


export default function Layout({title, keywords, description, children}) {
    const router = useRouter();

     return (
         <div>
             <Head>
                <title>{title}</title>
                 <meta name="description" content={description} />
                 <meta name="keywords" content={keywords} /> 
             </Head>

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