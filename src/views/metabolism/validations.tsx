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
        <DataSection title="Concentrations">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                columnFormat
                textKey="concentrations"
                imagePath="validations_1.png"
                assetsBase={assetsBase}
                extraHtml={extraHtml}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Michaelis constants" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                columnFormat
                textKey="michaelisConstants"
                imagePath="validations_2.png"
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
                columnFormat
                textKey="lactate"
                imagePath="validations_3.png"
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
                columnFormat
                textKey="nadh"
                imagePath="validations_4.png"
                assetsBase={assetsBase}
                extraHtml={extraHtml}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="BOLD signal" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                columnFormat
                textKey="boldSignal"
                imagePath="validations_5.png"
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
