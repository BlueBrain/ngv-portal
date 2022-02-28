import Head from 'next/head';

import MetabolismPredictionsView from '@/views/metabolism/predictions';
import textContent from '@/text-content/metabolism/predictions';
import { basePath } from '@/config';

export default function MetabolismPredictionsPage() {
  return (
    <>
      <Head>
        <title>Predictions / Metabolism / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Metabolism predictions - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content={`${basePath}/assets/images/metabolism/predictions/Infographic.png`}
        />
      </Head>

      <MetabolismPredictionsView />
    </>
  );
}
