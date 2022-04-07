import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '@/layouts/Filters';
import Title from '@/components/Title';
import InfoBox from '@/components/InfoBox';
import DataContainer from '@/components/DataContainer';
import DataSection from '@/components/DataSection';
import textContent from '@/text-content/blood-flow/experimental-data';
import { antBreakpoint, basePath } from '@/config';
import { Color } from '@/types';
import { PageTitles } from '@/layouts/Navigation/constans';
import ImageAndDescriptionTemplate from '@/components/ImageAndDescriptionTemplate';
import Video, { composeSources } from '@/components/VideoPlayer';
import ImageViewer from '@/components/ImageViewer';

const primaryColor: Color = "red";
const assetsBase = 'blood-flow/experimental-data';

export default function BloodFlowExpDataView() {

  return (
    <>
      <Filters primaryColor={primaryColor} backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor={primaryColor}
            title={PageTitles.EXPERIMENTAL_DATA}
            subtitle="BloodFlow"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${basePath}/assets/images/metabolism/experimental-data/infographic.png`}
                alt="Illustration for Blood Flow experimental data"
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
                title={PageTitles.EXPERIMENTAL_DATA}
                subtitle="BloodFlow"
              />
              <InfoBox content={textContent.pageDescription} color={primaryColor} />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="Vasculature data">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="vasculatureData"
                imagePath="vasculature-data.png"
                assetsBase={assetsBase}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Radii of vessels at endfeet locations" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              { textContent.radii }
            </Col>
          </Row>
          <Row gutter={32}>
            <Col xs={24} md={12}>
              <ImageViewer
                src={`${basePath}/assets/images/${assetsBase}/radii.png`}
                alt="Radii of vessels at endfeet locations image"
              />
              { textContent.radiiLegend }
            </Col>
            <Col xs={24} md={12}>
              <div className="mt-1">
                <Video
                  sources={composeSources(`/${assetsBase}/radii/vasculature_4k_v5`)}
                  muted
                  autoplay
                  loop
                  defaultSize={360}
                />
              </div>
              <span>{ textContent.vasculatureV5VideoLegend }</span>

              <div className="mt-1">
                <Video
                  sources={composeSources(`/${assetsBase}/radii/vasculature_4k_v4`)}
                  muted
                  autoplay
                  loop
                  defaultSize={360}
                />
              </div>
              <span>{ textContent.vasculatureV4VideoLegend }</span>
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Transfer endfeet location from NGV circuit to bloodflow" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="transferEndfeet"
                imagePath="transfer-endfeet.png"
                assetsBase={assetsBase}
              />
            </Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
}
