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
import textContent from '../../text-content/anatomy/predictions';


export default function AnatomyPredictions() {
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
                src="/ngv-portal/assets/images/anatomy-illustrations/anatomy-predictions-illustration.png"
                alt="Illustration for Anatomy predictions"
                layout="responsive"
                width="1280"
                height="720"
                loading="eager"
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
        <Collapsible title="Spatial organization of astrocytic endfeet">
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.spatialOrganizationOfAstrocyticEndfeet.text}</Col>
            <Col span={24} className="mt-3 mb-1">
              <ImageViewer
                src="/ngv-portal/assets/images/predictions/predictions_densities.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/predictions/predictions_densities.png', { width: 1920 })}
              />
            </Col>
            <Col span={24}>{textContent.spatialOrganizationOfAstrocyticEndfeet.legend}</Col>
          </Row>
        </Collapsible>

        <Collapsible title="Effect of astrocytic density on endfeet organization" className="mt-4">
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.effectOfAstrocyticDensityOnEndfeetOrganization.text}</Col>
            <Col span={24} className="mt-3 mb-2">
              <ImageViewer
                src="/ngv-portal/assets/images/predictions/endfeet_organization.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/predictions/endfeet_organization.png')}
              />
            </Col>
            <Col span={24}>{textContent.effectOfAstrocyticDensityOnEndfeetOrganization.legend}</Col>
          </Row>
        </Collapsible>

        <Collapsible title="Emerging NGV compositional hierarchy" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={12}>
              {textContent.emergingNgvCompositionalHierarchy.text}
            </Col>
            <Col xs={24} md={12}>
              <ImageViewer
                src="/ngv-portal/assets/images/predictions/predictions_bars.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/predictions/predictions_bars.png')}
              />
              <div className="mt-1">
                {textContent.emergingNgvCompositionalHierarchy.legend}
              </div>
            </Col>
          </Row>
        </Collapsible>

        <Collapsible title="Astrocyte numbers" className="mt-4">
          <Row gutter={32}>
            <Col span={24} className="column-count-2">{textContent.astrocyteNumbers.text}</Col>
            <Col span={24} className="mt-3 mb-2">
              <ImageViewer
                src="/ngv-portal/assets/images/predictions/predictions_astrocyte.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/predictions/predictions_astrocyte.png', { width: 1920 })}
              />
            </Col>
            <Col span={24}>{textContent.astrocyteNumbers.legend}</Col>
          </Row>
        </Collapsible>
      </DataContainer>
    </>
  );
};
