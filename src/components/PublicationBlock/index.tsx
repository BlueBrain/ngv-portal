import React from 'react';

import styles from './styles.module.scss';


type PublicationBlockProps = {
  href: string;
  description: string | React.ReactNode;
  authors: string | React.ReactNode;
  className?: string;
};

const PublicationBlock: React.FC<PublicationBlockProps> = ({
  href,
  description,
  authors,
  className = '',
}) => {
  return (
    <a
      className={`${styles.container} ${className}`}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <p>{description}</p>
      <p>{authors}</p>
      <div className={styles.arrow} />
    </a>
  );
};

export default PublicationBlock;
