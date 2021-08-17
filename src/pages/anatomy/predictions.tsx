import React from 'react';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import Collapsible from '../../components/Collapsible';
import ImageViewer from '../../components/ImageViewer';
import { imgOpt } from '../../utils';
import textContent from '../../text-content/anatomy/predictions';


export default function AnatomyPredictions() {
  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <div className="center-col">
          <Title
            primaryColor="blue"
            title="Predictions"
            subtitle="Anatomy"
          />
          <div role="information">
            <InfoBox content={textContent.pageDescription} color="blue" />
          </div>
        </div>
        <div className="center-col"></div>
      </Filters>

      <DataContainer>
        <Collapsible title="Spatial organization of astrocytic endfeet">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.spatialOrganizationOfAstrocyticEndfeet}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/predictions/predictions_densities.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/predictions/predictions_densities.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Effect of astrocytic density on endfeet organization" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.effectOfAstrocyticDensityOnEndfeetOrganization}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/predictions/endfeet_organization.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/predictions/endfeet_organization.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Emerging NGV compositional hierarchy" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.emergingNgvCompositionalHierarchy}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/predictions/predictions_bars.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/predictions/predictions_bars.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Astrocyte numbers" className="mt-4">
          <div className="row">
            <div className="col-xs-12 col-sm-6">{textContent.astrocyteNumbers}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/predictions/predictions_astrocyte.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/predictions/predictions_astrocyte.png')}
              />
            </div>
          </div>
        </Collapsible>
      </DataContainer>
    </>
  );
};
