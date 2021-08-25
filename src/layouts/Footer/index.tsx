import React from 'react';
import Link from 'next/link';
import { FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';

import styles from './styles.module.scss';


const link = {
  bbpPortal: 'https://www.epfl.ch/research/domains/bluebrain/',
  privacyPolicy: 'https://www.epfl.ch/about/presidency/presidents-team/legal-affairs/epfl-privacy-policy/',
  disclaimer: 'https://www.epfl.ch/about/overview/regulations-and-guidelines/disclaimer/',
  cookies: 'https://www.epfl.ch/about/presidency/presidents-team/legal-affairs/epfl-privacy-policy/cookies-policy/',
  twitter: 'https://www.google.com/url?q=https://twitter.com/bluebrainpjt?lang%3Den&sa=D&source=editors&ust=1621257818134000&usg=AOvVaw2R-KvpkcjrsGpHzAJQWB9p',
  linkedin: 'https://www.google.com/url?q=https://www.linkedin.com/showcase/blue-brain-project/&sa=D&source=editors&ust=1621257818134000&usg=AOvVaw01DeXZO0Rs5eUtuvBawWzI',
  youtube: 'https://www.google.com/url?q=https://www.youtube.com/user/Bluebrainpjt/featured&sa=D&source=editors&ust=1621257818134000&usg=AOvVaw36Av7NQPlVH1juztZbzxCh',
};


const Footer: React.FC<{}> = () => {
  const minYear = 2021;
  const userYear = new Date().getFullYear();

  const displayYear = userYear > minYear
    ? userYear
    : minYear;

  return (
    <footer className={styles.container}>
      <h2 className="mb-2">The Neuro-Glia-Vasculature Portal</h2>
      <div className={styles.row}>
        <div className="mt-2">
          <p><a
            href={link.bbpPortal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Blue Brain Project
          </a></p>
          <p className={styles.address}>
            EPFL/Campus Biotech <br/>
            Chemin des Mines 9 <br/>
            CH-1202 Geneva <br/>
            Switzerland <br/>
          </p>
        </div>

        <div className="mt-2">
          <p><Link href="/terms-of-use/">Terms of Use</Link></p>
          <p><a
            href={link.privacyPolicy}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a></p>
          <p><a
            href={link.disclaimer}
            target="_blank"
            rel="noopener noreferrer"
          >
            Disclaimer
          </a></p>
          <p><a
            href={link.cookies}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookies
          </a></p>
        </div>

        <div className="mt-2">
          <p><Link href="/">Home</Link></p>
          <p><Link href="/#explore">Explore</Link></p>
          <p><Link href="/#publications">Publications</Link></p>
          <p><Link href="/glossary">Glossary</Link></p>
          <p><Link href="/#contact">Contact us</Link></p>
          <div className="mt-3">
            <span>Follow the Blue Brain</span>

            <div className={styles.socialLinks}>
              <a
                href={link.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare />
              </a>
              <a
                href={link.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href={link.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutubeSquare />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4">©Blue Brain Project/EPFL 2005-{displayYear}</p>
    </footer>
  );
};

export default Footer;
