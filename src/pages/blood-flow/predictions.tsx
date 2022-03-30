import Head from 'next/head';

import BloodFlowPredictionsView from '@/views/blood-flow/predictions';
import textContent from '@/text-content/blood-flow/predictions';
import { basePath } from '@/config';

export default function BloodFlowPredictionsPage() {
  return (
    <>
      <Head>
        <title>Predictions / Blood Flow / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Blood Flow predictions - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content={`${basePath}/assets/images/blood-flow/predictions/Infographic.png`}
        />
      </Head>

      <BloodFlowPredictionsView />
    </>
  );
}
