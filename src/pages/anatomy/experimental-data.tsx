import Head from 'next/head';

import AnatomyExpDataView from '../../views/anatomy/experimental-data';
import textContent from '../../text-content/anatomy/experimental-data';


export default function AnatomyExpDataPage() {
  return (
    <>
      <Head>
        <title>Experimental data / Anatomy / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Anatomy experimental data - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content="https://bbp.epfl.ch/ngv-portal/ngv-portal/assets/images/anatomy-illustrations/anatomy-experimental-data-illustration.png"
        />
      </Head>

      <AnatomyExpDataView />
    </>
  );
}
