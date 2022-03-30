import React from 'react';

import textContent from '@/text-content/metabolism/digital-reconstructions';
import ImageViewer from '@/components/ImageViewer';
import { basePath } from '@/config';
import ImageAndDescriptionTemplate from '@/components/ImageAndDescriptionTemplate';

const assetsBase = 'metabolism/digital-reconstructions';

export default function SimulationResults() {
  return (
    <>
      <h4>{textContent.simulationResults}</h4>

      <p className="mt-4"></p>
      <ImageAndDescriptionTemplate
        textKey="simSynapticMetabolism"
        imagePath="simulation/figure_placeholder_sim_synaptic_metabolism.png"
        assetsBase={assetsBase}
      />

      <p className="mt-4"></p>
      <ImageAndDescriptionTemplate
        textKey="simMetabolismOneAP"
        imagePath="simulation/sim_metabolism_one_AP.png"
        assetsBase={assetsBase}
      />

      <p className="mt-4"></p>
      <ImageAndDescriptionTemplate
        textKey="simMetabolismSpikes"
        imagePath="simulation/sim_metabolism_spikes.png"
        assetsBase={assetsBase}
      />
    </>
  );
}
