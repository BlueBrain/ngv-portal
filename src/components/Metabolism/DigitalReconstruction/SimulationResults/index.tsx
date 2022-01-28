import React from 'react';

import textContent from '@/text-content/metabolism/digital-reconstruction';
import ImageViewer from '@/components/ImageViewer';
import { basePath } from '@/config';


export default function SimulationResults() {
  const imageBasePath = `${basePath}/assets/images/metabolism/digital-reconstruction/simulation`;

  return (
    <>
      <h4>{textContent.simulationResults}</h4>

      <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam iure doloremque, asperiores quasi, veniam fugiat, corrupti cupiditate similique ex obcaecati incidunt quos exercitationem architecto dolore rem vero at aspernatur!</p>
      <ImageViewer
        src={`${imageBasePath}/figure_placeholder_sim_synaptic_metabolism.png`}
        alt="Simulation synaptic metabolism"
        border
      />

      <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam iure doloremque, asperiores quasi, veniam fugiat, corrupti cupiditate similique ex obcaecati incidunt quos exercitationem architecto dolore rem vero at aspernatur!</p>
      <ImageViewer
        src={`${imageBasePath}/sim_metabolism_one_AP.png`}
        alt="Simulation metabolism AP"
        border
      />

      <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam iure doloremque, asperiores quasi, veniam fugiat, corrupti cupiditate similique ex obcaecati incidunt quos exercitationem architecto dolore rem vero at aspernatur!</p>
      <ImageViewer
        src={`${imageBasePath}/sim_metabolism_spikes.png`}
        alt="Simulation metabolism spikes"
        border
      />
    </>
  );
}
