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
  columnFormat?: boolean;
  imgLegend?: ReactNode;
}

const ImageAndDescriptionTemplate: React.FC<ImageAndDescriptionTemplate> = ({
  textKey,
  imagePath,
  imageAlt,
  assetsBase,
  extraHtml,
  columnFormat = false,
  imgLegend,
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
      <div className={columnFormat ? styles.containerColumn : styles.container}>
        <div className={styles.text}>
          { textContent }
        </div>
        <div className={styles.image}>
          <ImageViewer
            src={`${imgBase}/${imagePath}`}
            alt={imageAlt || `${textKey} image`}
          />
          { imgLegend }
        </div>
      </div>

      { extraHtml }
    </>
  );
}

export default ImageAndDescriptionTemplate;
