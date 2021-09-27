import React, { useState } from 'react';

import { Color } from '../../types';


const classPrefix = 'info-box__';

type InfoBoxProps = {
  title?: string;
  content: React.ReactNode;
  color?: Color;
  collapse?: Boolean;
};

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  content,
  color = 'default',
  collapse = false,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div className={`${classPrefix}basis ${color}`}>
      {title && <h3 className="text-white">{title}</h3>}
      <div className={`content ${(collapse && collapsed) ? 'collapsed' : ''}`}>{content}</div>
      {collapse && (
        <div
          className="collapse-ctrl mt-2 hide-sm"
          onClick={toggleCollapse}
        >
          {collapsed ? 'Show more' : 'Show less'}
        </div>
      )}
    </div>
  );
};


export default InfoBox;
