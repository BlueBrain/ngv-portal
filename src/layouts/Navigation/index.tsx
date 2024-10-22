import React from 'react';
import Brand from '../Brand';
import NavDesktop from '../NavDesktop';
import NavMobile from '../NavMobile';
import Link from 'next/link';
import { IoIosArrowDropdown } from 'react-icons/io';
import { NavItem, navItems } from './constans';
import { useRouter } from 'next/router';
import { useMemo } from 'react';


const classPrefix = 'nav__';
const classDisabled = 'disabled';

export const HomeNav: React.FC = () => (
  <ul className="home-nav">
    <li>
      <Link href="/#about">
        About
      </Link>
    </li>
    <li>
      <Link href="/#explore">
        Explore
      </Link>
    </li>
  </ul>
);

type NavProps = {
  initActive?: string;
  canClose?: boolean;
};

export const SecondaryNav: React.FC<NavProps> = ({ canClose }) => {
  const router = useRouter();
  const [previewTab, setPreviewTab] = React.useState<NavItem>(null);
  
  const initialSelectedTabId = useMemo(() => {
    const selectedTab = navItems.find((item) => (router.pathname.includes(item.href)));
    return selectedTab? selectedTab.id: navItems[0].id;
  }, [router.pathname]);
  const [selectedTabId, setSelectedTabId] = React.useState<string>(initialSelectedTabId);

  const handleClick = (item: NavItem) => {
    const { id } = item;
    const firstChildrenHref = item.children[0].href;

    if(id !== selectedTabId) {
      setSelectedTabId(id);
      // router.push(`${item.href}${firstChildrenHref}`);
    } else {
      setSelectedTabId(null);
    }
  }

  return (
    <ul className="secondary-nav" onMouseLeave={() => !canClose && setPreviewTab(null)}>
      {navItems.map(item => {
        const isActive = previewTab ? previewTab === item: selectedTabId === item.id;
        return (
          <li key={item.id} className={`${isActive ? 'active' : ''} ${item.disabled ? classDisabled : ''}`}>
            <div className="color-tint" style={{ backgroundColor: item.color }} />
            <button
              className="top-level-btn"
              style={isActive ? { backgroundColor: item.color } : {}}
              onClick={() => handleClick(item)}
              onMouseEnter={() => !canClose && setPreviewTab(item)}
            >
              <span className="btn-text">
                {item.label.toUpperCase()}&nbsp;
              </span>
              <span className="show-mobile">
                <IoIosArrowDropdown />
              </span>
            </button>
            <ul
              className="submenu"
              style={{ borderLeftColor: item.color }}
            >
              {
                item.children.map(child => (
                  <li key={child.label} className={`${child.disabled ? classDisabled : ''}`}>
                    <Link href={`${item.href}${child.href}`}>
                      {child.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </li>
        );
      })}
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
