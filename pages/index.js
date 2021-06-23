import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Skills />
      </Layout>
    </>
  )
}
