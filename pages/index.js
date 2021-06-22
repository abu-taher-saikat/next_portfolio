import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import headerImage from '../public/vercel.svg';

export default function Home() {
  return (
  <div className={styles.homepage}>
      <div className={styles.hero}>
      <div className={styles.img}></div>
      <div className={styles.content}>
          <h4>Hi, I am Saikat,a Mern Stack Full Stack Developer</h4>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <button className={styles.button}>Download Resume</button>
      </div>
    </div>
  </div>
  )
}
