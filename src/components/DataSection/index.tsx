import React, { ReactChild, ReactFragment } from 'react';


const classPrefix = 'data-section';

type DataSectionColor = 'red'

type DataSectionProps = {
  title: string;
  children: ReactChild | ReactFragment;
  color?: DataSectionColor;
  className?: string;
  id?: string;
};

const DataSection: React.FC<DataSectionProps> = ({
  title,
  children,
  color = '',
  className = '',
  id = 'data',
}) => {
  return (
    <div id={id} className={`${classPrefix} ${color} ${className}`}>
      <div className="header">
        <div>
        {title}
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default DataSection;
