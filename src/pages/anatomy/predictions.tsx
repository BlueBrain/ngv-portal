import Head from 'next/head';

import AnatomyPredictionsView from '../../views/anatomy/predictions';
import textContent from '../../text-content/anatomy/predictions';


export default function AnatomyPredictionsPage() {
  return (
    <>
      <Head>
        <title>Predictions / Anatomy / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Anatomy predictions - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content="https://bbp.epfl.ch/ngv-portal/assets/images/anatomy-illustrations/anatomy-predictions-illustration.png"
        />
      </Head>

      <AnatomyPredictionsView />
    </>
  );
};
