import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import DataSection from '../../components/DataSection';
import ImageViewer from '../../components/ImageViewer';
import { antBreakpoint } from '../../config';
import textContent from '../../text-content/anatomy/validations';


const imgBase = '/ngv-portal/assets/images/validations';


export default function AnatomyValidations() {
  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor="blue"
            title="Validations"
            subtitle="Anatomy"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src="/ngv-portal/assets/images/anatomy-illustrations/anatomy-validations-illustration.png"
                alt="Illustration for Anatomy validations"
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
                title="Validations"
                subtitle="Anatomy"
              />
              <InfoBox content={textContent.pageDescription} color="blue" />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="Network level validation with respect to literature data">
          {textContent.networkLevelValidation.description}

          <h3 className="mt-4 mb-2">Density</h3>
          <Row gutter={32}>
            <Col span={24}>{textContent.networkLevelValidation.density.text}</Col>
            <Col span={24} className="mt-2 mb-2">
              <ImageViewer
                src={`${imgBase}/validation_density.png`}
                width={2597}
                height={1133}
                sizes={`(max-width: 1080px) 100vw, 1080px`}
                alt="Validation density plot"
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
                width={1669}
                height={884}
                sizes={`(max-width: 1080px) 100vw, 1080px`}
                alt="repulsion function plots"
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
                width={1945}
                height={685}
                sizes={`(max-width: 1080px) 100vw, 1080px`}
                alt="Soma radius distribution plots"
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
                width={2567}
                height={1603}
                sizes={`(max-width: 1080px) 100vw, 1080px`}
                alt="Microdomain validation plots"
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
                width={2994}
                height={699}
                sizes={`(max-width: 1080px) 100vw, 1080px`}
                alt="Endfeet paths validation plots"
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
                width={3089}
                height={812}
                sizes={`(max-width: 1080px) 100vw, 1080px`}
                alt="Endfeet areas validation plots"
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
                width={2745}
                height={1043}
                sizes={`(max-width: 1080px) 100vw, 1080px`}
                alt="Misc. validation plots"
              />
            </Col>
            <Col span={24}>{textContent.networkLevelValidation.numberOfProcesses.legend}</Col>
          </Row>
        </DataSection>

        <DataSection title="Synthesized Cell Validation" className="mt-4">
          {textContent.synthesizedCellValidation.description}

          <h3 className="mt-4 mb-2">Feature based</h3>
          <Row gutter={32}>
            <Col xs={24} md={12}>
              {textContent.synthesizedCellValidation.featureBased.text}
            </Col>
            <Col xs={24} md={12}>
              <ImageViewer
                src={`${imgBase}/validation_circuit_morphometrics.png`}
                width={1867}
                height={1844}
                sizes={`(min-width: ${antBreakpoint.md}) 480px, 100vw`}
                alt="Circuit morphometrics validation plots"
              />
              <div className="mt-1">
                {textContent.synthesizedCellValidation.featureBased.legend}
              </div>
            </Col>
          </Row>

          <h3 className="mt-4 mb-2">Topological</h3>
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.synthesizedCellValidation.topological.text}</Col>
            <Col span={24} className="mt-3 mb-2">
              <ImageViewer
                src={`${imgBase}/validation_circuit_topologies.png`}
                width={4853}
                height={3177}
                sizes={`(max-width: 1080px) 100vw, 1080px`}
                alt="Topological validation plots"
              />
            </Col>
            <Col span={24}>{textContent.synthesizedCellValidation.topological.legend}</Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
}
