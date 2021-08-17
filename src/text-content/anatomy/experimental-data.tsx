
const textContent = {
  pageDescription: (<p>
    The NGV digital reconstruction was built from sparse data distributed across numerous studies.
    The data collection was performed either in the form of constraints and model parameters
    extracted from literature measurements and observations or experimentally reconstructed datasets.
  </p>),
  emData: (<p>
    This data was collected by electron microscopy from the somatosensory cortex of P14 rat as per Cali et al 2019.

    Image stacks of astrocytic morphologies from P14 rats were provided by the laboratory of
    Prof. Pierre Magistretti (King Abdullah University of Science and Technology).
    They were extracted using high-resolution serial block-face imaging,
    capturing the nanoscale structure of astrocytes with a 20 nm resolution (<a
      href="https://doi.org/10.1016/j.pneurobio.2019.101696"
      target="_blank"
      rel="noopener noreferrer"
    >
      Calì et al. 2019
    </a>).
  </p>),
  extractedMeshes: (<p>
    A framework, called Ultraliser, is developed to create high fidelity, optimized and watertight mesh models
    of the NGV data that were, either obtained from the EM stacks or reconstructed by other meshing tools
    that cannot create watertight meshes. This framework was then used to generate polygonal mesh models
    of all the objects that were produced by Cali et al 2019, including four neurons, four astrocytes and their nuclei,
    mitochondria and endoplasmic reticula and two vasculature parts.
  </p>),
  skeletonizedExpMorphs: (<p>
    The skeletonization process transforms surface mesh geometries into cell morphologies.
    To achieve this we used constrained mean curvature flow (<a
      href="https://doi.org/10.1111/j.1467-8659.2012.03178.x"
      target="_blank"
      rel="noopener noreferrer"
    >
      Tagliasacchi et al., 2012
    </a>),
    which collapsed the surface mesh geometry into a skeletal structure. The morphologies consist of points,
    connected via edges representing the midlines of the surface mesh.
    Cross-sectional information about the volume and surface area
    are stored at each point of the skeletonized morphology.
  </p>),
  vasculatureData: (<>
    <p>
      A digital reconstruction of a rat cerebral vasculature dataset was produced by <a
        href="https://doi.org/10.1038/jcbfm.2009.58"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reichold et al. (2009)
      </a>.
      Cylindrical blocks of the rat’s somatosensory cortex vasculature were scanned using
      synchrotron-based X-ray tomographic imaging at the TOMCAT beamline (Swiss Light Source).
      High energy beams (20KeV) irradiated the tissue with a resolution of (700 nm),
      resulting in grayscale image stacks, which were segmented into binary images and subsequently converted
      into midlines (skeleton) using custom software for artifact removal and skeletonization.
    </p>
    <p>
      The dataset consists of point samples linked together with edges. Each point is acquired with a diameter
      which represents the width of the cross section. Two consecutive points constitute a segment in the morphology,
      and consecutive segments form a morphological section.
    </p>
  </>),
};

export default textContent;
