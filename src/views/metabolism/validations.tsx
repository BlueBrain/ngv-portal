import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '@/layouts/Filters';
import Title from '@/components/Title';
import InfoBox from '@/components/InfoBox';
import DataContainer from '@/components/DataContainer';
import DataSection from '@/components/DataSection';
import { antBreakpoint, basePath } from '@/config';
import textContent from '@/text-content/metabolism/validations';
import { Color } from '@/types';
import ValidationTemplate from '@/components/Metabolism/Validations/ValidationTemplate';

const primaryColor: Color = "purple"

const imgBase = `${basePath}/assets/images/validations`;


export default function MetabolismValidationsView() {
  return (
    <>
      <Filters primaryColor={primaryColor} backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor={primaryColor}
            title="Validations"
            subtitle="Metabolism"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${basePath}/assets/images/anatomy-illustrations/anatomy-experimental-data-illustration.png`}
                alt="Illustration for Metabolism Validations"
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
                title="Validations"
                subtitle="Metabolism"
              />
              <InfoBox content={textContent.pageDescription} color={primaryColor} />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="BOLD">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ValidationTemplate
                textKey="bold"
                imagePath="bold.png"
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="OGI">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ValidationTemplate
                textKey="ogi"
                imagePath="ogi.png"
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="ATP / Energy">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ValidationTemplate
                textKey="atp"
                imagePath="atp.png"
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Glucose">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ValidationTemplate
                textKey="glucose"
                imagePath="glucose.png"
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Lactate">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ValidationTemplate
                textKey="lactate"
                imagePath="lactate.png"
              />
            </Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
}
