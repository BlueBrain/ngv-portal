import Head from 'next/head';

import TermsOfUseView from '../views/Tos';


export default function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Terms of use / NGV Portal</title>
      </Head>

      <TermsOfUseView />
    </>
  );
}
