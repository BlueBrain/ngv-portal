import Head from 'next/head';

import BloodFlowDigitalRecView from '@/views/blood-flow/digital-reconstruction';
import textContent from '@/text-content/blood-flow/digital-reconstruction';
import { basePath } from '@/config';


export default function BloodFlowDigitalRecPage() {
  return (
    <>
      <Head>
        <title>Digital reconstruction / Blood Flow / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Blood Flow digital reconstruction - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content={`${basePath}/assets/images/blood-flow/digital-reconstruction/Infographic.png`}
        />
      </Head>

      <BloodFlowDigitalRecView />
    </>
  );
}
