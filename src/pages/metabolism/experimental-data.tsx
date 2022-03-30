import Head from 'next/head';

import MetabolismExpDataView from '@/views/metabolism/experimental-data';
import textContent from '@/text-content/metabolism/experimental-data';
import { basePath } from '@/config';


export default function MetabolismExpDataPage() {
  return (
    <>
      <Head>
        <title>Experimental data / Metabolism / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Metabolism experimental data - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content={`${basePath}/assets/images/metabolism/experimental-data/infographic.png`}
        />
      </Head>

      <MetabolismExpDataView />
    </>
  );
}
