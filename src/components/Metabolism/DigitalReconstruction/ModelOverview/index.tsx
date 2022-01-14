import React from 'react';

import textContent from '@/text-content/metabolism/digital-reconstruction';
import ImageViewer from '@/components/ImageViewer';
import { antBreakpoint, basePath } from '@/config';

export default function ModelOverview() {
  return (
    <>
      <h4>{textContent.modelOverview}</h4>

      <ImageViewer
        src={`${basePath}/assets/images/metabolism/digital-reconstruction/model_overview.png`}
        width={2141}
        height={1528}
        sizes={`(min-width: ${antBreakpoint.sm}) 640px, 100vw`}
        alt="Model of neuron and astrocyte with metabolism"
      />
    </>
  );
}
