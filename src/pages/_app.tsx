import React from 'react';
import Head from 'next/head';
import { createNexusClient } from '@bbp/nexus-sdk';
import { NexusProvider } from '@bbp/react-nexus';
import smoothscroll from 'smoothscroll-polyfill';

import MainLayout from '../layouts/MainLayout';
import Feedback from '../components/Feedback';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { nexus, isServer } from '../config';

import '../styles/globals.scss';


if (isServer) {
  require('abort-controller/polyfill');
} else {
  smoothscroll.polyfill();

  // Don't use smooth scrolling for Firefox as in some cases it's causing app not to scroll to the top
  // when changing route, see https://github.com/vercel/next.js/issues/12105
  if (!navigator.userAgent.match(/firefox/i)) {
    document.querySelector("html").style.scrollBehavior = "smooth";
  }
}

const nexusClient = createNexusClient({
  uri: nexus.url,
  token: nexus.token,
});

function App({ Component, pageProps }) {
  return (
    <NexusProvider nexusClient={nexusClient}>
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Feedback />
        <GoogleAnalytics />

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    </NexusProvider>
  );
}


export default App;
