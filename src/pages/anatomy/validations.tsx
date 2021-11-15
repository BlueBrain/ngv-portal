import Head from 'next/head';

import AnatomyValidationsView from '../../views/anatomy/validations';
import textContent from '../../text-content/anatomy/validations';


export default function AnatomyValidationsPage() {
  return (
    <>
      <Head>
        <title>Validations / Anatomy / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Anatomy validations - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content="https://bbp.epfl.ch/ngv-portal/assets/images/anatomy-illustrations/anatomy-validations-illustration.png"
        />
      </Head>

      <AnatomyValidationsView />
    </>
  );
}
