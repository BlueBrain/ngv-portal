import Head from 'next/head';

import BloodFlowValidationsView from '@/views/blood-flow/validations';
import textContent from '@/text-content/blood-flow/validations';
import { basePath } from '@/config';


export default function BloodFlowValidationsPage() {
  return (
    <>
      <Head>
        <title>Validations / Blood Flow / NGV Portal</title>
        <meta
          name="description"
          content={textContent.pageDescriptionMeta}
        />
        <meta property="og:title" content="Blood Flow validations - NGV Portal" />
        <meta property="og:description" content={textContent.pageDescriptionMeta} />
        <meta
          property="og:image"
          content={`${basePath}/assets/images/blood-flow/validations/Infographic.png`}
        />
      </Head>

      <BloodFlowValidationsView />
    </>
  );
}
