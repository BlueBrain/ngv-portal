import React, { ReactNode, useState, useEffect } from 'react';

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
  const imgBase = `${basePath}/assets/images/${assetsBase}`;

  const [textContent, setTextContent] = useState();

  useEffect(() => {
    import(`@/text-content/${assetsBase}`).then(m => {
      setTextContent(m.default[textKey] || '');
    });
  });

  return (
    <>
      <div>{ textContent }</div>

      <ImageViewer
        src={`${imgBase}/${imagePath}`}
        alt={imageAlt || `${textKey} image`}
      />

      { extraHtml }
    </>
  );
}

export default ImageAndDescriptionTemplate;
