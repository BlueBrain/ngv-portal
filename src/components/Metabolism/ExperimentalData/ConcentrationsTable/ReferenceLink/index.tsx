import React from 'react';

import styles from './styles.module.scss';

export default function ReferenceLink({ referenceInfo, rowId }) {

  return (
    <>
      {referenceInfo.map(referenceInfo => (
        <a
          target="_blank"
          className={styles.shorterLink}
          key={rowId + referenceInfo.url}
          href={referenceInfo.url}
          rel="noopener noreferrer"
        >- {referenceInfo.title}</a>
      ))}
    </>
  );
};
