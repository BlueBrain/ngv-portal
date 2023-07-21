
import { Urls } from '@/layouts/Navigation/constans';
import { basePath } from '@/config';

const expDataUrl = basePath + Urls.METABOLISM + Urls.EXPERIMENTAL_DATA;

const textContent = {
  pageDescriptionMeta: 'The NGV unit model is reconstructed and simulated using Julia scientific computing language. The experimental data for the metabolism model is listed in the experimental data section',

  pageDescription: (<p>The NGV unit model is reconstructed and simulated using Julia scientific computing language. The experimental data for the metabolism model is listed in the  <a href={expDataUrl} target="_blank" rel="noreferrer">experimental data</a> section.</p>),

  modelComponents: (<p>To access the equations, parameters and initial values for the metabolism model components, i.e. for reactions and transport processes, please make a selection below.</p>),
  
  modelOverview: (<div>
    <p>NGV unit and the metabolism of the microcircuit models.</p>
    <p>The figure below shows the central part of the NGV metabolism model (i.e. "core metabolism model"). Reactions and metabolites in this part of the model are compartmentalised to the neuronal and astrocytic cytosol and mitochondria, extracellular space and vasculature. Arrows are coloured according to the type of process, which is based on EC numbers for enzymatic reactions, while transport processes and glycogenolysis regulation processes are coloured in gray. We use common abbreviations for the molecule and reaction names for the figure readability. Full names can be found in supplementary materials [**add page number/link here later**]. Equations, parameters and initial values for the metabolism model components, i.e. for reactions and transport processes, can be accessed by clicking on corresponding enzymes and transporters in the figure. Blood volume and deoxyhemoglobin dynamics, as well as arterial supply of glucose and oxygen can be accessed by selecting "vasculature dynamics" in capillary. Components of pentose phosphate pathway in astrocyte and shown in semi-transparent color to emphasise lower activity of this pathway in astrocyte compared to the neuron. Full model along with the code tools for model building, simulation, optimisation, validation and analysis can be accessed from the github repository [**add link here later, need os**].</p>
  </div>),

  simulationResults: (<p>To run the simulations, please refer to supplementary <a href="#">material</a>.</p>),

  simSynapticMetabolism: (<p>The figure shows concentration dynamics as a percent deviation from the steady state for the selection of the key metabolites in response to a neuronal firing caused by synaptic activation.</p>),

  simMetabolismOneAP: (<p>The figure shows concentration dynamics as a percent deviation from the steady state for the selection of the key metabolites in response to a single action potential.</p>),
  
  simMetabolismSpikes: (<p>The figure shows concentration dynamics as a percent deviation from the steady state  for the selection of the key metabolites in response to a train of action potentials.</p>),

  rateFnYoung: (<p>Rate functions in young state.</p>),

  rateFnAged: (<p>Rate functions with coefficients for scaling enzyme and transporter concentrations  according to the aged brain RNA fold changes.</p>),
};

export default textContent;
