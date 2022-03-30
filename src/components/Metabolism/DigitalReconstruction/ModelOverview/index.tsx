import React from 'react';

import textContent from '@/text-content/metabolism/digital-reconstructions';
import ImageViewer from '@/components/ImageViewer';
import { basePath } from '@/config';

export default function ModelOverview() {
  return (
    <>
      <h4>{textContent.modelOverview}</h4>

      <ImageViewer
        src={`${basePath}/assets/images/metabolism/digital-reconstructions/model_overview.png`}
        aspectRatio="2141 / 1528"
        alt="Model of neuron and astrocyte with metabolism"
      />
    </>
  );
}
