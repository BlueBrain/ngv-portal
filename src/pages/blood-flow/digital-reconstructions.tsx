import Head from 'next/head';

import BloodFlowDigitalRecView from '@/views/blood-flow/digital-reconstructions';
import textContent from '@/text-content/blood-flow/digital-reconstructions';
import { basePath } from '@/config';


export default function BloodFlowDigitalRecPage() {
  return (
    <>
      <Head>
        <title>Digital reconstructions / Blood Flow / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Blood Flow digital reconstruction - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content={`${basePath}/assets/images/blood-flow/digital-reconstructions/infographic.png`}
        />
      </Head>

      <BloodFlowDigitalRecView />
    </>
  );
}
