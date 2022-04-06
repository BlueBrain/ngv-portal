
const textContent = {
  pageDescriptionMeta: 'Blood flow is dynamically regulated by neurons and astrocytes. Neuronal activity is intimately linked with changes in metabolism and subsequent changes in regional blood flow. Blood flow is responsible for maintaining adequate delivery of oxygen and nutrients to the brain. In brief, we dissect how does biology ensure adequate flow throughout the total length of a large number of highly interconnected blood vessels in a rat somatosensory cortex. This results in vasodilation and in turn changes in metabolic state.',

  pageDescription: (<p>Blood flow is dynamically regulated by neurons and astrocytes. Neuronal activity is intimately linked with changes in metabolism and subsequent changes in regional blood flow. Blood flow is responsible for maintaining adequate delivery of oxygen and nutrients to the brain. In brief, we dissect how does biology ensure adequate flow throughout the total length of a large number of highly interconnected blood vessels in a rat somatosensory cortex. This results in vasodilation and in turn changes in metabolic state.</p>),

  vasculatureData: (<>
    <p>A digital reconstruction of a rat cerebral vasculature dataset was produced by Reichold et al. (2009). Cylindrical blocks of the rat’s somatosensory cortex vasculature were scanned using synchrotron-based X-ray tomographic imaging at the TOMCAT beamline (Swiss Light Source). High energy beams (20KeV) irradiated the tissue with a resolution of (700 nm), resulting in grayscale image stacks, which were segmented into binary images and subsequently converted into midlines (skeleton) using custom software for artifact removal and skeletonization.</p>
    <p>The dataset consists of point samples linked together with edges. Each point is acquired with a diameter which represents the width of the cross section. Two consecutive points constitute a segment in the morphology, and consecutive segments form a morphological section.</p>
  </>),

  radii: (<p>Astrocytes, play an important role in metabolism. Increased neuronal activity elevates calcium levels in astrocytes, which in turn releases vasoactive substances at the endfeet, causing changes in the diameter (vasodilation) of the associated blood vessel. Blood flow through the blood vessel (vasculature) network changes in response to altered diameters, meaning that delivery of nutrients (such as lactate, glucose, and oxygen) to support neuronal metabolism is in turn changed.</p>),

  radiiLegend: (<>
    <small>
      <strong>Figure: </strong> 
      Resmallresentation of realistic microvascular network samsmallle
      (A) Synthesized astrocytic morsmallhologies
      (B) One synthesized astrocytic morsmallhology with two endfeet
      (C) NGV ensemble.
    </small>
  </>),

  transferEndfeet: (<p>Astrocytes, a type of cell in the central nervous system, connect to the surface of the vasculature where they form astrocytic endfeet. Based on <a href="https://doi.org/10.1093/cercor/bhab254">Zisis et al. 2021</a>, we can place astrocytes within the vasculature where each astrocyte has two endfeet which connects to the blood vessels. We leverage the astrocytes morphology reconstruction from <a href="https://doi.org/10.1093/cercor/bhab254">Zisis et al. 2021</a> to obtain a list of endfoot positions on the vasculature.</p>),
};

export default textContent;
