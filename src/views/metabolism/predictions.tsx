import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '@/layouts/Filters';
import Title from '@/components/Title';
import InfoBox from '@/components/InfoBox';
import DataContainer from '@/components/DataContainer';
import DataSection from '@/components/DataSection';
import { antBreakpoint, basePath } from '@/config';
import textContent from '@/text-content/metabolism/predictions';
import { Color } from '@/types';
import { PageTitles } from '@/layouts/Navigation/constans';
import ImageAndDescriptionTemplate from '@/components/ImageAndDescriptionTemplate';

const primaryColor: Color = "purple"

const imgBase = `${basePath}/assets/images/metabolism/predictions`;
const assetsBase = 'metabolism/predictions';

export default function MetabolismPredictionsView() {
  return (
    <>
      <Filters primaryColor={primaryColor} backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor={primaryColor}
            title={PageTitles.PREDICTION}
            subtitle="Metabolism"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${imgBase}/infographic.png`}
                alt="Illustration for Metabolism Predictions"
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
                subtitle="Metabolism"
              />
              <InfoBox content={textContent.pageDescription} color={primaryColor} />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="Adenylate Energy Charge (AEC) in young and old neurons and astrocytes">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                columnFormat
                imagePath="predictions_energy_1.png"
                assetsBase={assetsBase}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Main energy consumption: Na/K-ATPase rate of ATP use" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                columnFormat
                imagePath="predictions_energy_2.png"
                assetsBase={assetsBase}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Ratio of astrocyte to neuron Na/K pump rate" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                columnFormat
                imagePath="predictions_energy_3.png"
                assetsBase={assetsBase}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Example metabolite level profiles in response to kinetic parameter perturbation and calculation of metabolic sensitivity to kinetic parameter perturbations" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                columnFormat
                imagePath="predictions_sensitivity_1.png"
                assetsBase={assetsBase}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Metabolic responsivity to kinetic parameter perturbations" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                columnFormat
                imagePath="predictions_sensitivity_2.png"
                assetsBase={assetsBase}
              />
            </Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
}
