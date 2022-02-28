import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic'

import ImageViewer from '@/components/ImageViewer';
import { basePath } from '@/config';

import styles from './styles.module.scss';


type ImageAndDescriptionTemplate = {
  textKey: string;
  imagePath: string;
  imageAlt?: string;
  assetsBase: string;
  extraHtml?: ReactNode; 
}

const ImageAndDescriptionTemplate: React.FC<ImageAndDescriptionTemplate> = ({
  textKey,
  imagePath,
  imageAlt,
  assetsBase,
  extraHtml,
}) => {
  const textContent = dynamic(() => import(`@/text-content/${assetsBase}`))
  const imgBase = `${basePath}/assets/images/${assetsBase}`;

  return (
    <>
      <div>
        { textContent[textKey]}
      </div>

      <ImageViewer
        src={`${imgBase}/${imagePath}`}
        alt={imageAlt || `${textKey} image`}
      />

      { extraHtml }
    </>
  );
}

export default ImageAndDescriptionTemplate;
