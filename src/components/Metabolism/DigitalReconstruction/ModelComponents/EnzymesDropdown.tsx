import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

import styles from './styles.module.scss';

export default function ComponentPicker({
  intermediateMapping,
  componentKey,
  prefix,
  suffix,
  onClick,
}) {

  const options = Object.keys(intermediateMapping).map(e => (
    <Option key={e} value={e}>{e}</Option>
  ));

  return (
    <>
      <p className={styles.dropdownPrefix}>{ prefix }</p>

      <Select
        className={styles.dropdownWidth}
        value={componentKey}
        defaultActiveFirstOption={false}
        onSelect={onClick}
        showArrow={true}
        showSearch={true}
      >
        {options}
      </Select>

      <p className={`${styles.hideOnMobile} ${styles.dropdownSuffix}`}>{ suffix }</p>
    </>
  );
}
