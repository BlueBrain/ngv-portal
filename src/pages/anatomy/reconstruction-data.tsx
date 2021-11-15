import Head from 'next/head';

import AnatomyRecDataView from '../../views/anatomy/reconstruction-data';
import textContent from '../../text-content/anatomy/reconstruction-data';


export default function AnatomyRecDataPage() {
  return (
    <>
      <Head>
        <title>Reconstruction data / Anatomy / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Anatomy reconstruction data - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content="https://bbp.epfl.ch/ngv-portal/assets/images/anatomy-illustrations/anatomy-reconstruction-data-illustration.png"
        />
      </Head>

      <AnatomyRecDataView />
    </>
  );
}
