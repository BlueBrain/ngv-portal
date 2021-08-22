import React from 'react';
import { Row, Col } from 'antd';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import Collapsible from '../../components/Collapsible';
import ImageViewer from '../../components/ImageViewer';
import { imgOpt } from '../../utils';
import textContent from '../../text-content/anatomy/experimental-data';


const imgBase = '/ngv-portal/assets/images/experimental-data';

export default function AnatomyExpData() {
  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <div className="center-col">
          <Title
            primaryColor="blue"
            title="Experimental data"
            subtitle="Anatomy"
          />
          <div role="information">
            <InfoBox content={textContent.pageDescription} color="blue" />
          </div>
        </div>
        <div className="center-col"></div>
      </Filters>

      <DataContainer>
        <Collapsible title="EM Data">
          <Row gutter={32}>
            <Col xs={24} md={12}>{textContent.emData}</Col>
            <Col xs={24} md={12}>
              <ImageViewer
                src={`${imgBase}/ngv-em-stack.jpeg`}
                thumbnailSrc={imgOpt(`${imgBase}/ngv-em-stack.jpeg`)}
              />
            </Col>
          </Row>
        </Collapsible>

        <Collapsible title="Extracted meshes" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={12}>{textContent.extractedMeshes}</Col>
            <Col xs={24} md={12}>
              <ImageViewer
                src={`${imgBase}/astrocyte-2-10001.jpeg`}
                thumbnailSrc={imgOpt(`${imgBase}/astrocyte-2-10001.jpeg`)}
              />
            </Col>
          </Row>
        </Collapsible>

        <Collapsible title="Skeletonized experimental morphologies" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={12}>{textContent.skeletonizedExpMorphs}</Col>
            <Col xs={24} md={12} className="pl-2 pr-2 p-2">
              <ImageViewer
                src={`${imgBase}/astrocyte_morphology.png`}
                thumbnailSrc={imgOpt(`${imgBase}/astrocyte_morphology.png`)}
              />
            </Col>
          </Row>
        </Collapsible>

        <Collapsible title="Vasculature data" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={12}>{textContent.vasculatureData}</Col>
            <Col xs={24} md={12}>
              <ImageViewer
                src={`${imgBase}/vasculature_stages.png`}
                thumbnailSrc={imgOpt(`${imgBase}/vasculature_stages.png`)}
              />
            </Col>
          </Row>
        </Collapsible>
      </DataContainer>
    </>
  );
}
