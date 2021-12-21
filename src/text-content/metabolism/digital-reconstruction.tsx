
import { Urls } from '@/layouts/Navigation/constans';
import { baseUrl } from '@/config';

const expDataUrl = baseUrl + Urls.METABOLISM + Urls.EXPERIMENTAL_DATA;

const textContent = {
  pageDescriptionMeta: 'The NGV unit model is reconstructed and simulated using Julia scientific computing language. The microcircuit coupled to metabolism is represented by a combination of Julia, Python and Neurodamus (Blue Brain software based on the NEURON simulator). The experimental data for the metabolism model is listed in the previous section [ref] and for the microcircuit model in Markram et al 2015 [ref].',

  pageDescription: (<p>The NGV unit model is reconstructed and simulated using Julia scientific computing language. The microcircuit coupled to metabolism is represented by a combination of Julia, Python and Neurodamus (Blue Brain software based on the NEURON simulator). The experimental data for the metabolism model is listed in the previous section <a href={expDataUrl} target="_blank" rel="noreferrer">[ref]</a> and for the microcircuit model in Markram et al 2015 <a href="https://www.cell.com/fulltext/S0092-8674(15)01191-5" target="_blank" rel="noreferrer">[ref]</a>.</p>),
};

export default textContent;
