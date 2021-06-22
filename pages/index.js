import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Hero.module.scss'
import { Space } from 'antd';
// import headerImage from '../public/vercel.svg';
import HeroImage from '../public/codebysaikat.png';


export default function Home() {
  return (
  <Space size="middle" className={styles.homepage}>
      <Space size="large" className={styles.hero}>
        <div className={styles.img}>
          <Image src={HeroImage} alt="code by saikat hero image"></Image>
        </div>
        <Space className={styles.content}>
            <h4>Hi, I am Saikat,a Mern Stack Full Stack Developer</h4>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className={styles.button}>Download Resume</button>
        </Space>
    </Space>
  </Space>
  )
}
