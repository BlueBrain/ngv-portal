import React, { useState } from 'react';
import { Select } from 'antd';

import textContent from '@/text-content/metabolism/digital-reconstructions';
import ImageViewer from '@/components/ImageViewer';
import { staticDataBaseUrl } from '@/config';
import { Option } from '@/types';

import style from './styles.module.scss';

// obtain the variables to choose from
const concentrations = require('@/../public/assets/files/concentration_table_full.json');
const variableOptions: Option[] = concentrations.map((concentration) => (
  {value: concentration.id, label: concentration.id}
));

const assetsBase = `${staticDataBaseUrl}/metabolism/digital-reconstruction/simulations`;
const fixImagePath = 'fig_VNeu.png';

export default function SimulationResults() {
  const [selectedVariable, setSelectedVariable] = useState('ATP_n');
  const imagePath = `fig_${selectedVariable}.png`;

  return (
    <>
      <h4>{textContent.simulationResults}</h4>

      <Select
        showSearch
        placeholder="Select variable"
        defaultValue={'ATP_n'}
        options={variableOptions}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        onSelect={setSelectedVariable}
        optionFilterProp="children"
        className={style.selector}
      />

      <div className={style.comparatorContainer}>
        <ImageViewer
          src={`${assetsBase}/${fixImagePath}`}
          alt={''}
          className={style.img}
        />
        <ImageViewer
          src={`${assetsBase}/${imagePath}`}
          alt={''}
          className={style.img}
        />
      </div>
    </>
  );
}
