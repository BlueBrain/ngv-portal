
import { Urls } from '@/layouts/Navigation/constans';
import { basePath } from '@/config';

const expDataUrl = basePath + Urls.METABOLISM + Urls.EXPERIMENTAL_DATA;

const textContent = {
  pageDescriptionMeta: 'The NGV unit model is reconstructed and simulated using Julia scientific computing language. The experimental data for the metabolism model is listed in the experimental data section',

  pageDescription: (<p>The NGV unit model is reconstructed and simulated using Julia scientific computing language. The experimental data for the metabolism model is listed in the  <a href={expDataUrl} target="_blank" rel="noreferrer">experimental data</a> section.</p>),

  modelComponents: (<p>To access the equations, parameters and initial values for the metabolism model components, i.e. for reactions and transport processes, please make a selection below.</p>),
};

export default textContent;
