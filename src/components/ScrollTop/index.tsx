import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';


const classPrefix = 'scroll-top__';

type ScrollTopProps = {
};

const ScrollTop: React.FC<ScrollTopProps> = ({}) => {
  const scrollTop = () => document.getElementById('filters').scrollIntoView({ behavior: 'smooth' });

  return (
    <div className={`${classPrefix}base`} onClick={scrollTop}>
      <IoIosArrowUp />
    </div>
  );
};

export default ScrollTop;
