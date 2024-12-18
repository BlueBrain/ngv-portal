import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { basePath } from '../../config';


type SectionCardProps = {
  title: string | React.ReactNode;
  bgImgSrc?: string;
  description?: ReactNode;
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
  const [infoOpened, setInfoOpened] = useState(false);

  return (
    <div className={`section-card ${bgColor} ${infoOpened ? 'show' : ''}`}>
      <div className="head">
        <Image
          src={bgImgSrc}
          width="640"
          height="480"
          layout="responsive"
          alt={`Small illustration representing ${title}`}
        />
      </div>
      <div className="body">
        <div className="title">
          <div className="dash"></div>
          <h3 className="text-white">{title}</h3>
        </div>

        {links.map(link => link.href ? (
          <a
            key={link.label}
            href={`${basePath}${routeBase}${link.href}`}
          >
            {link.label}
          </a>
        ) : (
          <a
            key={link.label}
            className="disabled-link"
            href="#"
          >
            {link.label}
          </a>
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
