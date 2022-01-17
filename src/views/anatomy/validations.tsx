import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import DataSection from '../../components/DataSection';
import ImageViewer from '../../components/ImageViewer';
import { antBreakpoint, basePath } from '../../config';
import textContent from '../../text-content/anatomy/validations';


const imgBase = `${basePath}/assets/images/validations`;


export default function AnatomyValidationsView() {
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
                src={`${basePath}/assets/images/anatomy-illustrations/anatomy-validations-illustration.png`}
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
                aspectRatio="2597 / 1133"
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
                aspectRatio="1669 / 884"
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
                aspectRatio="1945 / 685"
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
                aspectRatio="2567 / 1603"
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
                aspectRatio="2994 / 699"
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
                aspectRatio="3089 / 812"
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
                aspectRatio="2745 / 1043"
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
                aspectRatio="1867 / 1844"
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
                aspectRatio="4853 / 3177"
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
