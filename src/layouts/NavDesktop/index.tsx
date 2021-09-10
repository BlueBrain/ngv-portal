import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Button from '../../components/Button';
import { HomeNav, SecondaryNav } from '../Navigation';


const classPrefix = 'nav-desktop__';

const delay = 250;

type NavButtonProps = {
  path: string;
  name: string;
  notifications?: number;
  home?: boolean;
  highlight?: boolean;
  toggleClick?: () => void;
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
};

const NavButton: React.FC<NavButtonProps> = ({
  path,
  name,
  notifications,
  home,
  highlight,
  onMouseLeave,
  onMouseEnter
}) => {
  const router = useRouter();
  const isEqual = router.pathname === path;

  const button = (
    <Button
      width={highlight || home ? 140 : undefined}
      discrete={!highlight && !home}
      notifications={notifications}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      uppercase
    >
      {name}
    </Button>
  )
  if(isEqual) {
    return button;
  }
  return (
    <Link href={path}>
      <a>
        {button}
      </a>
    </Link>
  );
};

const NavDesktop = () => {
  const router = useRouter();
  const [mouseOverButton, setMouseOverButton] = useState(false);
  const [mouseOverMenu, setMouseOverMenu]=useState(false);
  let buttonTimeout, menuTimeout;

  const enterButton = () => {
    clearTimeout(buttonTimeout)
    setMouseOverButton(true)
  }

  const leaveButton = () => {
    buttonTimeout = setTimeout(() => {
      setMouseOverButton(false)
    }, delay);
  }

  const enterMenu = () => {
    clearTimeout(menuTimeout)
    setMouseOverMenu(true)
  }

  const leaveMenu = () => {
    menuTimeout = setTimeout(() => {
       setMouseOverMenu(false);
     }, delay);
  }

 React.useEffect(() => {
   setMouseOverButton(false);
   setMouseOverMenu(false);
 }, [router]);

 const isOpen = mouseOverButton || mouseOverMenu;

  return (
    <ul className={`${classPrefix}basis`}>
      <li 
        style={{ position: 'relative' }} 
      >
        {isOpen ? (
          <>
            <NavButton path="/" name="Home" home onMouseEnter={enterButton} onMouseLeave={leaveButton}/>
            <div className="menu-container" onMouseEnter={enterMenu} onMouseLeave={leaveMenu}>
              <div className="flyout">
              <HomeNav />
              <SecondaryNav />
            </div>
            </div>
          </>) 
          : (
          <Button
            width={140}
            active={router.pathname === '/'}
            onMouseEnter={enterButton}
            onMouseLeave={leaveButton}
            uppercase
          >
            Home
          </Button>
        )}

      </li>
      <li>
        <NavButton path="/glossary" name="Glossary" />
      </li>
      <li>
        <NavButton
          path="/#contact"
          name="Contact us"
        />
      </li>
    </ul>
  );
}

export default NavDesktop;
