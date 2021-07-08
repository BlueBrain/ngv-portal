import React from 'react';
import Image from 'next/image';

import { baseUrl } from '../../config';


type SectionCardProps = {
  title: string;
  bgImgSrc?: string;
  description?: string;
  bgColor?: string;
  routeBase: string;
};

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  bgImgSrc,
  description,
  bgColor,
  routeBase,
}) => {
  return (
    <div className={`section-card ${bgColor}`}>
      <div className="head">
        <Image
          src={bgImgSrc}
          width="640"
          height="480"
          layout="responsive"
        />
        <div className="title">
          <div className="dash"></div>
          <h3 className="text-white">{title}</h3>
        </div>
      </div>
      <div className="body">
          <a href={`${baseUrl}${routeBase}/experimental-data`}>Experimental data</a>
          <a href={`${baseUrl}${routeBase}/reconstruction-data`}>Reconstruction data</a>
          <a href={`${baseUrl}${routeBase}/validations`}>Validations</a>
          <a href={`${baseUrl}${routeBase}/predictions`}>Predictions</a>
      </div>

    </div>
  );
};

export default SectionCard