import React from 'react';

import styles from './styles.module.scss';

import { EnzymeDataItemType } from './index';


type ItemDetailsProps = {
  enzymeData: EnzymeDataItemType;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({enzymeData}) => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.name}>
          <h1>{ enzymeData?.model_component_name }</h1>
        </div>

        <div className={styles.formula}>
          <h2>Processes</h2>
          { enzymeData?.model_component_process?.map(p => (<code key={p}>{p}</code>))}
        </div>

        <div className={styles.parameters}>
          <h2>Parameters</h2>
          { enzymeData?.params?.map(p => (<div key={p}>• {p}</div>)) }
        </div>

        <div className={styles.metabolites}>
          <h2>Metabolite initial values</h2>
          { enzymeData?.variables?.map(v => (<div key={v.name}>• {v.name} = {v.initValue}</div>)) }
        </div>

        <div className={styles.rates}>
          <h2>Equations</h2>
          { enzymeData?.comment  || '' }
          { enzymeData?.rates_functions?.map(r => (<code key={r}>{r}</code>)) }
        </div>

        <div className={styles.plotsContainer}>
          <h2>Plots</h2>
          {/* { enzymeData?.figure_combo } */}
        </div>

      </div>
    </>
  );
}

export default ItemDetails;
