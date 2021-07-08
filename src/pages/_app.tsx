import React from 'react';
import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import Feedback from '../components/Feedback';

import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700&display=swap" />
      </Head>

      <MainLayout>
        <Component {...pageProps} />

        <Feedback />
      </MainLayout>
    </>
  );
}


export default MyApp;
