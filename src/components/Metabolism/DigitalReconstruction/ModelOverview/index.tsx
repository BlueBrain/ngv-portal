import React from 'react';

import textContent from '@/text-content/metabolism/digital-reconstruction';
import ImageViewer from '@/components/ImageViewer';
import { staticDataBaseUrl, antBreakpoint } from '@/config';

const imgBase = `${staticDataBaseUrl}/metabolism/digital-reconstruction`;

export default function ModelOverview() {
  return (
    <>
      <h4>{textContent.modelOverview}</h4>

      <ImageViewer
        src={`${imgBase}/model_overview.png`}
        width={2141}
        height={1528}
        sizes={`(min-width: ${antBreakpoint.sm}) 640px, 100vw`}
        alt="Model of neuron and astrocyte with metabolism"
      />
    </>
  );
}
