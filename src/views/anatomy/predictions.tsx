import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import DataSection from '../../components/DataSection';
import ImageViewer from '../../components/ImageViewer';
import textContent from '../../text-content/anatomy/predictions';
import { antBreakpoint, basePath } from '../../config';


export default function AnatomyPredictionsView() {
  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor="blue"
            title="Predictions"
            subtitle="Anatomy"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${basePath}/assets/images/anatomy-illustrations/anatomy-predictions-illustration.png`}
                alt="Illustration for Anatomy predictions"
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
                title="Predictions"
                subtitle="Anatomy"
              />
              <InfoBox content={textContent.pageDescription} color="blue" />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="Spatial organization of astrocytic endfeet">
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.spatialOrganizationOfAstrocyticEndfeet.text}</Col>
            <Col span={24} className="mt-3 mb-1">
              <ImageViewer
                src={`${basePath}/assets/images/predictions/predictions_densities.png`}
                aspectRatio="2481 / 2219"
                alt="Densities prediction plots"
              />
            </Col>
            <Col span={24}>{textContent.spatialOrganizationOfAstrocyticEndfeet.legend}</Col>
          </Row>
        </DataSection>

        <DataSection title="Effect of astrocytic density on endfeet organization" className="mt-4">
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.effectOfAstrocyticDensityOnEndfeetOrganization.text}</Col>
            <Col span={24} className="mt-3 mb-2">
              <ImageViewer
                src={`${basePath}/assets/images/predictions/endfeet_organization.png`}
                aspectRatio="5400 / 3600"
                alt="Endfeet organization prediction plots"
              />
            </Col>
            <Col span={24}>{textContent.effectOfAstrocyticDensityOnEndfeetOrganization.legend}</Col>
          </Row>
        </DataSection>

        <DataSection title="Emerging NGV compositional hierarchy" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={12}>
              {textContent.emergingNgvCompositionalHierarchy.text}
            </Col>
            <Col xs={24} md={12}>
              <ImageViewer
                src={`${basePath}/assets/images/predictions/predictions_bars.png`}
                aspectRatio="546 / 840"
                alt="Composition prediction plots"
              />
              <div className="mt-1">
                {textContent.emergingNgvCompositionalHierarchy.legend}
              </div>
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Astrocyte numbers" className="mt-4">
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.astrocyteNumbers.text}</Col>
            <Col span={24} className="mt-3 mb-2">
              <ImageViewer
                src={`${basePath}/assets/images/predictions/predictions_astrocyte.png`}
                aspectRatio="4389 / 3529"
                alt="Astrocyte prediction plots"
              />
            </Col>
            <Col span={24}>{textContent.astrocyteNumbers.legend}</Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
};
