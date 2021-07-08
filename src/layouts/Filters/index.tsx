import React, { ReactChild, ReactFragment } from 'react';

import ScrollTo from '../../components/ScrollTo';
import { Color } from '../../types';
// import './style.scss';

const classPrefix = 'filters__';

type FiltersProps = {
  primaryColor: Color;
  children: ReactChild | ReactFragment;
  hasData?: boolean;
  backgroundAlt?: boolean;
  id?: string;
};

const Filters: React.FC<FiltersProps> = ({
  primaryColor,
  children,
  hasData,
  backgroundAlt,
  id = 'filters',
}) => {
  return (
    <div>
      <div
        id={id}
        className={`${classPrefix}basis ${backgroundAlt ? 'background-alt' : ''}`}
      >
        <div className="center">{children}</div>
      </div>
      {!!hasData && (
        <div className="scroll-to">
          <ScrollTo anchor="data" color={primaryColor} direction="down">
            View data
          </ScrollTo>
        </div>
      )}
    </div>
  );
};

export default Filters;
