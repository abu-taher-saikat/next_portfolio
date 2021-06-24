import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Layout from '../components/Layout';
import Projects from '../components/Projects/Projects';
import styles from '../styles/Projects.module.scss';

export default function Home() {
  return (
    <>


      <Layout>
        <Hero />
        <Skills />
        <Projects />
      </Layout>
    </>
  )
}
