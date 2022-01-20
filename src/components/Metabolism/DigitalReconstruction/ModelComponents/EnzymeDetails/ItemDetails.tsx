import React from 'react';

import styles from './styles.module.scss';

import ImageViewer from '@/components/ImageViewer';
import { staticDataBaseUrl } from '@/config';
import { EnzymeDataItemType } from './index';
import FormulaRenderer from './FormulaRenderer';


type ItemDetailsProps = {
  enzymeData: EnzymeDataItemType;
}

const fullImgBase = `${staticDataBaseUrl}/metabolism/digital-reconstruction`;

const ItemDetails: React.FC<ItemDetailsProps> = ({enzymeData}) => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.name}>
          <h1>{ enzymeData?.model_component_name }</h1>
        </div>

        <div className={styles.formula}>
          <h2>Processes</h2>
          { enzymeData?.model_component_process?.map(p => (
            <>
              <FormulaRenderer
                formula={p}
                key={p}
              />
            </>
          )) }
        </div>

        <div className={styles.parameters}>
          <h2>Parameters</h2>
          <ul>
            { enzymeData?.params?.map(p => (<li key={p}>{p}</li>)) }
          </ul>
        </div>

        <div className={styles.metabolites}>
          <h2>Metabolite initial values</h2>
          <ul>
            { enzymeData?.variables?.map(v => (<li key={v.name}>{v.name} = {v.initValue}</li>)) }
          </ul>
        </div>

        <div className={styles.rates}>
          <h2>Equations</h2>
          { enzymeData?.comment  || '' }
          { enzymeData?.rates_functions?.map(r => (
            <>
              <FormulaRenderer
                formula={r}
                key={r}
              />
            </>
          )) }
        </div>

        <div className={styles.plotsContainer}>
          <h2>Plots</h2>
          <ImageViewer
            src={`${fullImgBase}/${enzymeData?.figure_combo}`}
            thumbnailSrc={`${fullImgBase}/${enzymeData?.figure_combo}`}
            alt="Enzyme combo plot"
            border
          />
        </div>

      </div>
    </>
  );
}

export default ItemDetails;
