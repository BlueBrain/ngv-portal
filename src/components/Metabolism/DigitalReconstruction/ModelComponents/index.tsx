import React, { useState } from 'react';
import { Modal } from 'antd';

import EnzymeDetails from './EnzymeDetails';
import ComponentPicker from './ComponentPicker';

// TODO: fetch this from nexus
import intermediateMapping from '@/../public/assets/files/metabolism/digital-reconstruction/ngvportal_imgpicker_mapping_dict.json';


export default function ModelComponents() {

  const [infoKeys, setInfoKeys] = useState(['AAT--neuron-mitochondrion']);
  const [modalVisible, setModalVisible] = useState(false);

  const eventHandler = (event) => {
    const { target } = event; 
    if (target?.tagName === 'DIV') return;
    
    const itemText = target.innerText.replaceAll(' ', '');
    const parent = target.getAttribute('parent-id');
    const itemParentPairStr = `${itemText}--${parent}`;

    setInfoKeys(intermediateMapping[itemParentPairStr] || []);
    setModalVisible(true);
  }

  return (
    <>
      <ComponentPicker onClick={eventHandler} />

      <Modal
        centered
        width={1000}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <EnzymeDetails infoKeys={infoKeys}/>
      </Modal>
      
    </>
  );
}
