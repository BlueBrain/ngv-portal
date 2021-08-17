import React from 'react';

import { Color } from '../../types';


const classPrefix = 'info-box__';

type InfoBoxProps = {
  title?: string;
  content: React.ReactNode;
  color?: Color;
};

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  content,
  color = 'default',
}) => {
  return (
    <div className={`${classPrefix}basis ${color}`}>
      {title && <h3 className="text-white">{title}</h3>}
      {content}
    </div>
  );
};


export default InfoBox;
