import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '@/layouts/Filters';
import Title from '@/components/Title';
import InfoBox from '@/components/InfoBox';
import DataContainer from '@/components/DataContainer';
import DataSection from '@/components/DataSection';
import textContent from '@/text-content/metabolism/digital-reconstruction';
import ModelComponents from '@/components/Metabolism/DigitalReconstruction/ModelComponents';
import ModelOverview from '@/components/Metabolism/DigitalReconstruction/ModelOverview';
import { antBreakpoint, basePath } from '@/config';
import { Color } from '@/types';

const primaryColor: Color = "purple"

export default function MetabolismDigitalRecView() {

  return (
    <>
      <Filters primaryColor={primaryColor} backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor={primaryColor}
            title="Digital reconstruction"
            subtitle="Metabolism"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${basePath}/assets/images/anatomy-illustrations/anatomy-experimental-data-illustration.png`}
                alt="Illustration for Metabolism Digital reconstruction"
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
                primaryColor={primaryColor}
                title="Digital reconstruction"
                subtitle="Metabolism"
              />
              <InfoBox content={textContent.pageDescription} color={primaryColor} />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="Model overview">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ModelOverview />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Model components">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ModelComponents />
              </Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
}
