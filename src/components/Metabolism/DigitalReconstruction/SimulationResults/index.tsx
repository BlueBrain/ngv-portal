import React from 'react';

import textContent from '@/text-content/metabolism/digital-reconstruction';
import ImageViewer from '@/components/ImageViewer';
import { basePath } from '@/config';


export default function SimulationResults() {
  const imageBasePath = `${basePath}/assets/images/metabolism/digital-reconstruction/simulation`;

  return (
    <>
      <h4>{textContent.simulationResults}</h4>

      <ImageViewer
        src={`${imageBasePath}/figure_placeholder_sim_synaptic_metabolism.png`}
        alt="Simulation synaptic metabolism"
      />

      <ImageViewer
        src={`${imageBasePath}/sim_metabolism_one_AP.png`}
        alt="Simulation metabolism AP"
        className="mt-4"
      />

      <ImageViewer
        src={`${imageBasePath}/sim_metabolism_spikes.png`}
        alt="Simulation metabolism spikes"
        className="mt-4"
      />
    </>
  );
}
