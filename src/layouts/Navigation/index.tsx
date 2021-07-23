import React, { ReactChild, ReactFragment } from 'react';
import Brand from '../Brand';
import NavDesktop from '../NavDesktop';
import NavMobile from '../NavMobile';
import Link from 'next/link';
import { accentColors } from '../../config';
// import SvgRegions from '../../components/Icons/Regions';
// import SvgNeuron from '../../components/Icons/Neuron';
// import SvgMicrocircuit from '../../components/Icons/Microcircuit';
// import SvgSynapse from '../../components/Icons/Synapse';
import { IoIosArrowDropdown } from 'react-icons/io';

const classPrefix = 'nav__';

export const HomeNav: React.FC = () => (
  <ul className="home-nav">
    <li>
      <Link href="/about">
        About
      </Link>
    </li>
    <li>
      <Link href="/#publications">
        Publications
      </Link>
    </li>
  </ul>
);

type NavProps = {
  initActive?: string;
  canClose?: boolean;
};

export const SecondaryNav: React.FC<NavProps> = ({ initActive, canClose }) => {
  const [active, setActive] = React.useState(initActive);

  const toggleSubmenu = (name: string) => {
    if (active !== name) {
      setActive(name);
    } else if (canClose) {
      setActive(undefined);
    }
  };

  return (
    <ul className="secondary-nav">
      <li className={active === 'exp' ? 'active' : ''}>
        {/* <span style={{ backgroundColor: accentColors.blue }} /> */}
        <button
          className="top-level-btn"
          style={{ backgroundColor: accentColors.blue }}
          onClick={() => toggleSubmenu('exp')}
        >
          GEOMETRY{' '}
          <span className="show-mobile">
            <IoIosArrowDropdown />
          </span>
        </button>
        <ul
          className="submenu"
          style={{ borderLeftColor: accentColors.blue }}
        >
          <li>
            <Link href="/geometry/experimental-data">
              <a>
                {/* <SvgRegions fill={accentColors.blue} /> */}
                Experimental Data
              </a>
            </Link>
          </li>
          <li>
            <Link href="/geometry/reconstruction-data">
              <a>
                {/* <SvgNeuron fill={accentColors.blue} /> */}
                Reconstruction Data
              </a>
            </Link>
          </li>
          <li>
            <Link href="/geometry/validations">
              <a>
                {/* <SvgNeuron fill={accentColors.blue} /> */}
                Validations
              </a>
            </Link>
          </li>
          <li>
            <Link href="/geometry/predictions">
              <a>
                {/* <SvgNeuron fill={accentColors.blue} /> */}
                Predictions
              </a>
            </Link>
          </li>
        </ul>
      </li>
      <li className={active === 'rec' ? 'active' : undefined}>
        {/* <span style={{ backgroundColor: accentColors.purple }} /> */}
        <button
          className="top-level-btn"
          style={{ backgroundColor: accentColors.purple }}
          onClick={() => toggleSubmenu('rec')}
        >
          METABOLISM{' '}
          <span className="show-mobile">
            <IoIosArrowDropdown />
          </span>
        </button>
        <ul
          className="submenu"
          style={{ borderLeftColor: accentColors.purple }}
        >
          <li>
            <Link href="/metabolism/experimental-data">
              <a>
                {/* <SvgRegions fill={accentColors.purple} /> */}
                Experimental Data
              </a>
            </Link>
          </li>
          <li>
            <Link href="/metabolism/reconstruction-data">
              <a>
                {/* <SvgMicrocircuit fill={accentColors.purple} /> */}
                Reconstruction Data
              </a>
            </Link>
          </li>
          <li>
            <Link href="/metabolism/validations">
              <a>
                {/* <SvgSynapse fill={accentColors.purple} /> */}
                Validations
              </a>
            </Link>
          </li>
          <li>
            <Link href="/metabolism/predictions">
              <a>
                {/* <SvgNeuron fill={accentColors.purple} /> */}
                Predictions
              </a>
            </Link>
          </li>
        </ul>
      </li>
      <li className={active === 'dig' ? 'active' : undefined}>
        {/* <span style={{ backgroundColor: accentColors.red }} /> */}
        <button
          className="top-level-btn"
          style={{ backgroundColor: accentColors.red }}
          onClick={() => toggleSubmenu('dig')}
        >
          BLOOD FLOW{' '}
          <span className="show-mobile">
            <IoIosArrowDropdown />
          </span>
        </button>
        <ul
          className="submenu"
          style={{ borderLeftColor: accentColors.red }}
        >
          <li>
            <Link href="/blood-flow/experimental-data">
              <a>
                {/* <SvgRegions fill={accentColors.red} /> */}
                Experimental Data
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blood-flow/reconstruction-data">
              <a>
                {/* <SvgMicrocircuit fill={accentColors.red} /> */}
                Reconstruction Data
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blood-flow/validations">
              <a>
                {/* <SvgSynapse fill={accentColors.red} /> */}
                Validations
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blood-flow/predictions">
              <a>
                {/* <SvgNeuron fill={accentColors.red} /> */}
                Predictions
              </a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

const Navigation: React.FC = () => {
  return (
    <div role="navigation" className={`${classPrefix}basis`}>
      <Brand />
      <NavDesktop />
      <NavMobile />
    </div>
  );
};

export default Navigation;
