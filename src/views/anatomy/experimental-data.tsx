import React from 'react';
import { Row, Col, Dropdown, Menu, Button } from 'antd';
import { DownloadOutlined, DownOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { saveAs } from 'file-saver';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import DataSection from '../../components/DataSection';
import ImageViewer from '../../components/ImageViewer';
import textContent from '../../text-content/anatomy/experimental-data';
import { staticDataBaseUrl, antBreakpoint, basePath } from '../../config';
import { PageTitles } from '../../layouts/Navigation/constans';


const imgBase = `${basePath}/assets/images/experimental-data`;
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

export default function AnatomyExpDataView() {
  const downloadMorphology = (e) => {
    const morph = downloadableMorphologies.find(morph => morph.label === e.key);
    const filename= morph.href.split('/').reverse()[0];
    saveAs(morph.href, filename);
  };

  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <div className="w-100">
          <Title
            className="show-xs hide-lg mt-2"
            primaryColor="blue"
            title={PageTitles.EXPERIMENTAL_DATA}
            subtitle="Anatomy"
          />
          <Row align="middle">
            <Col xs={24} lg={{ span: 12, push: 12 }} className="mt-1 mb-1">
              <Image
                src={`${basePath}/assets/images/anatomy-illustrations/anatomy-experimental-data-illustration.png`}
                alt="Illustration for Anatomy experimental data"
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
                title={PageTitles.EXPERIMENTAL_DATA}
                subtitle="Anatomy"
              />
              <InfoBox content={textContent.pageDescription} color="blue" />
            </Col>
          </Row>
        </div>
      </Filters>

      <DataContainer>
        <DataSection title="EM Data">
          <Row gutter={32}>
            <Col xs={24} md={12}>{textContent.emData}</Col>
            <Col xs={24} md={12}>
              <ImageViewer
                src={`${imgBase}/ngv-em-stack.jpeg`}
                aspectRatio="3840 / 3597"
                alt="EM stack image"
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Extracted meshes" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={12}>{textContent.extractedMeshes}</Col>
            <Col xs={24} md={12}>
              <ImageViewer
                src={`${imgBase}/astrocyte-2-10001.jpeg`}
                aspectRatio="2715 / 2755"
                alt="extracted mesh render"
              />
            </Col>
          </Row>
        </DataSection>

        <DataSection title="Skeletonized experimental morphologies" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={12}>{textContent.skeletonizedExpMorphs}</Col>
            <Col xs={24} md={12} className="pl-2 pr-2 p-2">
              <ImageViewer
                src={`${imgBase}/astrocyte_morphology.png`}
                aspectRatio="1581 / 1479"
                alt="astrocyte morphology render"
              />
            </Col>
          </Row>
          <div className="text-right mt-3">
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
          </div>
        </DataSection>

        <DataSection title="Vasculature data" className="mt-4">
          <Row gutter={32}>
            <Col xs={24} md={12}>{textContent.vasculatureData}</Col>
            <Col xs={24} md={12}>
              <ImageViewer
                src={`${imgBase}/still_vasculatures_with_dof.jpg`}
                aspectRatio="1497 / 2019"
                alt="vasculature render"
              />
            </Col>
          </Row>
          <div className="text-right mt-3">
            <Button
              href={`${assetsBase}/vasculature-data/raw-vasculature-data.vtk.tar.xz`}
              type="primary"
              size="small"
              icon={<DownloadOutlined />}
            >
              Vasculature dataset
            </Button>
          </div>
        </DataSection>
      </DataContainer>
    </>
  );
}
