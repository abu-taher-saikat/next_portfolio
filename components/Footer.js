import Link from 'next/link';
import {FaFacebookSquare, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {SiFiverr} from 'react-icons/si'
import styles from '../styles/Footer.module.scss';

const Footer = () => {
    return (
        <div>
            <footer className={styles.footerDistributed}>
                <div className={styles.footerLeft}>
                    <h3>CodeBy<span>Saikat.com</span></h3>
                    <p className={styles.footerLinks}>
                        <Link href="/"><a>Home</a></Link>
                        ·
                        <Link href="/blog"><a>Blog</a></Link>
                        ·
                        <Link href="/Projects"><a>Projects</a></Link>
                        ·
                        <Link href="/about"><a>About</a></Link>
                    </p>
                    <p className={styles.footerCompanyName}>@codebysaikat &copy; 2021</p>
                </div>
                
                <div className={styles.footerCenter}>
                
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Dhaka</span> Bangladesh</p>
                    </div>
                    
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+880 179009 2627</p>
                    </div>
                    
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:codebysaikat@gmail.com">codebysaikat@gmail.com</a></p>
                    </div>
                    
                </div>
                
                <div className={styles.footerRight}>
                    <p className={styles.footerCompanyAbout}>
                    <span>Find Me</span>
                    Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
                    </p>
                    <div className={styles.footerIcons}>
                        <Link href="https://facebook.com"><a><FaFacebookSquare className={styles.footerLogo} /></a></Link>
                        <Link href="https://twitter.com"><a><AiFillGithub className={styles.footerLogo} /></a></Link>
                        <Link href="https://github.com"><a><FaLinkedin className={styles.footerLogo} /></a></Link>
                        <Link href="https://instagram.com"><a><SiFiverr className={styles.footerLogo} /></a></Link>          
                        <Link href="https://instagram.com"><a><FaInstagram className={styles.footerLogo} /></a></Link>          
                    </div>
                </div>
                </footer>
        </div>
    )
}

export default Footer
