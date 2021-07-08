import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';


const classPrefix = 'image-viewer__';

export type ImageViewerProps = {
  src: string;
  thumbnailSrc?: string;
  alt?: string;
  canExpand?: boolean;
  border?: boolean;
  aspectRatio?: string;
};

const ImageViewer: React.FC<ImageViewerProps> = ({
  src,
  thumbnailSrc,
  alt,
  aspectRatio,
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
    <div className={`${classPrefix}basis`}>
      <img
        src={thumbnailSrc || src}
        alt={alt}
        onClick={(e: React.MouseEvent) => onThumbnailClick(e)}
        style={{
          aspectRatio,
          border: border ? '1px solid grey' : 'none',
        }}
      />
      {expanded && (
        <Lightbox
          mainSrc={src}
          mainSrcThumbnail={thumbnailSrc}
          onCloseRequest={() => setExpanded(false)}
        />
      )}
    </div>
  );
};

export default ImageViewer;
