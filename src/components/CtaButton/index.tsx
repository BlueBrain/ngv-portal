import React from 'react';

import { MdKeyboardArrowRight } from 'react-icons/md';

import styles from './index.module.scss';


type CtaButtonProps = {
  color?: string;
  href?: string;
  onClick?: () => void;
  width?: string;
  maxWidth?: string;
  block?: boolean;
  className?: string;
};

const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  className = '',
  width = 'auto',
  maxWidth = 'auto',
  color = 'blue',
  href = null,
  onClick,
  block = false,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (!onClick) return;

    e.preventDefault()
    onClick();
  };

  return (
    <a
      className={`${styles.container} ${color} ${className}`}
      href={href}
      onClick={e => handleClick(e)}
      style={{
        width,
        maxWidth,
        display: block ? 'block' : 'inline-block'
      }}
    >
      <span className={styles.text}>
        {children}
      </span>
      <div className={styles.arrow}>
        <MdKeyboardArrowRight fontSize={22} />
      </div>
    </a>
  );
};

export default CtaButton;
