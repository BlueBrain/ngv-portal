import React, { CSSProperties } from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '@/layouts/Filters';
import Title from '@/components/Title';
import InfoBox from '@/components/InfoBox';
import DataContainer from '@/components/DataContainer';
import DataSection from '@/components/DataSection';
import { antBreakpoint, basePath } from '@/config';
import textContent from '@/text-content/blood-flow/validations';
import { Color } from '@/types';
import { PageTitles } from '@/layouts/Navigation/constans';
import ImageAndDescriptionTemplate from '@/components/ImageAndDescriptionTemplate';
import CollabNotebook from '@/components/BloodFlow/CollabNotebook';

const primaryColor: Color = "red";

const assetsBase = 'blood-flow/validations';

const subtitleStyle: CSSProperties = {
  fontSize: '1.4em',
  marginTop: '35px',
  marginBottom: '10px',
  fontWeight: 'bold',
}

export default function BloodFlowValidationsView() {
  return (
    <>
      <Filters primaryColor={primaryColor} backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor={primaryColor}
            title={PageTitles.VALIDATION}
            subtitle="BloodFlow"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${basePath}/assets/images/metabolism/validations/infographic.png`}
                alt="Illustration for Blood Flow Validations"
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
                subtitle="BloodFlow"
              />
              <InfoBox content={textContent.pageDescription} color={primaryColor} />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="Model validation with respect to literature data">
          <Row gutter={32}>
            <Col xs={24} md={24}>
                {textContent.introductionTextSection1}
            </Col>
          </Row>

          <p style={subtitleStyle}>▬▬ Blood flow and velocity values</p>
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="figure1Title"
                imagePath="Figure_1.png"
                assetsBase={assetsBase}
                imgLegend={textContent.figure1ImgLegend}
                columnFormat
              />
            </Col>
          </Row>

          <p style={subtitleStyle}>▬▬ Blood flow and velocity distribution</p>
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="figure2Title"
                imagePath="Figure_2.png"
                assetsBase={assetsBase}
                imgLegend={textContent.figure2ImgLegend}
                columnFormat
              />
            </Col>
          </Row>

          <p style={subtitleStyle}>▬▬ Blood flow and velocity distribution</p>
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="figure3Title"
                imagePath="Figure_3.png"
                assetsBase={assetsBase}
                imgLegend={textContent.figure3ImgLegend}
                columnFormat
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="In-depth analysis of flow values" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <div>{textContent.introductionTextSection2}</div>
            </Col>
          </Row>

          <p style={subtitleStyle}>▬▬ Capillary diameter ranging from 1 to 3 μm</p>
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="figure4Title"
                imagePath="Figure_4.png"
                assetsBase={assetsBase}
                imgLegend={textContent.figure4ImgLegend}
                columnFormat
              />
            </Col>
          </Row>

          <p style={subtitleStyle}>▬▬ Capillary diameter ranging from 3 to 5 μm</p>
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="figure5Title"
                imagePath="Figure_5.png"
                assetsBase={assetsBase}
                imgLegend={textContent.figure5ImgLegend}
                columnFormat
              />
            </Col>
          </Row>

          <p style={subtitleStyle}>▬▬ Capillary diameter ranging from 5 to 7 μm</p>
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="figure6Title"
                imagePath="Figure_6.png"
                assetsBase={assetsBase}
                imgLegend={textContent.figure5ImgLegend}
                columnFormat
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="AstroVascPy (Open Source project)" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                textKey="openSourcingDescription"
                imagePath="AstroVascPy.jpg"
                assetsBase={assetsBase}
                columnFormat
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Executable model to run and modify it online" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <CollabNotebook />
            </Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
}
