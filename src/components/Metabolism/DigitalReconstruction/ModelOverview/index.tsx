import React from 'react';
import Image from 'next/image';

import textContent from '@/text-content/metabolism/digital-reconstruction';
import { antBreakpoint, basePath } from '@/config';

export default function ModelOverview() {
  return (
    <>
      <h3>{textContent.modelOverview}</h3>

      <Image
        src={`${basePath}/assets/images/metabolism/digital-reconstruction/model_overview.png`}
        alt="Model of neuron and astrocyte with metabolism"
        layout="responsive"
        width="1280"
        height="720"
        sizes={`(min-width: ${antBreakpoint.lg}) 640px, 100vw`}
        loading="eager"
        priority
      />
    </>
  );
}
