import React, { ReactNode, useState } from 'react';

import textContent from '@/text-content/metabolism/validations';
import ImageViewer from '@/components/ImageViewer';
import { basePath, antBreakpoint } from '@/config';

import styles from './styles.module.scss';


type ValidationTemplateProps = {
  textKey: string;
  imagePath: string;
  imageAlt?: string;
}

const imgBase = `${basePath}/assets/images/metabolism/validations`;

const ValidationTemplate: React.FC<ValidationTemplateProps> = ({
  textKey,
  imagePath,
  imageAlt,
}) => {
  return (
    <>
      <div>
        { textContent[textKey]}
      </div>

      <ImageViewer
        src={`${imgBase}/${imagePath}`}
        alt={imageAlt || `${textKey} image`}
      />

      <div>
        { textContent.supplementaryMaterialLegend }
      </div>
    </>
  );
}

export default ValidationTemplate;
