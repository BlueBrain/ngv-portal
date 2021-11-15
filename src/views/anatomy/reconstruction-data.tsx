import React from 'react';
import { Row, Col, Button, Dropdown, Menu } from 'antd';
import Image from 'next/image';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { bash, python } from 'react-syntax-highlighter/dist/cjs/languages/hljs';
import codeStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light';
import { LinkOutlined, DownloadOutlined, DownOutlined } from '@ant-design/icons';
import { saveAs } from 'file-saver';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import DataSection from '../../components/DataSection';
import ImageViewer from '../../components/ImageViewer';
import Video, { composeSources } from '../../components/VideoPlayer';
import { staticDataBaseUrl, antBreakpoint } from '../../config';
import textContent from '../../text-content/anatomy/reconstruction-data';


SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('python', python);

const astrocyticPythonCodeStr = [
  'import morphio',
  '',
  'astrocyte = morphio.Morphology(PATH_TO_MORPHOLOGY_FILE)',
  'morphology_points = astrocyte.points',
  'morphology_diameters = astrocyte.diameters',
  'morphology_perimeters = astrocyte.perimeters',
  'morphology_sections = astrocyte.sections',
].join('\n');

const imgBase = '/ngv-portal/assets/images/reconstruction-data';
const assetsBase = `${staticDataBaseUrl}/anatomy/reconstruction-data`;

const downloadableMorphologies = [{
  href: `${assetsBase}/synthesized-astrocyte-morphologies/GLIA_0000000004100.h5`,
  label: 'Example 1: GLIA_0000000004100',
}, {
  href: `${assetsBase}/synthesized-astrocyte-morphologies/GLIA_0000000000100.h5`,
  label: 'Example 2: GLIA_0000000000100',
}, {
  href: `${assetsBase}/synthesized-astrocyte-morphologies/GLIA_00000000002100.h5`,
  label: 'Example 3: GLIA_00000000002100',
}, {
  href: `${assetsBase}/synthesized-astrocyte-morphologies/synthesized-astrocyte-morphologies.tar.xz`,
  label: 'Large dataset (~19GB uncompressed)',
}];


