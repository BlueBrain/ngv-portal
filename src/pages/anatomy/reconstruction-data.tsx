import React from 'react';

import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { bash, python } from 'react-syntax-highlighter/dist/cjs/languages/hljs';
import codeStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light';

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


export default function AnatomyRecData() {
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
          <div className="row mt-2 mb-2">
            <div className="col-xs-12 col-sm-4">
              <Video
                sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_N')}
                muted
                autoplay
                loop
                defaultSize={360}
              />
            </div>
            <div className="col-xs-12 col-sm-4">
              <Video
                sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_G')}
                muted
                autoplay
                loop
                defaultSize={360}
              />
            </div>
            <div className="col-xs-12 col-sm-4">
              <Video
                sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_V')}
                muted
                autoplay
                loop
                defaultSize={360}
              />
            </div>
          </div>

          <Video
            sources={composeSources('/anatomy/reconstruction-data/NGV_DISS149_MASTER_TURNTABLE_NGV')}
            muted
            autoplay
            loop
            defaultSize={720}
          />

          <div className="row mt-2">
            <div className="col-xs-12 col-sm-4 col-sm-offset-8">
              <a
                href="https://bbp.epfl.ch/ngv-viewer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the Circuit Viewer
              </a>
              <img
                style={{ width: '100%', marginTop: '1rem', border: '1px solid grey' }}
                src="/ngv-portal/assets/images/reconstruction-data/circuit-viewer.png"
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Neuronal circuit" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.neuronalCircuit}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/reconstruction-data/NGV_DISS149_4k_STILL_NEURONS_WITH_DOF.jpeg"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/reconstruction-data/NGV_DISS149_4k_STILL_NEURONS_WITH_DOF.jpeg')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Vasculature Surface Mesh" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.vasculatureSurfaceMesh}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/reconstruction-data/vasculature_stages.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/reconstruction-data/vasculature_stages.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Astrocytic positions without collision" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.astrocyticPositionsWithoutCollision}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/reconstruction-data/results_illustrations.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/reconstruction-data/results_illustrations.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Microdomains" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.microdomains}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/reconstruction-data/results_microdomains_illustration.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/reconstruction-data/results_microdomains_illustration.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Connectivities" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.connectivities}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/reconstruction-data/results_connectivity_illustration_v2.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/reconstruction-data/results_connectivity_illustration_v2.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Endfeet surface reconstruction" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.endfeetSurfaceReconstruction}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/reconstruction-data/NGV_DISS149_4k_STILL_ENDFEET_WITH_DOF.jpeg"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/reconstruction-data/NGV_DISS149_4k_STILL_ENDFEET_WITH_DOF.jpeg')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Morphological synthesis of astrocytes" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.morphologicalSynthesisOfAstrocytes}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/reconstruction-data/results_morphs_illustration_recolored.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/reconstruction-data/results_morphs_illustration_recolored.png')}
              />
            </div>
          </div>
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
