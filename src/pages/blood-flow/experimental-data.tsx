import Head from 'next/head';

import BloodFlowExpDataView from '@/views/blood-flow/experimental-data';
import textContent from '@/text-content/blood-flow/experimental-data';
import { basePath } from '@/config';


export default function BloodFlowExpDataPage() {
  return (
    <>
      <Head>
        <title>Experimental data / Blood Flow / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Blood Flow experimental data - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content={`${basePath}/assets/images/blood-flow/experimental-data/Infographic.png`}
        />
      </Head>

      <BloodFlowExpDataView />
    </>
  );
}
