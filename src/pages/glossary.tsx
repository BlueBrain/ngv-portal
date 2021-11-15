import React from 'react';
import Head from 'next/head';

import GlossaryView from '../views/Glossary';


export default function About() {
  return (
    <>
      <Head>
        <title>Glossary / NGV Portal</title>
      </Head>

      <GlossaryView />
    </>
  );
}
