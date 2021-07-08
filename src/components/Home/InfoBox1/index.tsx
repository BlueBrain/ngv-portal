import React, { ReactChild, ReactFragment } from 'react';
import { FaCircle } from 'react-icons/fa';

// import './style.scss';

const classPrefix = 'info-box-1__';

type InfoBox1Props = {
  icon: 'checkmark' | 'mail' | 'search' | 'download';
  title: string;
  teaser?: string;
  children: ReactChild | ReactFragment;
};

const InfoBox1: React.FC<InfoBox1Props> = ({
  icon,
  title,
  teaser,
  children,
}) => {

  return (
    <div className={`${classPrefix}basis`}>
      {icon === 'checkmark' && (
        <img
          src="/ngv-portal/assets/images/icons/checkmark.svg"
          alt="checkmark"
        />
      )}
      {icon === 'mail' && (
        <img
          src="/ngv-portal/assets/images/icons/mail.svg"
          alt="mail"
        />
      )}
      {icon === 'search' && (
        <img
          src="/ngv-portal/assets/images/icons/search.svg"
          alt="search"
        />
      )}
      {icon === 'download' && (
        <img
          src="/ngv-portal/assets/images/icons/download.svg"
          alt="download"
        />
      )}
      <h3>{title}</h3>
      {teaser && <p>{teaser}</p>}
      <div>{children}</div>
    </div>
  );
};

export default InfoBox1;
