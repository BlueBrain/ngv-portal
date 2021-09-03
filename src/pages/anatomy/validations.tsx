import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import Collapsible from '../../components/Collapsible';
import ImageViewer from '../../components/ImageViewer';
import { imgOpt } from '../../utils';
import textContent from '../../text-content/anatomy/validations';


const imgBase = '/ngv-portal/assets/images/validations';


export default function AnatomyValidations() {
  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <Row align="middle" className="w-100">
          <Col xs={24} lg={12} className="mt-1 mb-1">
            <Title
              primaryColor="blue"
              title="Validations"
              subtitle="Anatomy"
            />
            <InfoBox content={textContent.pageDescription} color="blue" />
          </Col>
          <Col xs={24} lg={12} className="mt-1 mb-1">
            <Image
              src="/ngv-portal/assets/images/anatomy-illustrations/anatomy-validations-illustration.png"
              alt="Illustration for Anatomy validations"
              layout="responsive"
              width="1280"
              height="720"
              loading="eager"
            />
          </Col>
        </Row>
      </Filters>

      <DataContainer>
        <Collapsible title="Network level validation with respect to literature data">
          {textContent.networkLevelValidation.description}

          <h3 className="mt-4 mb-2">Density</h3>
          <Row gutter={32}>
            <Col span={24}>{textContent.networkLevelValidation.density.text}</Col>
            <Col span={24} className="mt-2 mb-2">
              <ImageViewer
                src={`${imgBase}/validation_density.png`}
                thumbnailSrc={imgOpt(`${imgBase}/validation_density.png`, { width: 1920 })}
              />
            </Col>
            <Col span={24}>{textContent.networkLevelValidation.density.legend}</Col>
          </Row>

          <h3 className="mt-4 mb-2">Dispersion</h3>
          <Row gutter={32}>
            <Col span={24}>{textContent.networkLevelValidation.dispersion.text}</Col>
            <Col span={24} className="mt-2 mb-2">
              <ImageViewer
                src={`${imgBase}/repulsion_function.png`}
                thumbnailSrc={imgOpt(`${imgBase}/repulsion_function.png`, { width: 1920 })}
              />
            </Col>
            <Col span={24}>{textContent.networkLevelValidation.dispersion.legend}</Col>
          </Row>

          <h3 className="mt-4 mb-2">Radius distribution</h3>
          <Row gutter={32}>
            <Col span={24}>{textContent.networkLevelValidation.radiusDistribution.text}</Col>
            <Col span={24} className="mt-3 mb-2">
              <ImageViewer
                src={`${imgBase}/validation_radius.png`}
                thumbnailSrc={imgOpt(`${imgBase}/validation_radius.png`, { width: 1920 })}
              />
            </Col>
            <Col span={24}>{textContent.networkLevelValidation.radiusDistribution.legend}</Col>
          </Row>

          <h3 className="mt-4 mb-2">Microdomains volumes</h3>
          <Row gutter={32}>
            <Col span={24}>{textContent.networkLevelValidation.microdomainVolumes.text}</Col>
            <Col span={24} className="mt-2 mb-2">
              <ImageViewer
                src={`${imgBase}/validation_microdomains.png`}
                thumbnailSrc={imgOpt(`${imgBase}/validation_microdomains.png`, { width: 1920 })}
              />
            </Col>
            <Col span={24}>{textContent.networkLevelValidation.microdomainVolumes.legend}</Col>
          </Row>

          <h3 className="mt-4 mb-2">Distance of astrocyte to vasculature</h3>
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.networkLevelValidation.distanceOfAstrocyteToVasculature.text}</Col>
            <Col span={24} className="mt-3 mb-1">
              <ImageViewer
                src={`${imgBase}/validation_endfeet_paths.png`}
                thumbnailSrc={imgOpt(`${imgBase}/validation_endfeet_paths.png`, { width: 1920 })}
              />
            </Col>
            <Col span={24} className="mt-2">{textContent.networkLevelValidation.distanceOfAstrocyteToVasculature.figure}</Col>
          </Row>

          <h3 className="mt-4 mb-2">Endfeet surface meshes</h3>
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.networkLevelValidation.endfeetSurfaceMeshes.text}</Col>
            <Col span={24} className="mt-3 mb-1">
              <ImageViewer
                src={`${imgBase}/validation_endfeet_areas.png`}
                thumbnailSrc={imgOpt(`${imgBase}/validation_endfeet_areas.png`, { width: 1920 })}
              />
            </Col>
            <Col span={24}>{textContent.networkLevelValidation.endfeetSurfaceMeshes.legend}</Col>
          </Row>

          <h3 className="mt-4 mb-2">Number of processes</h3>
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.networkLevelValidation.numberOfProcesses.text}</Col>
            <Col span={24} className="mt-3 mb-1">
              <ImageViewer
                src={`${imgBase}/validation_misc.png`}
                thumbnailSrc={imgOpt(`${imgBase}/validation_misc.png`, { width: 1920 })}
              />
            </Col>
            <Col span={24}>{textContent.networkLevelValidation.numberOfProcesses.legend}</Col>
          </Row>
        </Collapsible>

        <Collapsible title="Synthesized Cell Validation" className="mt-4">
          {textContent.synthesizedCellValidation.description}

          <h3 className="mt-4 mb-2">Feature based</h3>
          <Row gutter={32}>
            <Col xs={24} md={12}>
              {textContent.synthesizedCellValidation.featureBased.text}
              {textContent.synthesizedCellValidation.featureBased.legend}
            </Col>
            <Col xs={24} md={12}>
              <ImageViewer
                src={`${imgBase}/validation_circuit_morphometrics.png`}
                thumbnailSrc={imgOpt(`${imgBase}/validation_circuit_morphometrics.png`)}
              />
            </Col>
          </Row>

          <h3 className="mt-4 mb-2">Topological</h3>
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.synthesizedCellValidation.topological.text}</Col>
            <Col span={24} className="mt-3 mb-2">
              <ImageViewer
                src={`${imgBase}/validation_circuit_topologies.png`}
                thumbnailSrc={imgOpt(`${imgBase}/validation_circuit_topologies.png`, { width: 1920 })}
              />
            </Col>
            <Col span={24}>{textContent.synthesizedCellValidation.topological.legend}</Col>
          </Row>
        </Collapsible>
      </DataContainer>
    </>
  );
}
