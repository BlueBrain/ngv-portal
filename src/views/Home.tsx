import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'antd';

import Title from '../components/Title';
import ImageSlider from '../components/ImageSlider';
import PublicationBlock from '../components/PublicationBlock';
import SectionCard from '../components/SectionCard';
import CtaButton from '../components/CtaButton';
import { cardsData } from './home-constans';
import { antBreakpoint, basePath } from '../config';


const classPrefix = 'Home__';

const Home: React.FC = () => (
  <div className={`${classPrefix}basis`}>
    <section id="section-1" className="content">
      <ImageSlider images={[{
        src: `${basePath}/assets/images/backgrounds/home-page/1_ngv_background.jpg`,
        alt: 'NGV background 1',
      }, {
        src: `${basePath}/assets/images/backgrounds/home-page/2_ngv_background.jpg`,
        alt: 'NGV background 2',
      }, {
        src: `${basePath}/assets/images/backgrounds/home-page/3_ngv_background.jpg`,
        alt: 'NGV background 3'
      }]}/>
      <div className="gradient"></div>
      <div className="title">
        <Title
          title={<span>Neuro-Glia-<br/>Vasculature <br/> Portal</span>}
          hint="Welcome to the NGV Portal created by the <b>EPFL Blue Brain Project</b>. Come and explore the various datasets and visuals made available to understand how we reconstruct <i>in silico</i> the Neuro-Glia-Vasculature ensemble architecture of the rat brain."
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

    <section className="about-section" id="about">
      <div className="section-content">
        <h2 className="mb-2 mt-2">
          <span>ABOUT</span>
          <span className="accent-border" />
        </h2>
        <Row gutter={48}>
          <Col xs={24} md={{ span: 12, push: 12 }}>
            <Image
              src={`${basePath}/assets/images/backgrounds/home-page/about-section-illustration.png`}
              layout="responsive"
              width="1280"
              height="1039"
              sizes={`(min-width: ${antBreakpoint.md}) 640px, 100vw`}
              alt="NGV Portal illustration"
            />
          </Col>
          <Col xs={24} md={{ span:12, pull: 12 }}>
            <p className="mt-1">
              The NGV Portal showcases the digital modeling of the Neuro-Glia-Vasculature system
              performed within the Blue Brain Project. The process is divided into three main blocks:
            </p>
            <ol>
              <li>
                Anatomical reconstruction (Anatomy)
              </li>
              <li>
                Metabolism
              </li>
              <li>
                Blood flow (which includes calcium-regulated modulation of vasculature by the astrocytic endfeet).
              </li>
            </ol>
            <p>
              Each type of modeling is developed in the context of the existing Blue Brain microcircuit.
              The microcircuit is a large-scale electrical model of cortex,
              which includes well-characterized types of neurons at their known densities and connections.
            </p>
          </Col>
        </Row>
      </div>
    </section>

    <section id="explore" className="section-3">
      <div className="section-content">
        <div className="intro">
          <h2 className="text-white">Explore</h2>
          <h3>Navigate the various datasets made available</h3>
        </div>

        <Row gutter={10} justify="center">
          {cardsData.map(({id, title, backgroundColor, routeBase, image, links, description}) => (
            <Col key={id} xs={24} sm={8} className="mb-2">
              <SectionCard
                title={title}
                bgColor={backgroundColor}
                routeBase={routeBase}
                bgImgSrc={image}
                links={links}
                description={description}
              />
            </Col>
          ))}
        </Row>

      </div>
    </section>

    <section id="publications" className="publication-section bg-dark-blue">
      <div className="section-content">
        <div className="show-xs hide-md">
          <h1 className="text-white text-uppercase mb-1">Publications</h1>
          <p className="color-blue subtitle">Read up on our latest publications!</p>
        </div>
        <Row gutter={10} justify="space-between" align="middle">
          <Col xs={{ span: 24 }} sm={{ span: 12, push: 12 }} className="mt-2">
            <Image
              src={`${basePath}/assets/images/backgrounds/home-page/publications-section-illustration.png`}
              layout="responsive"
              width="1000"
              height="674"
              sizes={`(min-width: ${antBreakpoint.sm}) 640px, 100vw`}
              alt="Example publication illustration"
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 10, pull: 12 }} className="mt-2">
            <div className="hide-xs show-md mb-4">
              <h1 className="text-white text-uppercase mb-1">Publications</h1>
              <p className="color-blue subtitle">Read up on our latest publications!</p>
            </div>

            <PublicationBlock
              description="Digital reconstructions of the neuro-glia-vascular architecture"
              authors={<>Eleftherios Zisis <i>et al.</i>, 2021</>}
              href="https://doi.org/10.1093/cercor/bhab254"
            />
          </Col>
        </Row>
      </div>
    </section>

    <section id="acknowledgments">
      <div className="acknowledgments-container">
        <h2>
          <span>Acknowledgments</span>
          <span className="accent-border" />
        </h2>

        <p className="mt-2">
          This publication is based upon work supported by the King Abdullah University of Science and Technology (KAUST) Office of Sponsored Research (OSR) under Award No. OSR-2017-CRG6-3438
        </p>
        <p>
          We are also grateful to Bruno Weber of ETH Zurich for providing a previously published vasculature data set. In addition we thank Claudia Savoia for project coordination, Caitlin Monney for portal design, Jean-Denis Courcol, Pavlo Getta, and Stefano Antonel for portal technical support and development.
        </p>
      </div>
    </section>

    <section id="contact">
      <h2 className="contact-us-container">
        <span>CONTACT US</span>
        <span className="accent-border" />
      </h2>
      <p>
        Let’s stay in touch!
      </p>
      <p>
        For all inquiries, support and collaborations, please email:
        <a href="mailto:ngv.portal@groupes.epfl.ch">ngv.portal@groupes.epfl.ch</a>
      </p>
    </section>

  </div>
);

export default Home;
