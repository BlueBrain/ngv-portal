import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import Filters from '@/layouts/Filters';
import Title from '@/components/Title';
import InfoBox from '@/components/InfoBox';
import DataContainer from '@/components/DataContainer';
import DataSection from '@/components/DataSection';
import textContent from '@/text-content/metabolism/experimental-data';
import ConcentrationsTable from '@/components/Metabolism/ExperimentalData/ConcentrationsTable';
import { antBreakpoint, baseUrl } from '@/config';
import { Color } from '@/types';

const primaryColor: Color = "purple"

export default function MetabolismExpDataView() {

  return (
    <>
      <Filters primaryColor={primaryColor} backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor={primaryColor}
            title="Experimental data"
            subtitle="Metabolism"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${baseUrl}/assets/images/anatomy-illustrations/anatomy-experimental-data-illustration.png`}
                alt="Illustration for Metabolism experimental data"
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
                primaryColor="blue"
                title="Experimental data"
                subtitle="Metabolism"
              />
              <InfoBox content={textContent.pageDescription} color={primaryColor} />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="Concentrations Table">
          <Row gutter={32}>
            <Col xs={24} md={24}>{textContent.concentrationsOfMolecules}</Col>
            <Col xs={24} md={24}>
              <ConcentrationsTable />
            </Col>
          </Row>
        </DataSection>
      </DataContainer>
    </>
  );
}
