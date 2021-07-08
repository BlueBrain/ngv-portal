import React from 'react';
import Image from 'next/image';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import Collapsible from '../../components/Collapsible';
import ImageViewer from '../../components/ImageViewer';
import { imgOpt } from '../../utils';


export default function GeometryValidations() {
  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <div className="center-col">
          <Title
            primaryColor="blue"
            title="Validations"
            subtitle="Geometry"
          />
          <div role="information">
            <InfoBox
              text="To ensure biological fidelity, we validated that input constraints could be reproduced for each step in the circuit building process and, compared structural measurements with corresponding values extracted from the literature and experimental data."
              color="blue"
            />
          </div>
        </div>
        <div className="center-col"></div>
      </Filters>

      <DataContainer>
        <Collapsible title="Network level validation with respect to literature data">
          <p>We validated that input constraints could be reproduced for each step in the circuit building process and compared structural measurements with corresponding values extracted from the literature and experimental data.</p>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">
              <h3>Density</h3>
              <strong>Figure legend:<br/></strong>
              <small>(A) Astrocyte density histogram (orange) compared to the input density profile (gray). (B) Average circuit density (orange) compared to reported values (gray) for different animal ages.</small>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_density.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_density.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">
              <h3>Dispersion</h3>
              <p>Spatial analysis of the point patterns corresponding to astrocytic somata. (A) Pair correlation function. (B) Ripley’s K-function. (C) Distance distribution from each astrocytic soma to its closest neighbor, compared to the input profile (orange) from Lopez-Hidalgo et al. 2016.</p>
            </div>
            <div className="col-xs-12 col-sm-6">

            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">
              <h3>Nearest neighbor distribution</h3>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/repulsion_function.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/repulsion_function.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">
              <h3>Radius distribution</h3>
              <strong>Figure legend:<br/></strong>
              <small>(A) Synthesized somata radius histogram and (B) comparison of average soma radius with reported values (gray)</small>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_radius.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_radius.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">
              <h3>Microdomains volumes</h3>
              <p>Microdomain volumes: NGV microdomains analysis and validation. </p>
              <strong>Figure legend:<br/></strong>
              <small>(A) Volume distribution of the regular (gray) and overlapping (orange) tessellations. (B) Comparison of NGV microdomain volumes (orange) with literature sources. (C) Per layer microdomain volume distributions and their repsective box plots (red). (D) Scaling relationship between average microdomain volume and average astrocyte density.</small>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_microdomains.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_microdomains.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">
              <h3>Distance of astrocytes to vasculature</h3>
              <p>Validation of astrocytic endfeet processes.</p>
              <strong>Figure legend:<br/></strong>
              <small>(A) Shortest path length of the endfeet perivascular processes from the surface of the astrocytic soma to the surface of the vasculature. (B) Comparison of the average path length in the NGV (salmon) to the values reported by Moye et al., 2019 (turqoise). (C) Relationship between endfeet surface areas and thicknesses in the NGV circuit (salmon) and in the work of Cali et al., 2020 (turquoise).</small>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_endfeet_paths.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_endfeet_paths.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">
              <h3>Endfeet areas/volumes</h3>
              <p>Validation of astrocytic endfeet surface meshes.</p>
              <small>(A) Endfeet surface area distribution. (B) Cumulative distribution comparison between the resulting surface areas and the target ones. (C) Coverage percentage of the vasculature surface (turquoise) by the endfeet areas (salmon).</small>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_endfeet_areas.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_endfeet_areas.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">
              <h3>Number of processes</h3>
              <p>Validation of astrocytic processes and association with neurons. (A) Average number of processes (primary and perisynaptic) per astrocyte for the NGV circuit (salmon) and literature sources (turquoise). (B) Histogram of the distances for each astrocytic soma to the closest neuronal soma.</p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_misc.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_misc.png')}
              />
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Synthesized Cell Validation" className="mt-4">
          <p>We validated the synthesized astrocytes against the experimental reconstructions in terms of morphological features and branching topology.</p>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">
              <h3>Feature based</h3>
              <p>Morphometric comparison between synthesized (orange) and experimental morphologies (blue).</p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ImageViewer
                src="/ngv-portal/assets/images/validations/validation_circuit_morphometrics.png"
                thumbnailSrc={imgOpt('/ngv-portal/assets/images/validations/validation_circuit_morphometrics.png')}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6">
              <h3>Topological</h3>
              <p>The topological distance of each layer’s persistence diagram compared to the bio (black continuous line) and its respective standard error (black dashed line). (G, H) Validation of cumulative process surface area and volume as a function of the radial distance from the soma between circuit astrocytes (orange) and bio (blue)</p>
            </div>
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
