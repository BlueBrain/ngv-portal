
import React from 'react';

import ScrollTop from '../../components/ScrollTop';


const classPrefix = 'data-container__';

type DataContainerProps = {
  visible?: boolean;
  children: React.ReactNode
};

const DataContainer: React.FC<DataContainerProps> = ({
  visible = true,
  children,
}) => {
  return (
    <>
      {visible && (
        <div className={`${classPrefix}basis`}>
          <div className="scroll-top">
            <ScrollTop />
          </div>
          <div className="center">{children}</div>
        </div>
      )}
    </>
  );
};

export default DataContainer;
