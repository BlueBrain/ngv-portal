import React from 'react';
import Link from 'next/link';

// import './style.scss';

const classPrefix = 'brand__';

const Brand: React.FC = () => {
  return (
    <div className={`${classPrefix}basis`}>
      <div className="logo">
        <a href="https://www.epfl.ch/">
          <img
            src="/ngv-portal/assets/images/epfl-logo.svg"
            alt="EPFL logo"
          />
        </a>
      </div>
      <Link href="/">
        <a>
          <h1 className="text-white" >NGV Portal</h1>
        </a>
      </Link>
    </div>
  );
};

export default Brand;
