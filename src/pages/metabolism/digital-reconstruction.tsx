import Head from 'next/head';

import MetabolismDigitalRecView from '@/views/metabolism/digital-reconstruction';
import textContent from '@/text-content/metabolism/digital-reconstruction';


export default function MetabolismDigitalRecPage() {
  return (
    <>
      <Head>
        <title>Digital reconstruction / Metabolism / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Metabolism digital reconstruction - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content="https://bbp.epfl.ch/ngv-portal/ngv-portal/assets/images/anatomy-illustrations/anatomy-experimental-data-illustration.png"
        />
      </Head>

      <MetabolismDigitalRecView />
    </>
  );
}
