import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

import styles from './styles.module.scss';

export default function ComponentPicker({
  intermediateMapping,
  componentKey,
  prefix,
  suffix,
  style,
  onClick,
}) {

  const options = Object.keys(intermediateMapping).map(e => (
    <Option key={e} value={e}>{e}</Option>
  ));

  return (
    <>
      <h3 className={styles.dropdownPrefix}>{ prefix }</h3>

      <Select
        value={componentKey}
        style={style}
        defaultActiveFirstOption={false}
        onSelect={onClick}
        showArrow={true}
        showSearch={true}
      >
        {options}
      </Select>

      <h3 className={styles.dropdownSuffix}>{ suffix }</h3>
    </>
  );
}
