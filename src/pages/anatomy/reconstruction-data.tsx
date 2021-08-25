import React from 'react';
import { Row, Col, Button, Dropdown, Menu } from 'antd';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { bash, python } from 'react-syntax-highlighter/dist/cjs/languages/hljs';
import codeStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light';
import { LinkOutlined, DownloadOutlined, DownOutlined } from '@ant-design/icons';
import { saveAs } from 'file-saver';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import Collapsible from '../../components/Collapsible';
import ImageViewer from '../../components/ImageViewer';
import Video, { composeSources } from '../../components/VideoPlayer';
import { imgOpt } from '../../utils';
import { staticDataBaseUrl } from '../../config';
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
  label: 'Large dataset of morphologies (~19GB uncompressed)',
}];


export default function AnatomyRecData() {
  const downloadMorphology = (e) => {
    const href = downloadableMorphologies.find(morph => morph.label === e.key).href;
    saveAs(href);
  };

  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <div className="center-col">
          <Title
            primaryColor="blue"
            title="Reconstruction data"
            subtitle="Anatomy"
          />
          <div role="information">
            <InfoBox content={textContent.pageDescription} color="blue" />
          </div>
        </div>
        <div className="center-col"></div>
      </Filters>

      <DataContainer>
        <Collapsible title="Final reconstructions">
          {textContent.finalReconstructions}
          <Video
            sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_WITH_EFFECTS')}
            muted
            defaultSize={720}
            poster={`${staticDataBaseUrl}/anatomy/reconstruction-data/NGV_DISS149_MASTER_WITH_EFFECTS-poster.jpg`}
          />
          <Row gutter={16} className="mt-2 mb-2">
            <Col xs={24} sm={8}>
              <Video
                sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_N')}
                muted
                autoplay
                loop
                defaultSize={360}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Video
                sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_G')}
                muted
                autoplay
                loop
                defaultSize={360}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Video
                sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_G')}
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

          <div className="text-right mt-2">
            <Button
              size="small"
              type="primary"
              href="https://bbp.epfl.ch/ngv-viewer"
              icon={<LinkOutlined />}
            >
              Online Circuit Viewer
            </Button>
          </div>
        </Collapsible>

        <Collapsible title="Neuronal circuit" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} sm={12}>{textContent.neuronalCircuit}</Col>
            <Col xs={24} sm={12}>
              <ImageViewer
                src={`${imgBase}/NGV_DISS149_4k_STILL_NEURONS_WITH_DOF.jpeg`}
                thumbnailSrc={imgOpt(`${imgBase}/NGV_DISS149_4k_STILL_NEURONS_WITH_DOF.jpeg`)}
              />
            </Col>
          </Row>
        </Collapsible>

        <Collapsible title="Vasculature Surface Mesh" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} sm={12}>
              {textContent.vasculatureSurfaceMesh.text}
              <div className="text-right mt-2 mb-2">
                <Button
                  href={`${assetsBase}/vasculature-graph-model/raw_pruned_cap_circuit_coo_inscribed_spec_atlas_translated.h5`}
                  type="primary"
                  size="small"
                  icon={<DownloadOutlined />}
                >
                  Vasculature point graph
                </Button>
              </div>
              {textContent.vasculatureSurfaceMesh.legend}
            </Col>
            <Col xs={24} sm={12}>
              <ImageViewer
                src={`${imgBase}/vasculature_stages.png`}
                thumbnailSrc={imgOpt(`${imgBase}/vasculature_stages.png`)}
              />
            </Col>
          </Row>
        </Collapsible>

        <Collapsible title="Astrocytic positions without collision" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} sm={12}>{textContent.astrocyticPositionsWithoutCollision}</Col>
            <Col xs={24} sm={12}>
              <ImageViewer
                src={`${imgBase}/results_illustrations.png`}
                thumbnailSrc={imgOpt(`${imgBase}/results_illustrations.png`)}
              />
            </Col>
          </Row>
        </Collapsible>

        <Collapsible title="Microdomains" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} sm={12}>
              {textContent.microdomains.text}
              <div className="text-right mt-2 mb-2">
                <Button
                  href={`${assetsBase}/overlapping-microdomains/overlapping_microdomains.h5`}
                  type="primary"
                  size="small"
                  icon={<DownloadOutlined />}
                >
                  Overlapping microdomains
                </Button>
              </div>
              {textContent.microdomains.legend}
            </Col>
            <Col xs={24} sm={12}>
              <ImageViewer
                src={`${imgBase}/results_microdomains_illustration.png`}
                thumbnailSrc={imgOpt(`${imgBase}/results_microdomains_illustration.png`)}
              />
            </Col>
          </Row>
        </Collapsible>

        <Collapsible title="Connectivities" className="mt-4">
          <Row gutter={32}>
            <Col span={24} className="column-count-2 mb-3">{textContent.connectivities.text}</Col>
            <Col span={24}>
              <ImageViewer
                src={`${imgBase}/results_connectivity_illustration_v2.png`}
                thumbnailSrc={imgOpt(`${imgBase}/results_connectivity_illustration_v2.png`, { width: 1920 })}
              />
              {textContent.connectivities.figure}
            </Col>
          </Row>
        </Collapsible>

        <Collapsible title="Endfeet surface reconstruction" className="mt-4">
          <Row gutter={32}>
            <Col span={24} className="column-count-2 mb-3">
              {textContent.endfeetSurfaceReconstruction.text}
              <div className="text-right mt-2">
                <Button
                  href={`${assetsBase}/endfeet-data/endfeet_data.json`}
                  type="primary"
                  size="small"
                  icon={<DownloadOutlined />}
                >
                  Endfeet data
                </Button>
              </div>
            </Col>
            <Col span={24}>
              <ImageViewer
                className="mb-1"
                src={`${imgBase}/NGV_DISS149_4k_STILL_ENDFEET_WITH_DOF.jpeg`}
                thumbnailSrc={imgOpt(`${imgBase}/NGV_DISS149_4k_STILL_ENDFEET_WITH_DOF.jpeg`, { width: 1920 })}
              />
              {textContent.endfeetSurfaceReconstruction.legend}
            </Col>
          </Row>
        </Collapsible>

        <Collapsible title="Morphological synthesis of astrocytes" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} sm={12}>
              {textContent.morphologicalSynthesisOfAstrocytes.text}

              <div className="text-right mt-2 mb-2">
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

              {textContent.morphologicalSynthesisOfAstrocytes.legend}
            </Col>
            <Col xs={24} sm={12}>
              <ImageViewer
                src={`${imgBase}/results_morphs_illustration_recolored.png`}
                thumbnailSrc={imgOpt(`${imgBase}/results_morphs_illustration_recolored.png`)}
              />
            </Col>
            {/* <Col xs={24} sm={12}>
              <ImageViewer
                src={`${imgBase}/circuit_astrocytes.png`}
                thumbnailSrc={imgOpt(`${imgBase}/circuit_astrocytes.png`)}
              />
            </Col> */}
          </Row>
        </Collapsible>

        <Collapsible title="Astrocytic morphologies exploration using Python" className="mt-4">
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
        </Collapsible>
      </DataContainer>
    </>
  );
}
