import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Space } from 'antd';
import Link from 'next/link';
import styles from '../styles/Hero.module.scss'
import HeroImage from '../public/codebysaikat.png';
import {FaFacebookSquare} from 'react-icons/fa'
// import {SiFiverr} from 'react-icons/si'
// import {AiFillLinkedin} from 'react-icons/ai'
// import {FiInstagram} from 'react-icons/fi'

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
        <Space className={styles.social}>
          <ul>
            <li><Link href="/facebook"><a><FaFacebookSquare /></a></Link></li>
            <li><Link href="/facebooks"><a><FaFacebookSquare /></a></Link></li>
            {/* <li><Link href="/fiverr"><a><SiFiverr /></a></Link></li>
            <li><Link href="/linkedin"><a><AiFillLinkedin /></a></Link></li>
            <li><Link href="/instagram"><a><FiInstagram /></a></Link></li> */}
          </ul>
        </Space>
    </Space>
  </Space>
  )
}
