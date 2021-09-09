import React, { ReactChild, ReactFragment } from 'react';

// import './style.scss';

const classPrefix = 'button__';

type ButtonProps = {
  primary?: boolean;
  active?: boolean;
  large?: boolean;
  discrete?: boolean;
  width?: number;
  notifications?: number;
  onClick?: (e: any) => void;
  children: ReactChild | ReactFragment;
  uppercase?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  primary,
  active,
  discrete,
  width,
  notifications,
  onClick,
  children,
  large,
  uppercase,
  ...restProps
}) => {
  return (
    <button
      style={{ width: `${width}px` }}
      onClick={onClick}
      className={`${classPrefix}basis ${primary ? 'primary' : ''} ${
        discrete ? 'discrete' : ''
      } ${active ? 'active' : ''} ${large ? 'large' : ''} ${
        uppercase ? 'uppercase' : ''
      }`}
      {...restProps}
    >
      {children}
      {notifications && <span className="notifications">{notifications}</span>}
    </button>
  );
};

export default Button;
