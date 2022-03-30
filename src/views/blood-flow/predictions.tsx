import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '@/layouts/Filters';
import Title from '@/components/Title';
import InfoBox from '@/components/InfoBox';
import DataContainer from '@/components/DataContainer';
import DataSection from '@/components/DataSection';
import { antBreakpoint, basePath } from '@/config';
import textContent from '@/text-content/blood-flow/predictions';
import { Color } from '@/types';
import { PageTitles } from '@/layouts/Navigation/constans';

const primaryColor: Color = "red";

const imgBase = `${basePath}/assets/images/blood-flow/predictions`;
const assetsBase = 'blood-flow/predictions';

export default function BloodFlowPredictionsView() {
  return (
    <>
      <Filters primaryColor={primaryColor} backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor={primaryColor}
            title={PageTitles.PREDICTION}
            subtitle="BloodFlow"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${imgBase}/infographic.png`}
                alt="Illustration for BloodFlow Predictions"
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
                title={PageTitles.PREDICTION}
                subtitle="BloodFlow"
              />
              <InfoBox content={textContent.pageDescription} color={primaryColor} />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="Placeholder">
          <Row gutter={32}>
            <Col xs={24} md={24}>
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Placeholder 2" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
            </Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
}
