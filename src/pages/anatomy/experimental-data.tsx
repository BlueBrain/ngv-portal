import React from 'react';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import Collapsible from '../../components/Collapsible';
import ImageViewer from '../../components/ImageViewer';
import { imgOpt } from '../../utils';
import textContent from '../../text-content/anatomy/experimental-data';


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
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.emData}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/experimental-data/ngv-em-stack.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/experimental-data/ngv-em-stack.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Extracted meshes" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.extractedMeshes}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/experimental-data/astrocyte-2-10001.jpeg"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/experimental-data/astrocyte-2-10001.jpeg')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Skeletonized experimental morphologies" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.skeletonizedExpMorphs}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/experimental-data/astrocyte_morphology.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/experimental-data/astrocyte_morphology.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Vasculature data" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.vasculatureData}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/experimental-data/vasculature_stages.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/experimental-data/vasculature_stages.png')}
              />
            </div>
          </div>
        </Collapsible>
      </DataContainer>
    </>
  );
}
