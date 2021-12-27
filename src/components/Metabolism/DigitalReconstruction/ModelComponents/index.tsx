import React, { useState } from 'react';

import EnzymeDetails from './EnzymeDetails';
import ComponentPicker from './ComponentPicker';

// TODO: fetch this from nexus
import intermediateMapping from '@/../public/assets/files/metabolism/digital-reconstruction/ngvportal_imgpicker_mapping_dict.json';


export default function ModelComponents() {

  const [infoKeys, setInfoKeys] = useState(['AAT--neuron-mitochondrion']);

  const eventHandler = (event) => {
    const { target } = event; 
    if (target?.tagName === 'DIV') return;
    
    const itemText = target.innerText.replaceAll(' ', '');
    const parent = target.getAttribute('parent-id');
    const itemParentPairStr = `${itemText}--${parent}`;

    setInfoKeys(intermediateMapping[itemParentPairStr] || []);
  }

  return (
    <>
      <ComponentPicker onClick={eventHandler} />

      <EnzymeDetails infoKeys={infoKeys}/>
    </>
  );
}
