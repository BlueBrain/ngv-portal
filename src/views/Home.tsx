import React from 'react';
import Link from 'next/link';

import Title from '../components/Title';
import ImageSlider from '../components/ImageSlider';
import Button from '../components/Button';
import PublicationBlock from '../components/PublicationBlock';
import InfoBox1 from '../components/Home/InfoBox1';
import SectionCard from '../components/SectionCard';
import CtaButton from '../components/CtaButton';
import ImageViewer from '../components/ImageViewer';
import { imgOpt } from '../utils';


const classPrefix = 'Home__';

const Home: React.FC = () => (
  <div className={`${classPrefix}basis`}>
    <section id="section-1" className="content">
      <ImageSlider images={[{
        src: '/ngv-portal/assets/images/backgrounds/home-page/1_ngv_background.jpg',
        alt: 'NGV background 1',
      }, {
        src: '/ngv-portal/assets/images/backgrounds/home-page/2_ngv_background.jpg',
        alt: 'NGV background 2',
      }, {
        src: '/ngv-portal/assets/images/backgrounds/home-page/3_ngv_background.jpg',
        alt: 'NGV background 3'
      }]}/>
      <div className="gradient"></div>
      <div className="title">
        <Title
          title={<span>Neuro-Glia-<br/>Vasculature <br/> Portal</span>}
          hint="Welcome to the NGV Portal created by the <b>EPFL Blue Brain Project</b>. Come and explore the various datasets and visuals made available to understand how we reconstruct in silico the Neuro-Glia-Vasculature ensemble of the rat brain!"
          primary
        />
        <div className="cta">
          <CtaButton
            href="#explore"
            color="red"
            maxWidth="300px"
            block
          >
            Explore now
          </CtaButton>

          <CtaButton
            className="mt-2"
            href="#publications"
            color="blue"
            maxWidth="300px"
            block
          >
            Publications
          </CtaButton>
          <br/>
        </div>
      </div>
    </section>

    <section id="section-2">
      <h2>
        Select and Explore. Download.{' '}
        <span className="nowrap">
          Contribute
          <span className="accent-border" />
        </span>
      </h2>
      <div className="content">
        <div className="workflow">
          <InfoBox1
            icon="checkmark"
            title="Select and Explore"
          >
            <p>
              Discover how the Blue Brain Project organizes collected data and extrapolates principles
              to rebuild digitally reconstructed networks towards reconciling discrepancies in literature.
            </p>
          </InfoBox1>
          <InfoBox1
            icon="checkmark"
            title="Download"
          >
            <p>
              The Blue Brain Project has made various assets available for download throughout the portal.
              Enjoy downloading your selected items for your own use.
            </p>
          </InfoBox1>
          <InfoBox1
            icon="checkmark"
            title="Contribute"
          >
            <p>
              If you wish to share your findings for consideration to be added to the portal.
              Please submit your data through submissions. We welcome and value your feedback.
            </p>
          </InfoBox1>
        </div>
        <div className="image">
          <img
            id="screenshot"
            src="/ngv-portal/assets/images/backgrounds/landingpage_mac.png"
            alt="Image of a computer"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section id="explore" className="section-3">
      <div className="intro">
        <h2 className="text-white">Explore</h2>
        <h3>Navigate the various datasets made available</h3>
        <p>
          The NGV portal showcases the digital modeling of the Neuro-Glia-Vasculature system
          performed within the Blue Brain Project. The process is divided into three main blocks:
          1. Anatomical reconstruction (Anatomy), 2. Metabolism, and
          3. Blood flow (which includes calcium-regulated modulation of vasculature by the astrocytic endfeet).
          Each type of modeling is developed in the context of the existing Blue Brain microcircuit.
          The microcircuit is a large-scale electrical model of cortex,
          which includes well-characterized types of neurons at their known densities and connections.
        </p>
      </div>

      <div className="row" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="col-xs-12 col-sm-4 mb-2">
          <SectionCard
            title="Anatomy"
            bgColor="blue"
            routeBase="/geometry"
            bgImgSrc="/ngv-portal/assets/images/backgrounds/home-page/sections/1_anatomy.jpg"
          />
        </div>
        <div className="col-xs-12 col-sm-4 mb-2">
          <SectionCard
            title="Metabolism"
            bgColor="purple"
            routeBase="/metabolism"
            bgImgSrc="/ngv-portal/assets/images/backgrounds/home-page/sections/2_geometry.jpg"
          />
        </div>
        <div className="col-xs-12 col-sm-4 mb-2">
          <SectionCard
            title="Blood flow"
            bgColor="red"
            routeBase="/blood-flow"
            bgImgSrc="/ngv-portal/assets/images/backgrounds/home-page/sections/3_bloodflow.jpg"
          />
        </div>
      </div>
    </section>

    <section id="publications" className="publication-section bg-dark-blue">
      <div className="content">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <h1 className="text-white text-uppercase mb-1">Publications</h1>
            <p className="color-blue subtitle">Read up on our latest publications!</p>

            <PublicationBlock
              className="mt-4"
              href="https://doi.org/10.1101/2021.01.19.427241"
              description="Architecture of the Neuro-Glia-Vascular System"
              authors={<>Eleftherios Zisis <i>et al.</i>, 2021</>}
            />

          </div>
        </div>

      </div>
    </section>

    <section id="section-5">
      <h2 className="acknowledgments-container">
        <div className="row">
          <div className="col-xs-12">
            <p>
              <span>Acknowledgments</span>
              <span className="accent-border" />
            </p>
          </div>
          <div className="col-xs-12">
            <ImageViewer
              src="/ngv-portal/assets/images/Acknowledgments/kaust_logo.png"
              thumbnailSrc={imgOpt('/ngv-portal/assets/images/Acknowledgments/kaust_logo.png')}
            />
          </div>
        </div>
      </h2>
    </section>
  </div>
);

export default Home;
