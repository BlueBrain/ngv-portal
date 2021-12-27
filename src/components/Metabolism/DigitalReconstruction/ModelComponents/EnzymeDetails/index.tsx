import React from 'react';

import ItemDetails from './ItemDetails';

type Variable = {
  name: string;
  initValue: number;
  figure: string[];
}

export type EnzymeDataItemType = {
  model_component_name: string;
  model_component_process: string[];
  params: string[];
  rates_functions: string[];
  variables: Variable[];
  figure_combo: string;
  comment?: string;
} 

type EnzymeDataType = {
  [key: string]: EnzymeDataItemType;
}

type EnzymeDetailsProps = {
  infoKeys: Array<string>;
}

// TODO: fetch this from nexus
const enzymeData: EnzymeDataType = require('@/../public/assets/files/metabolism/digital-reconstruction/ngv_portal_metab_model_v2_processed.json');

const EnzymeDetails: React.FC<EnzymeDetailsProps> = ({infoKeys}) => {

  return (
    <>
      {
        infoKeys.map((infoKey) => {
          const info = enzymeData[infoKey];
          return <ItemDetails key={info?.model_component_name} enzymeData={info}></ItemDetails>
        })
      }
    </>
  );

}

export default EnzymeDetails;
