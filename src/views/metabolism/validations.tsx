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
import ImageAndDescriptionTemplate from '@/components/ImageAndDescriptionTemplate';
import { PageTitles } from '@/layouts/Navigation/constans';

const primaryColor: Color = "purple"

const imgBase = `${basePath}/assets/images/validations`;

const assetsBase = 'metabolism/validations';
const extraHtml = <div>{ textContent.supplementaryMaterialLegend }</div>;

export default function MetabolismValidationsView() {
  return (
    <>
      <Filters primaryColor={primaryColor} backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor={primaryColor}
            title={PageTitles.VALIDATION}
            subtitle="Metabolism"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${basePath}/assets/images/metabolism/validations/infographic.png`}
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
                title={PageTitles.VALIDATION}
                subtitle="Metabolism"
              />
              <InfoBox content={textContent.pageDescription} color={primaryColor} />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="Concentration of molecules">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="concentrations"
                imagePath="concentrations.png"
                assetsBase={assetsBase}
                extraHtml={extraHtml}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="BOLD" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="bold"
                imagePath="bold.png"
                assetsBase={assetsBase}
                extraHtml={extraHtml}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="OGI" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="ogi"
                imagePath="ogi.png"
                assetsBase={assetsBase}
                extraHtml={extraHtml}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="ATP / Energy" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="atp"
                imagePath="atp.png"
                assetsBase={assetsBase}
                extraHtml={extraHtml}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Glucose" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="glucose"
                imagePath="glucose.png"
                assetsBase={assetsBase}
                extraHtml={extraHtml}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Lactate" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="lactate"
                imagePath="lactate.png"
                assetsBase={assetsBase}
                extraHtml={extraHtml}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="NADH" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="nadh"
                imagePath="nadh.png"
                assetsBase={assetsBase}
                extraHtml={extraHtml}
              />
            </Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
}
