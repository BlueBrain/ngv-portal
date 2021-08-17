import React from 'react';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import Collapsible from '../../components/Collapsible';
import ImageViewer from '../../components/ImageViewer';
import { imgOpt } from '../../utils';
import textContent from '../../text-content/anatomy/validations';


export default function AnatomyValidations() {
  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <div className="center-col">
          <Title
            primaryColor="blue"
            title="Validations"
            subtitle="Anatomy"
          />
          <div role="information">
            <InfoBox content={textContent.pageDescription} color="blue" />
          </div>
        </div>
        <div className="center-col"></div>
      </Filters>

      <DataContainer>
        <Collapsible title="Network level validation with respect to literature data">
          {textContent.networkLevelValidation.description}

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">{textContent.networkLevelValidation.density}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_density.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_density.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">{textContent.networkLevelValidation.dispersion}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/repulsion_function.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/repulsion_function.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">{textContent.networkLevelValidation.radiusDistribution}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_radius.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_radius.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">{textContent.networkLevelValidation.microdomainVolumes}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_microdomains.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_microdomains.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">{textContent.networkLevelValidation.distanceOfAstrocyteToVasculature}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_endfeet_paths.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_endfeet_paths.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">{textContent.networkLevelValidation.endfeetSurfaceMeshes}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_endfeet_areas.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_endfeet_areas.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">{textContent.networkLevelValidation.numberOfProcesses}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_misc.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_misc.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Synthesized Cell Validation" className="mt-4">
          {textContent.synthesizedCellValidation.description}

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">{textContent.synthesizedCellValidation.featureBased}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_circuit_morphometrics.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_circuit_morphometrics.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">{textContent.synthesizedCellValidation.topological}</div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_circuit_topologies.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_circuit_topologies.png')}
              />
            </div>
          </div>
        </Collapsible>
      </DataContainer>
    </>
  );
}
