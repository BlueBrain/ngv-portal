
import { Urls } from '@/layouts/Navigation/constans';
import { baseUrl } from '@/config';

const expDataUrl = baseUrl + Urls.METABOLISM + Urls.EXPERIMENTAL_DATA;

const textContent = {
  pageDescriptionMeta: 'The NGV unit model is reconstructed and simulated using Julia scientific computing language. The experimental data for the metabolism model is listed in the experimental data section',

  pageDescription: (<p>The NGV unit model is reconstructed and simulated using Julia scientific computing language. The experimental data for the metabolism model is listed in the  <a href={expDataUrl} target="_blank" rel="noreferrer">experimental data</a> section.</p>),
};

export default textContent;
