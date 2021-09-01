import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'antd';

import Title from '../components/Title';
import ImageSlider from '../components/ImageSlider';
import PublicationBlock from '../components/PublicationBlock';
import SectionCard from '../components/SectionCard';
import CtaButton from '../components/CtaButton';


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

    <section className="about-section" id="about">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 className="mb-2 mt-2">
          <span>ABOUT</span>
          <span className="accent-border" />
        </h2>
        <Row gutter={48}>
          <Col xs={24} md={{ span: 12, push: 12 }}>
            <Image
              src="/ngv-portal/assets/images/backgrounds/home-page/about-section-illustration.png"
              layout="responsive"
              width="1280"
              height="1039"
              alt=""
            />
          </Col>
          <Col xs={24} md={{ span:12, pull: 12 }}>
            <p className="mt-1">
              The NGV portal showcases the digital modeling of the Neuro-Glia-Vasculature system
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
      <div className="intro">
        <h2 className="text-white">Explore</h2>
        <h3>Navigate the various datasets made available</h3>
      </div>

      <div className="row" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="col-xs-12 col-sm-4 mb-2">
          <SectionCard
            title="Anatomy"
            bgColor="blue"
            routeBase="/anatomy"
            bgImgSrc="/ngv-portal/assets/images/backgrounds/home-page/sections/1_anatomy.jpg"
            links={[
              { label: 'Experimental data', href: '/experimental-data' },
              { label: 'Reconstruction data', href: '/reconstruction-data' },
              { label: 'Validations', href: '/validations' },
              { label: 'Predictions', href: '/predictions' },
            ]}
            description={<div>
              <p>
                Understanding the biophysical, physiological, and molecular interactions in this
                Neuro-Glia-Vascular system (NGV)  and how they support brain function is
                severely restricted by the lack of detailed cytoarchitecture (cellular structure
                of a biological tissue). To address this problem, we used data from multiple
                sources to create a data-driven digital reconstruction of the NGV at micrometer
                anatomical resolution. We reconstructed 0.2 mm<sup>3</sup> of rat somatosensory cortical
                tissue with approximately 16,000 morphologically detailed neurons, its
                microvasculature, and approximately 2,500 morphologically detailed protoplasmic
                astrocytes. In order to maintain the local connectivity, the microcircuit was
                surrounded by an NGV region, approximately 0.2% of the rat's brain. A total of
                14,402 astrocytes populated the bounding region, co-localized with 88,541
                neurons and 1.37 m of vasculature wiring. The reconstruction's consistency with
                a wide array of experimental measurements allows novel predictions of the
                numbers and locations of astrocytes and astrocytic processes that support
                different types of neurons. This allows anatomical reconstruction of the spatial
                microdomains of astrocytes and their overlapping regions. The number and
                locations of end-feet connecting each astrocyte to the vasculature can be
                determined as well as the extent to which they cover the microvasculature. The
                structural analysis of the NGV circuit showed that astrocytic shape and numbers
                are constrained by vasculature’s spatial occupancy and their functional role
                to form NGV connections. The digital reconstruction of the NGV is a resource
                that will enable a better understanding of the anatomical principles and
                geometric constraints which govern how astrocytes support brain function.
              </p>
            </div>}
          />
        </div>
        <div className="col-xs-12 col-sm-4 mb-2">
          <SectionCard
            title="Metabolism"
            bgColor="purple"
            routeBase="/metabolism"
            bgImgSrc="/ngv-portal/assets/images/backgrounds/home-page/sections/2_metabolism.jpg"
            links={[
              { label: 'Experimental data' },
              { label: 'Reconstruction data' },
              { label: 'Validations' },
              { label: 'Predictions' },
            ]}
            description={<div>
              <p>
                The brain is an efficient, but also energy-demanding organ. While the importance
                of the brain energy metabolism has been recognized for decades, a complete
                understanding of the metabolic processes supporting and constraining the brain
                function remains elusive.
              </p>

              <p>
                We built a biologically detailed bottom-up reconstruction and simulation of the
                NGV Unit and the rat neocortical microcircuitry energy metabolism driven by its
                electrophysiological activity and constrained by bidirectional feedback.
              </p>

              <p>
                A multitude of reactions define energy metabolism at the molecular level. The
                metabolism simulation features the most important biochemical pathways that
                provide the brain with the energy for complex neuronal activity. It includes
                glycolysis, pentose phosphate pathway, tricarboxylic acid cycle, oxidative
                phosphorylation, astrocytic glycogenolysis, malate-aspartate shuttle in the
                neuron, as well as the processes of glutamate, GABA, glutathione and creatine
                metabolism. The system of differential equations describes dynamically changing
                concentrations of more than 150 metabolites in neurons, astrocytes,
                extracellular space and capillaries. Neuronal and astrocytic reactions are
                located in the cytosol and mitochondria. The model is validated against
                published data, including the BOLD signal, OGI, and concentrations of
                metabolites.
              </p>

              <p>
                We simulated the neocortical microcircuitry coupled to the metabolism. To
                achieve this goal, we provided every neuron in the neocortical column with type-
                and layer-specific metabolism model. Bidirectional communication between the
                electrophysiology and metabolism simulation allows us to impose metabolic
                constraints of the circuit function and at the same time, to use changes in ion
                currents and concentrations, membrane potential and synaptic events as demand
                for the energy. Simple blood flow is part of the model.
              </p>
            </div>}
          />
        </div>
        <div className="col-xs-12 col-sm-4 mb-2">
          <SectionCard
            title="Blood flow"
            bgColor="red"
            routeBase="/blood-flow"
            bgImgSrc="/ngv-portal/assets/images/backgrounds/home-page/sections/3_bloodflow.jpg"
            links={[
              { label: 'Experimental data' },
              { label: 'Reconstruction data' },
              { label: 'Validations' },
              { label: 'Predictions' },
            ]}
            description={<div>
              <p>
                The brain represents only 2% of the body mass but consumes about 20% of the
                body’s energy. Furthermore, there is a limited capacity to store energy in the
                brain. There is therefore a highly oxygen/glucose dependency in the brain supply
                from the bloodstream.
              </p>

              <p>
                Blood flow is regulated by neurons and  astrocytes.
                Astrocytes, a type of cell in the central nervous system, play an important role
                in metabolism. Each astrocyte has an endfoot which connects to the blood
                vessels. Increased neuronal activity elevates calcium levels in astrocytes,
                which in turn releases vasoactive substances at the endfeet, causing changes in
                the diameter of the associated blood vessel.
              </p>

              <p>
                Blood flow through the blood vessel (vasculature) network changes in response to
                altered diameters, meaning that delivery of nutrients, lactate, glucose, and
                oxygen to support neuronal metabolism is in turn changed.
                We made the whole NGV unit working together by integrating astrocytes to
                vasculature in a simulation.
              </p>

              <p>
                Release of glutamate at synapses can cause local elevation of calcium within
                astrocytic processes. We have adapted a model of calcium from Savchenko 2019 to
                run within the neuronal microcircuit. Resulting elevation of calcium levels
                within the endfoot causes release of vasoactive substances which in turn
                modulate the diameter of the associated blood vessels.
              </p>
            </div>}
          />
        </div>
        <div style={{ maxWidth: '1280px', paddingLeft: '0.5rem' }}>
          <small className="text-medium-white"><sup>*</sup> Coming soon</small>
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
            <img
              src="/ngv-portal/assets/images/acknowledgments/kaust_logo.png"
              alt="kaust_logo"
            />
          </div>
        </div>
      </h2>
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
