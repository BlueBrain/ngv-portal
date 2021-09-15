import React from 'react';

import { Color } from '../../types';


const classPrefix = 'title__';

type TitleProps = {
  title?: React.ReactChild;
  subtitle?: string;
  primaryColor?: Color;
  hint?: string;
  primary?: boolean;
  className?: string;
};

const Title: React.FC<TitleProps> = ({
  title,
  subtitle,
  hint,
  primaryColor = 'yellow' as Color,
  primary,
  className = '',
}) => {
  return (
    <div
      className={`${classPrefix}basis ${
        primary ? 'primary' : ''
      } ${primaryColor} ${className}`}
    >
      {subtitle && !primary && <h4 className="text-white">{subtitle}</h4>}
      {title && <h2 role="title" className="text-white">{title}</h2>}
      {subtitle && primary && <h4 className="text-white">{subtitle}</h4>}
      {hint && <p className="hint" dangerouslySetInnerHTML={{ __html: hint }} />}
    </div>
  );
};

export default Title;
