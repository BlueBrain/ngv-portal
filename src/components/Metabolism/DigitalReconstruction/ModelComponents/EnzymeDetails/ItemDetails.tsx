import React from 'react';
import codeStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';

import styles from './styles.module.scss';

import ImageViewer from '@/components/ImageViewer';
import { clusterStaticDataBaseUrl, basePath } from '@/config';
import { EnzymeDataItemType } from './index';


type ItemDetailsProps = {
  enzymeData: EnzymeDataItemType;
}

const clusterImgBase = `${clusterStaticDataBaseUrl}/metabolism/digital-reconstruction`;
const fullImgBase = `${basePath}/data/metabolism/digital-reconstruction`;

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
            <SyntaxHighlighter
              language="julia"
              style={codeStyle}
              customStyle={{ fontSize: '14px' }}
              wrapLongLines
              key={p}
            >
              { p }
            </SyntaxHighlighter>
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
            <SyntaxHighlighter
              language="julia"
              style={codeStyle}
              customStyle={{ fontSize: '14px' }}
              key={r}
              wrapLongLines
            >
              { r }
            </SyntaxHighlighter>
          )) }
        </div>

        <div className={styles.plotsContainer}>
          <h2>Plots</h2>
          <ImageViewer
            src={`${fullImgBase}/${enzymeData?.figure_combo}`}
            thumbnailSrc={`${clusterImgBase}/${enzymeData?.figure_combo}`}
            alt="Enzyme combo plot"
            border
          />
        </div>

      </div>
    </>
  );
}

export default ItemDetails;
