import React from 'react';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import Collapsible from '../../components/Collapsible';
import ImageViewer from '../../components/ImageViewer';
import { imgOpt } from '../../utils';


export default function GeometryPredictions() {
  return (
    <>
      <Filters primaryColor="blue" backgroundAlt hasData={true}>
        <div className="center-col">
          <Title
            primaryColor="blue"
            title="Predictions"
            subtitle="Geometry"
          />
          <div role="information">
            <InfoBox
              text="The digital reconstruction of the NGV provides an array of predictions across its many levels of organization. These predictions provide insights to link underlying structure with function. In addition, predictions are also a means to validate the component models of the NGV model and identify missing data that could guide targeted experiments."
              color="blue"
            />
          </div>
        </div>
        <div className="center-col"></div>
      </Filters>

      <DataContainer>
        <Collapsible title="Spatial organization of astrocytic endfeet">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <p>We analyzed the co-localization of astrocytic somata, large vessels, capillaries, and endfeet targets on the vasculature’s surface in search of the dominating element in the endfeet organization.</p>
              <p>The evenly spaced distribution of astrocytic somata throughout the neuropil allows for the generation of vascular endfeet projections, which extend to the vasculature from their local environment. The space-filling organization of the vasculature in combination with the astrocytic somata spacing allows for the uniform provision of glucose and nutrient provision to the neurons (Magistretti and Allaman, 2018; Magistretti and Pellerin, 1996), which co-occupy the same space, and for an efficient recycling of water, neurotransmitters, toxic molecules and ions (e.g. K + clearance) (Abbott et al., 2010; Bellot-Saez et al., 2017).</p>
              <p>Figure: <br/> Spatial kernel density estimate plots of large vessels (A)m capillaries (B), somata coordinates (C) and endfeet targets on the surface of the vasculature (D). (E) Homogeneous distribution of endfeet targets in Layer I. (F) A 30 μm slice in layer I of endfeet targets (black) and the vasculature mesh points (red).</p>
            </div>
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
            <div className="col-xs-12 col-sm-6">
              <p>The NGV model exploration was extended to the generation of multiple circuits of increasing densities to investigate the astrocyte numbers effect on the endfeet connectivity and microdomain packing.</p>
              <p>Figure <br/> Effect of astrocyte density increase on the feasibility of perivascular processes in the same bounding space. The red data points correspond to the reference circuit with the biological parameters. <br/> As the astrocytic density increases the total number of endfeet increases sublinearly with respect to the total number of astrocytes (A), which is also reflected in the per astrocyte number of endfeet (B) and leads to smaller distances and domain extents (C). As the number of astrocytes increases, astrocytes with no endfeet increase in number (D), their distance to the closest vessel becomes smaller (E) and because of the packing there is a bias for smaller soma sizes (F).</p>
            </div>
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
            <div className="col-xs-12 col-sm-6">
              <p>We extracted the total lengths, surface areas, and volumes of the segments of neurons, astrocytes, and the vasculature to explore the composition of geometrical features in the neocortical space and their relationship.</p>
              <p>The data suggested there is a hierarchy in cortical composition, the origin of which has been theorized in terms of length (Klyachko and Stevens, 2003; Wen et al., 2009), conduction delay (Budd et al., 2010), volume or/and spine economy (Karbowski, 2015) minimization. Most importantly, I have shown here that an in-silico circuit of the NGV architecture can indeed be used to investigate questions concernin</p>
              <p>Figure <br/> Total process (A) wiring, (B) surface areas and (C) volumes per layer of neurons (blue), astrocytes (green) and vasculature (red).</p>
            </div>
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
            <div className="col-xs-12 col-sm-6">
              <p>Focusing around the central player of the NGV, the astrocyte, we extracted connectivity statistics, opening a window to the NGV network organization.</p>
              <p>Figure <br/> Quantification of the astrocytic interfaces. Histograms of per-astrocyte total endfeet area (A), volume (B), connected neurons (C), connected synapses (D), astrocytic neighbors (E) and gap junctions (F). (G-I) Neuronal processes total lengths, areas and volumes per microdomain and across the cortical depth. Purple line represents the average and the gray area the respective standard deviation.</p>
            </div>
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
}
