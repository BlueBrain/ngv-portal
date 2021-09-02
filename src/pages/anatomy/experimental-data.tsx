import React from 'react';
import { Row, Col, Dropdown, Menu, Button } from 'antd';
import { DownloadOutlined, DownOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { saveAs } from 'file-saver';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import Collapsible from '../../components/Collapsible';
import ImageViewer from '../../components/ImageViewer';
import { imgOpt } from '../../utils';
import textContent from '../../text-content/anatomy/experimental-data';
import { staticDataBaseUrl } from '../../config';


const imgBase = '/ngv-portal/assets/images/experimental-data';
const assetsBase = `${staticDataBaseUrl}/anatomy/experimental-data`;

const downloadableMorphologies = [{
  href: `${assetsBase}/astrocyte-morphologies/astrocyte-morphology-1.tar.xz`,
  label: 'Astrocyte morphology 1',
}, {
  href: `${assetsBase}/astrocyte-morphologies/astrocyte-morphology-2.tar.xz`,
  label: 'Astrocyte morphology 2',
}, {
  href: `${assetsBase}/astrocyte-morphologies/astrocyte-morphology-3.tar.xz`,
  label: 'Astrocyte morphology 3',
}];

export default function AnatomyExpData() {
  const downloadMorphology = (e) => {
    const morph = downloadableMorphologies.find(morph => morph.label === e.key);
    const filename= morph.href.split('/').reverse()[0];
    saveAs(morph.href, filename);
  };

  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <Row gutter={32} align="middle" className="w-100">
          <Col xs={24} lg={12} className="mt-1 mb-1">
            <Title
              primaryColor="blue"
              title="Experimental data"
              subtitle="Anatomy"
            />
            <InfoBox content={textContent.pageDescription} color="blue" />
          </Col>
          <Col xs={24} lg={12} className="mt-1 mb-1">
            <Image
              src="/ngv-portal/assets/images/anatomy-illustrations/anatomy-experimental-data-illustration.png"
              alt="Illustration for Anatomy experimental data"
              layout="responsive"
              width="1280"
              height="720"
              loading="eager"
            />
          </Col>
        </Row>
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
          {/* <div className="text-right mt-3">
            <Dropdown
              overlay={<Menu onClick={downloadMorphology}>
                {downloadableMorphologies.map(morph => (
                  <Menu.Item key={morph.label}>{morph.label}</Menu.Item>
                ))}
              </Menu>}
            >
              <Button
                type="primary"
                size="small"
                icon={<DownloadOutlined />}
              >
                Morphologies <DownOutlined />
              </Button>
            </Dropdown>
          </div> */}
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
          <div className="text-right mt-3">
            <Button
              href={`${assetsBase}/vasculature-data/raw-vasculature-data.vtk`}
              type="primary"
              size="small"
              icon={<DownloadOutlined />}
            >
              Vasculature dataset
            </Button>
          </div>
        </Collapsible>
      </DataContainer>
    </>
  );
}
