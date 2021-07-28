import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';


const classPrefix = 'footer__';

const Footer: React.FC<{}> = () => {
  return (
    <div className={`${classPrefix}basis`}>
      <div className={`${classPrefix}container`}>
        <div className={`${classPrefix}address`}>
          <h4 className="text-white">Blue Brain Project</h4>
          <p>EPFL/Campus Biotech</p>
          <p>Chemin des Mines 9</p>
          <p>CH-1202 Geneva</p>
          <p>Switzerland</p>
        </div>
        <div className={`${classPrefix}contact`}>
          <h4 className="text-white">Contact</h4>
          <p>
            <Link href="mailto:ngv.portal@groupes.epfl.ch">Submission</Link>
          </p>
        </div>
        <div>
          <h4 className="text-white">Share and follow us</h4>
          <div className={`${classPrefix}social-media`}>
            <a href="#" className={`${classPrefix}social-media-item`}>
              <div className={`${classPrefix}social-media-icon`}>
                <FaTwitter />
              </div>
              <span className={`${classPrefix}social-link`}>@BlueBrainPjt</span>
            </a>
            <a href="#" className={`${classPrefix}social-media-item`}>
              <div className={`${classPrefix}social-media-icon`}>
                <FaFacebookF />
              </div>
              <span className={`${classPrefix}social-link`}>
                @BlueBrainProject
              </span>
            </a>
            <a href="#" className={`${classPrefix}social-media-item`}>
              <div className={`${classPrefix}social-media-icon`}>
                <FaLinkedinIn />
              </div>
              <span className={`${classPrefix}social-link`}>
                @BlueBrainProject
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className={`${classPrefix}bottom-line`}>
        <p>©Blue Brain Project/EPFL 2005-2020</p>
        <p>
          <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of use</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