export default function AnatomyRecDataView() {
  const downloadMorphology = (e) => {
    const morph = downloadableMorphologies.find(morph => morph.label === e.key);
    const filename = morph.href.split('/').reverse()[0];
    saveAs(morph.href, filename);
  };

  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor="blue"
            title="Reconstruction data"
            subtitle="Anatomy"
          />
          <Row align="middle" className="w-100">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src="/ngv-portal/assets/images/anatomy-illustrations/anatomy-reconstruction-data-illustration.png"
                alt="Illustration for Anatomy reconstruction data"
                layout="responsive"
                width="1280"
                height="720"
                sizes={`(min-width: ${antBreakpoint.lg}) 640px, 100vw`}
                loading="eager"
                priority
              />
            </Col>
            <Col xs={24} lg={{ span: 12, pull: 12 }} className="mt-1 mb-1">
              <Title
                className="hide-xs show-lg"
                primaryColor="blue"
                title="Reconstruction data"
                subtitle="Anatomy"
              />
              <InfoBox
                content={textContent.pageDescription}
                collapse={true}
                color="blue"
              />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="Final reconstructions">
          {textContent.finalReconstructions}
          <Video
            sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_WITH_EFFECTS')}
            muted
            defaultSize={720}
            poster={`${staticDataBaseUrl}/anatomy/reconstruction-data/NGV_DISS149_MASTER_WITH_EFFECTS-poster.jpg`}
          />
          <Row gutter={16} className="mt-2 mb-1">
            <Col xs={24} sm={8} className="mb-1">
              <Video
                sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_N')}
                muted
                autoplay
                loop
                defaultSize={360}
              />
            </Col>
            <Col xs={24} sm={8} className="mb-1">
              <Video
                sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_G')}
                muted
                autoplay
                loop
                defaultSize={360}
              />
            </Col>
            <Col xs={24} sm={8} className="mb-1">
              <Video
                sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_V')}
                muted
                autoplay
                loop
                defaultSize={360}
              />
            </Col>
          </Row>

          <Video
            sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_NGV')}
            muted
            autoplay
            loop
            defaultSize={720}
          />
        </DataSection>

        <DataSection title="Explore reconstructions" className="mt-4">
          <p>Explore the NGV reconstructions interactively in your browser in 3D.</p>

          <ImageViewer
            src={`${imgBase}/ngv-viewer-screenshot.png`}
            width={1920}
            height={1080}
            sizes={`(max-width: 1080px) 100vw, 1080px`}
            alt="NGV viewer screenshot"
            border
          />

          <div className="text-right" style={{ marginTop: '1.4rem' }}>
            <Button
              size="small"
              type="primary"
              href="https://bbp.epfl.ch/ngv-viewer"
              target="_blank"
              rel="noopener noreferrer"
              icon={<LinkOutlined />}
            >
              Open NGV Viewer
            </Button>
          </div>
        </DataSection>

        <DataSection title="Neuronal circuit" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} sm={12}>{textContent.neuronalCircuit}</Col>
            <Col xs={24} sm={12}>
              <ImageViewer
                src={`${imgBase}/NGV_DISS149_4k_STILL_NEURONS_WITH_DOF.jpg`}
                width={3840}
                height={2160}
                sizes={`(min-width: ${antBreakpoint.sm}) 480px, 100vw`}
                alt="Neuronal circuit render"
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Vasculature Surface Mesh" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} sm={12}>
              {textContent.vasculatureSurfaceMesh.text}
            </Col>
            <Col xs={24} sm={12}>
              <ImageViewer
                src={`${imgBase}/vasculature_stages.png`}
                width={1600}
                height={1381}
                sizes={`(min-width: ${antBreakpoint.sm}) 480px, 100vw`}
                alt="Vasculature stages"
              />
              <div className="mt-1">
              {textContent.vasculatureSurfaceMesh.legend}
              </div>
            </Col>
          </Row>
          <div className="text-right mt-3">
            <Button
              href={`${assetsBase}/vasculature-graph-model/raw_pruned_cap_circuit_coo_inscribed_spec_atlas_translated.h5`}
              type="primary"
              size="small"
              icon={<DownloadOutlined />}
            >
              Vasculature point graph
            </Button>
          </div>
        </DataSection>

        <DataSection title="Astrocytic positions without collision" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} sm={12}>{textContent.astrocyticPositionsWithoutCollision.text}</Col>
            <Col xs={24} sm={12}>
              <ImageViewer
                src={`${imgBase}/results_illustrations.png`}
                width={2780}
                height={2091}
                sizes={`(min-width: ${antBreakpoint.sm}) 480px, 100vw`}
                alt="Astrocyte and vasculature network render"
              />
              <div className="mt-1">
                {textContent.astrocyticPositionsWithoutCollision.legend}
              </div>
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Microdomains" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} sm={12}>
              {textContent.microdomains.text}
            </Col>
            <Col xs={24} sm={12}>
              <ImageViewer
                src={`${imgBase}/results_microdomains_illustration.png`}
                width={2732}
                height={2118}
                sizes={`(min-width: ${antBreakpoint.sm}) 480px, 100vw`}
                alt="Microdomains render"
              />
              <div className="mt-1">
                {textContent.microdomains.legend}
              </div>
            </Col>
          </Row>
          <div className="text-right mt-3">
            <Button
              href={`${assetsBase}/overlapping-microdomains/overlapping_microdomains.h5`}
              type="primary"
              size="small"
              icon={<DownloadOutlined />}
            >
              Overlapping microdomains
            </Button>
          </div>
        </DataSection>

        <DataSection title="Connectivities" className="mt-4">
          <Row gutter={32}>
            <Col span={24} className="column-count-2 mb-3">{textContent.connectivities.text}</Col>
            <Col span={24}>
              <ImageViewer
                src={`${imgBase}/results_connectivity_illustration_v2.png`}
                width={3768}
                height={2312}
                sizes={`(max-width: 1080px) 100vw, 1080px`}
                alt="Connectivity render"
              />
              <div className="mt-1">
                {textContent.connectivities.figure}
              </div>
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Endfeet surface reconstruction" className="mt-4">
          <Row gutter={32}>
            <Col span={24} className="column-count-2 mb-3">{textContent.endfeetSurfaceReconstruction.text}</Col>
            <Col span={24}>
              <ImageViewer
                className="mb-1"
                src={`${imgBase}/NGV_DISS149_4k_STILL_ENDFEET_WITH_DOF.jpeg`}
                width={3840}
                height={2160}
                sizes={`(max-width: 1080px) 100vw, 1080px`}
                alt="Endfeet render"
              />
              {textContent.endfeetSurfaceReconstruction.legend}
            </Col>
          </Row>
          <div className="text-right mt-3">
            <Button
              href={`${assetsBase}/endfeet-data/endfeet_data.json`}
              type="primary"
              size="small"
              icon={<DownloadOutlined />}
            >
              Endfeet data
            </Button>
          </div>
        </DataSection>

        <DataSection title="Morphological synthesis of astrocytes" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} sm={24} className="column-count-2">
              {textContent.morphologicalSynthesisOfAstrocytes.text}
            </Col>

            <Col xs={24} sm={12} className="mt-3">
              <ImageViewer
                src={`${imgBase}/astrocytes_illustration_annotated.jpg`}
                width={5120}
                height={5075}
                sizes={`(min-width: ${antBreakpoint.md}) 480px, 100vw`}
                alt="Example renders of synthesized astrocytes"
              />
              <div className="mt-1">
                <small>
                  <strong>Figure:</strong> Examples of synthesized astrocytes.
                </small>
              </div>
            </Col>

            <Col xs={24} sm={12} className="mt-3">
              <ImageViewer
                src={`${imgBase}/results_morphs_illustration_recolored.png`}
                width={2587}
                height={2176}
                sizes={`(min-width: ${antBreakpoint.md}) 480px, 100vw`}
                alt="Morphology illustration"
              />
              <div className="mt-1">
                {textContent.morphologicalSynthesisOfAstrocytes.legend}
              </div>
            </Col>
          </Row>
          <div className="text-right mt-2">
            <Dropdown
              overlay={<Menu onClick={downloadMorphology}>
                {downloadableMorphologies.map(morph => (<Menu.Item key={morph.label}>{morph.label}</Menu.Item>))}
              </Menu>}
            >
              <Button
                type="primary"
                size="small"
                icon={<DownloadOutlined />}
              >
                Morphologies <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </DataSection>

        <DataSection title="Astrocytic morphologies exploration using Python" className="mt-4">
          <p>
            Astrocytic morphologies can be explored using <a
              href="https://github.com/BlueBrain/MorphIO"
              target="_blank"
              rel="noopener noreferrer"
            >
              MorphIO
            </a> python package.
          </p>

          <p>MorphIO can be installed via pip:</p>

          <SyntaxHighlighter
            language="bash"
            style={codeStyle}
            customStyle={{ fontSize: '14px' }}
          >
            pip install morphio
          </SyntaxHighlighter>

          <p>and used in python:</p>

          <SyntaxHighlighter
            language="python"
            style={codeStyle}
            customStyle={{ fontSize: '14px' }}
          >
            {astrocyticPythonCodeStr}
          </SyntaxHighlighter>
        </DataSection>
      </DataContainer>
    </>
  );
}
