import React, { useState } from 'react';
import { Modal } from 'antd';

import EnzymeDetails from './EnzymeDetails';
import ComponentPicker from './ComponentPicker';
import EnzymesDropdown from './EnzymesDropdown';

// TODO: fetch this from nexus
import intermediateMapping from '@/../public/assets/files/metabolism/digital-reconstruction/ngvportal_imgpicker_mapping_dict.json';


export default function ModelComponents() {

  const defaultComponent = 'AAT--neuron-mitochondrion';
  const [componentKey, setComponentKey] = useState(defaultComponent);
  const inermediateDictDefaultSelectedValue = intermediateMapping[componentKey];
  const [infoKeys, setInfoKeys] = useState(inermediateDictDefaultSelectedValue);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const eventHandler = (event) => {
    const { target } = event; 
    if (target?.tagName === 'DIV') return;
    
    const itemText = target.innerText.replaceAll(' ', '');
    const parent = target.getAttribute('parent-id');
    const itemParentPairStr = `${itemText}--${parent}`;

    setInfoKeys(intermediateMapping[itemParentPairStr] || []);
    setShowDetailsModal(true);
  }

  const dropdownClicked = (selectedStr = defaultComponent) => {
    setInfoKeys(intermediateMapping[selectedStr] || []);
    setComponentKey(selectedStr);
    setShowDetailsModal(true);
  }

  return (
    <>
      <EnzymesDropdown
        intermediateMapping={intermediateMapping}
        componentKey={componentKey}
        prefix="Choose component"
        sufix="or select from image below"
        style={{ width: 300 }}
        onClick={dropdownClicked}
      />

      <ComponentPicker onClick={eventHandler} />

      <Modal
        centered
        width={1000}
        visible={showDetailsModal}
        onOk={() => setShowDetailsModal(false)}
        onCancel={() => setShowDetailsModal(false)}
      >
        <EnzymeDetails infoKeys={infoKeys}/>
      </Modal>
      
    </>
  );
}
