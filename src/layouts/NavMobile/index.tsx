import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';

import { SecondaryNav } from '../Navigation';
import { basePath } from '../../config';


const classPrefix = 'nav-mobile__';

type MenuProps = {
  open?: boolean;
  onClose: () => void;
};

const Menu: React.FC<MenuProps> = ({ open, onClose }) => (
  <div className={`${classPrefix}menu ${open ? 'open' : ''}`}>
    <div className="close-icon" onClick={onClose}>
      <MdClose />
    </div>
    <div className="top-links">
      <Link href="/">
        <a>
          <img
            src={`${basePath}/assets/images/icons/home.svg`}
            alt="home"
          />
          <span>Home</span>
        </a>
      </Link>
      <Link href="/glossary">
        <a>
          <img
            src={`${basePath}/assets/images/icons/globe.svg`}
            alt="globe"
          />
          <span>Glossary</span>
        </a>
      </Link>
      <Link href="/#contact">
        <a>
          <img
            src={`${basePath}/assets/images/icons/mail-alt.svg`}
            alt="mail"
          />
          <span>Contact</span>
        </a>
      </Link>
    </div>
    <SecondaryNav canClose />
  </div>
);

const NavMobile = () => {
  const router = useRouter()

  const [open, setOpen] = React.useState(false);
  React.useEffect(() => setOpen(false), [router]);

  return (
    <>
      <div className={`${classPrefix}basis`} onClick={() => setOpen(true)}>
        <IoMdMenu />
      </div>
      <Menu onClose={() => setOpen(false)} open={open} />
    </>
  );
}

export default NavMobile;
