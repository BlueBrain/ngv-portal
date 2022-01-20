import Head from 'next/head';

import MetabolismValidationsView from '@/views/metabolism/validations';
import textContent from '@/text-content/metabolism/validations';


export default function MetabolismValidationsPage() {
  return (
    <>
      <Head>
        <title>Validations / Metabolism / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Metabolism validations - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content="https://bbp.epfl.ch/ngv-portal/assets/images/anatomy-illustrations/anatomy-validations-illustration.png"
        />
      </Head>

      <MetabolismValidationsView />
    </>
  );
}
