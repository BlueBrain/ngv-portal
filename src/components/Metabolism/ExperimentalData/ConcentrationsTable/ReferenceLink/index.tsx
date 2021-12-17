import React from 'react';

import styles from './styles.module.scss';

export default function ReferenceLink({ referenceInfo }) {

  return (
    <a
      target="_blank"
      className={styles.shorterLink}
      href={referenceInfo.url}
      rel="noopener noreferrer"
    >- {referenceInfo.title}</a>
  );
};
