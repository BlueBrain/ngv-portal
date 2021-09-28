import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';


const classPrefix = 'image-viewer__';

export type ImageViewerProps = {
  className?: string;
  src: string;
  alt: string;
  color?: string;
  canExpand?: boolean;
  aspectRatio?: string;
  width: number;
  height: number;
  sizes?: string;
  border?: boolean;
};

const ImageViewer: React.FC<ImageViewerProps> = ({
  src,
  alt,
  height,
  width,
  sizes,
  className = '',
  canExpand = true,
  border = false,
}) => {
  const [expanded, setExpanded] = useState(false);

  const onThumbnailClick = (e: React.MouseEvent) => {
    if (!canExpand) return;

    setExpanded(true);
    e.stopPropagation();
  };

  return (
    <div
      className={`${classPrefix}basis ${className}`}
      style={{ border: border ? '1px solid #cecece' : 'none', }}
    >
      <Image
        src={src}
        alt={`${alt} thumbnail`}
        onClick={(e: React.MouseEvent) => onThumbnailClick(e)}
        layout="responsive"
        height={height}
        width={width}
        sizes={sizes}
      />
      {expanded && (
        <Lightbox
          mainSrc={src}
          onCloseRequest={() => setExpanded(false)}
        />
      )}
    </div>
  );
};

export default ImageViewer;
