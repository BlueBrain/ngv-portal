import React from 'react';
import Head from 'next/head';
import smoothscroll from 'smoothscroll-polyfill';

import MainLayout from '../layouts/MainLayout';
import Feedback from '../components/Feedback';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { isServer } from '../config';

import '../styles/globals.scss';


if (!isServer) {
  smoothscroll.polyfill();
}

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainLayout>
        <Component {...pageProps} />

        <Feedback />
        <GoogleAnalytics />
      </MainLayout>
    </>
  );
}


export default App;
