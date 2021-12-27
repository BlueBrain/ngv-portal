import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

import styles from './styles.module.scss';

export default function ComponentPicker({
  intermediateMapping,
  componentKey,
  prefix,
  sufix,
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
        showSearch
        value={componentKey}
        style={style}
        defaultActiveFirstOption={false}
        onSearch={onClick}
        onChange={onClick}
      >
        {options}
      </Select>

      <h3 className={styles.dropdownSufix}>{ sufix }</h3>
    </>
  );
}