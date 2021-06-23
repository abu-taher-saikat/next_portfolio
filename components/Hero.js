import Head from 'next/head'
import Image from 'next/image'
import { Space, Divider } from 'antd';
import Link from 'next/Link';
import styles from '../styles/Hero.module.scss'
import HeroImage from '../public/codebysaikat.png';
import {FaFacebookSquare} from 'react-icons/fa'
import {SiFiverr} from 'react-icons/si'
import {AiFillLinkedin} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'



const Hero = () => {
    return (
        <div>
              <Space size="middle" className={styles.homepage}>
      <Space size="large" className={styles.hero}>
        <div className={styles.img}>
          <Image src={HeroImage} alt="code by saikat hero image"></Image>
        </div>
        <div className={styles.content}>
            <h4>Hi, I am Saikat,a Mern Stack Full Stack Developer</h4>
            <p>I create attractive websites. That represents your identity. Exhibit your creativity. And that makes a brand of you.</p>
            <p>I am a skilled full-stack web developer. Always I prefer hand-coded organized programming. I am an expert in html5, css3, bootstrap, JavaScript, react js, node js, express js and MongoDB.</p>
            <Space size={'large'}>
              <button className={styles.button}>Download Resume</button>
            </Space>
        </div>
        <Space className={styles.social}>
          <ul>
            <li><Link href="/facebook"><a><FaFacebookSquare /></a></Link></li>
            <li><Link href="/fiverr"><a><SiFiverr /></a></Link></li>
            <li><Link href="/linkedin"><a><AiFillLinkedin /></a></Link></li>
            <li><Link href="/instagram"><a><FiInstagram /></a></Link></li>
          </ul>
        </Space>
    </Space>
  </Space>
        </div>
    )
}

export default Hero
