import React from 'react';
import Brand from '../Brand';
import NavDesktop from '../NavDesktop';
import NavMobile from '../NavMobile';
import Link from 'next/link';
import { accentColors } from '../../config';
import { IoIosArrowDropdown } from 'react-icons/io';


const classPrefix = 'nav__';
const classDisabled = 'disabled';

export const HomeNav: React.FC = () => (
  <ul className="home-nav">
    <li>
      <Link href="/#explore">
        Explore
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
        <button
          className="top-level-btn"
          style={{ backgroundColor: accentColors.blue }}
          onClick={() => toggleSubmenu('exp')}
        >
          ANATOMY{' '}
          <span className="show-mobile">
            <IoIosArrowDropdown />
          </span>
        </button>
        <ul
          className="submenu"
          style={{ borderLeftColor: accentColors.blue }}
        >
          <li>
            <Link href="/anatomy/experimental-data">
              <a>Experimental Data</a>
            </Link>
          </li>
          <li>
            <Link href="/anatomy/reconstruction-data">
              <a>Reconstruction Data</a>
            </Link>
          </li>
          <li>
            <Link href="/anatomy/validations">
              <a>Validations</a>
            </Link>
          </li>
          <li>
            <Link href="/anatomy/predictions">
              <a>Predictions</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className={`${active === 'rec' ? 'active' : ''} ${classDisabled}`}>
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
              <a>Experimental Data</a>
            </Link>
          </li>
          <li>
            <Link href="/metabolism/reconstruction-data">
              <a>Reconstruction Data</a>
            </Link>
          </li>
          <li>
            <Link href="/metabolism/validations">
              <a>Validations</a>
            </Link>
          </li>
          <li>
            <Link href="/metabolism/predictions">
              <a>Predictions</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className={`${active === 'dig' ? 'active' : ''} ${classDisabled}`}>
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
              <a>Experimental Data</a>
            </Link>
          </li>
          <li>
            <Link href="/blood-flow/reconstruction-data">
              <a>Reconstruction Data</a>
            </Link>
          </li>
          <li>
            <Link href="/blood-flow/validations">
              <a>Validations</a>
            </Link>
          </li>
          <li>
            <Link href="/blood-flow/predictions">
              <a>Predictions</a>
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
