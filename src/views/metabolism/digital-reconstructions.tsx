import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '@/layouts/Filters';
import Title from '@/components/Title';
import InfoBox from '@/components/InfoBox';
import DataContainer from '@/components/DataContainer';
import DataSection from '@/components/DataSection';
import textContent from '@/text-content/metabolism/digital-reconstructions';
import ModelComponents from '@/components/Metabolism/DigitalReconstruction/ModelComponents';
import ModelOverview from '@/components/Metabolism/DigitalReconstruction/ModelOverview';
import SimulationResults from '@/components/Metabolism/DigitalReconstruction/SimulationResults';
import { antBreakpoint, basePath } from '@/config';
import { Color } from '@/types';
import { PageTitles } from '@/layouts/Navigation/constans';
import ImageAndDescriptionTemplate from '@/components/ImageAndDescriptionTemplate';
import ReconstructionParametersTable from '@/components/Metabolism/DigitalReconstruction/ReconstructionParametersTable';
import RatesFunctionsYoungTable from '@/components/Metabolism/DigitalReconstruction/RatesFunctionsYoungTable';
import RatesFunctionsAgedTable from '@/components/Metabolism/DigitalReconstruction/RatesFunctionsAgedTable';

const primaryColor: Color = "purple"

export default function MetabolismDigitalRecView() {

  return (
    <>
      <Filters primaryColor={primaryColor} backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor={primaryColor}
            title={PageTitles.DIGITAL_RECONSTRUCTIONS}
            subtitle="Metabolism"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${basePath}/assets/images/metabolism/digital-reconstructions/infographic.png`}
                alt="Illustration for Metabolism Digital reconstructions"
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
                title={PageTitles.DIGITAL_RECONSTRUCTIONS}
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

        <DataSection title="Model components" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ModelComponents />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Simulation results" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <SimulationResults />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Workflow components" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>
              <ImageAndDescriptionTemplate
                columnFormat
                imagePath="MOPRO-659_Workflow_Preview_230525.png"
                assetsBase={'metabolism/digital-reconstructions'}
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Reconstruction parameters" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>{textContent.recParams}</Col>
            <Col xs={24} md={24}>
              <ReconstructionParametersTable />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Rate equations in young state" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>{textContent.rateFnYoung}</Col>
            <Col xs={24} md={24}>
              <RatesFunctionsYoungTable />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Rate equations in aged state" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={24}>{textContent.rateFnAged}</Col>
            <Col xs={24} md={24}>
              <RatesFunctionsAgedTable />
            </Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
}
