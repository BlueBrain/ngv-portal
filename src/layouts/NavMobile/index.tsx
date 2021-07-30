import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';

import { SecondaryNav } from '../Navigation';
import Search from '../../components/Search';


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
            src="/ngv-portal/assets/images/icons/home.svg"
            alt="home"
          />
          <span>Home</span>
        </a>
      </Link>
      <Link href="/glossary">
        <a>
          <img
            src="/ngv-portal/assets/images/icons/globe.svg"
            alt="globe"
          />
          <span>Glossary</span>
        </a>
      </Link>
      <Link href="/#contact-section">
        <a>
          <img
            src="/ngv-portal/assets/images/icons/mail-alt.svg"
            alt="mail"
          />
          <span>Contact</span>
        </a>
      </Link>
      <Link href="/downloads">
        <a>
          <img
            src="/ngv-portal/assets/images/icons/download-alt.svg"
            alt="download"
          />
          <span>Download</span>
        </a>
      </Link>
    </div>
    <SecondaryNav canClose />
    <div className="menu-search">
      <Search />
    </div>
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
