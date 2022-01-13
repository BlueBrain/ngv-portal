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
  mappingSeparator,
  viewSeparator,
}) {

  const options = Object.keys(intermediateMapping).map(e => (
    <Option key={e} value={e}>
      { e.replace(mappingSeparator, viewSeparator) }
    </Option>
  ));

  const componentSelected = (componentStr) => {
    const newStr = componentStr.replace(viewSeparator, mappingSeparator);
    onClick(newStr);
  };

  return (
    <>
      <p className={styles.dropdownPrefix}>{ prefix }</p>

      <Select
        className={styles.dropdownWidth}
        value={componentKey}
        defaultActiveFirstOption={false}
        onSelect={componentSelected}
        showArrow={true}
        showSearch={true}
      >
        {options}
      </Select>

      <p className={styles.dropdownSuffix}>{ suffix }</p>
    </>
  );
}
