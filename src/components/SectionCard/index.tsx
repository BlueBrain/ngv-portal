import React from 'react';
import Image from 'next/image';

import { baseUrl } from '../../config';


type SectionCardProps = {
  title: string;
  bgImgSrc?: string;
  description?: string;
  bgColor?: string;
  routeBase: string;
  links: {
    label: string;
    href?: string;
  }[];
};

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  bgImgSrc,
  description,
  bgColor,
  routeBase,
  links,
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
        {links.map(link => link.href ? (
          <a href={`${baseUrl}${routeBase}${link.href}`}>{link.label}</a>
        ) : (
          <a href="#" className="disabled-link">{link.label}<sup>*</sup></a>
        ))}
        <div
          className="info-btn"
          onClick={() => setInfoOpened(!infoOpened)}
        >
          {infoOpened ? (<FaMinus size={14}/>) : (<FaPlus size={14}/>)}
        </div>

        <div className={`info`}>
          {description}
        </div>
      </div>

    </div>
  );
};

export default SectionCard
