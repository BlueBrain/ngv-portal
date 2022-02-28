import Head from 'next/head';

import MetabolismValidationsView from '@/views/metabolism/validations';
import textContent from '@/text-content/metabolism/validations';
import { basePath } from '@/config';


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
          content={`${basePath}/assets/images/metabolism/validations/Infographic.png`}
        />
      </Head>

      <MetabolismValidationsView />
    </>
  );
}
