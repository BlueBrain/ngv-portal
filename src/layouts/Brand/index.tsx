import React from 'react';
import Link from 'next/link';

import { baseUrl } from '../../config';

const classPrefix = 'brand__';

const Brand: React.FC = () => {
  return (
    <div className={`${classPrefix}basis`}>
      <div className="logo">
        <a href="https://www.epfl.ch/">
          <img
            src={`${baseUrl}/assets/images/epfl-logo.svg`}
            alt="EPFL logo"
          />
        </a>
      </div>
      <Link href="/">
        <a className="project">
          <h2 className="text-white bbp-name">Blue Brain Project</h2>
          <h2 className="text-white name">NGV Portal</h2>
        </a>
      </Link>
    </div>
  );
};

export default Brand;
