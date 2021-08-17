
const textContent = {
  pageDescription: <p>
    The digital reconstruction of the NGV provides an array of predictions
    across its many levels of organization. These predictions provide insights to link underlying structure
    with function. In addition, predictions are also a means to validate
    the component models of the NGV model and identify missing data that could guide targeted experiments.
  </p>,

  spatialOrganizationOfAstrocyticEndfeet: (<>
    <p>
      We analyzed the co-localization of astrocytic somata, large vessels, capillaries, and endfeet targets
      on the vasculature’s surface in search of the dominating element in the endfeet organization.
    </p>
    <p>
      The evenly spaced distribution of astrocytic somata throughout the neuropil allows for the generation
      of vascular endfeet projections, which extend to the vasculature from their local environment.
      The space-filling organization of the vasculature in combination with the astrocytic somata spacing
      allows for the uniform provision of glucose and nutrient provision to the neurons (<a
        href="https://doi.org/10.1038/nrn.2018.19"
        target="_blank"
        rel="noopener noreferrer"
      >
        Magistretti and Allaman, 2018
      </a>; <a
        href="https://doi.org/10.1093/cercor/6.1.50"
        target="_blank"
        rel="noopener noreferrer"
      >
        Magistretti and Pellerin, 1996
      </a>),
      which co-occupy the same space, and for an efficient recycling of water, neurotransmitters,
      toxic molecules and ions (e.g. K + clearance) (<a
        href="https://doi.org/10.1016/j.nbd.2009.07.030"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abbott et al., 2010
      </a>; <a
        href="https://doi.org/10.1016/j.neubiorev.2017.03.002"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bellot-Saez et al., 2017
      </a>).
    </p>
    <strong>Figure legend:<br/></strong>
    <small>
      Spatial kernel density estimate plots of large vessels
      (A)m capillaries
      (B), somata coordinates
      (C) and endfeet targets on the surface of the vasculature
      (D). (E) Homogeneous distribution of endfeet targets in Layer I.
      (F) A 30 μm slice in layer I of endfeet targets (black) and the vasculature mesh points (red).
    </small>
  </>),

  effectOfAstrocyticDensityOnEndfeetOrganization: (<>
    <p>
      To further understand the implication of astrocytic density in endfeet organization and synapse encapsulation,
      we generated multiple circuit realizations of increasing astrocyte densities up to half a million astrocytes,
      with identical parameters and constraints. We found that as the total number of astrocytes increased,
      their overall extent shrank due to their tight packing, restricting their access to vascular sites.
      The higher astrocytic numbers did not compensate for the drop in endfeet appositions due
      to the tight packing of domains that prevented astrocytes from projecting to the vasculature.
      This shrinking effect due to contact spacing also resulted in a drastic drop in the number of synapses
      encapsulated by a single astrocytic domain. This would most likely disrupt the ability of astrocytes
      to integrate synaptic signals, resulting in altered spatiotemporal signaling. In contrast to neurons,
      astrocytic density varies little in different species and animal ages. Thus, our experiments indicated
      that the contact spacing behavior, which gives rise to anatomically exclusive domains,
      acts as a global constraint for the astrocytes’ morphological steady state,
      which is reached at one month of age in rodents. In addition, for the morphological domain
      to include the vascular sites within reach, a specific range of spacing is required,
      which depends on the inter-vessel distance. Therefore, the astrocyte’s role in providing trophic support
      and modulating synaptic signaling polarizes its morphology and constrains its location
      to maximize the connections from the vasculature to neurons.
    </p>
    <strong>Figure legend:<br/></strong>
    <small>
      Effect of astrocytic proliferation on the feasibility of perivascular processes in the same bounding space.
      The red data points correspond to the reference circuit with the biological parameters.
      (A) Increasing the astrocytic density resulted in an increase in the endfeet numbers.
      (B) The number of endfeet per astrocyte decreased despite their total numbers.
      (C) The denser packing resulted in smaller distances to the vessels and domain extents.
      (D) Classifying the astrocytes into astrocytes with and without endfeet we measured
      that as the number of astrocytes increased, astrocytes with no endfeet increased in number,
      (E) their distance to the closest vessel became smaller,
      (F) and because of the packing, there is a bias for smaller soma sizes.
      (G) The increase in astrocytic density within the same volume results in a lower percentage
      of encapsulated synapses compared to the reference circuit.
      (H) Relationship between endfeet and percentage of encapsulated synapses per astrocyte,
      which is a consequence of the shrinking of astrocytic domains
      (I) as density increases.
    </small>
  </>),

  emergingNgvCompositionalHierarchy: (<>
    <p>
      Delving deeper into the NGV quantification, we extracted per layer lengths, surface areas,
      and volumes of neuronal, astrocytic and vascular segments. Compared to reported biological numbers,
      the volume fractions of neuronal processes were smaller than the values reported in the literature
      due to the missing afferent fibers that reach the circuit from outside. Also, the lower average density
      of the P14 rat neuropil combined with the partially ramified morphologies resulted in a volume occupancy
      that was 6% lower than reported values for adult animals. The data suggested
      there is a hierarchy in cortical composition, the origin of which has been theorized in terms of length,
      conduction delay, volume or/and spine economy minimization.
    </p>
    <strong>Figure legend:<br/></strong>
    <small>
      Total process
      (A) wiring,
      (B) surface areas and
      (C) volumes per layer of neurons (blue), astrocytes (green) and vasculature (red).
    </small>
  </>),

  astrocyteNumbers: (<>
    <p>
      Focusing around the central player of the NGV, the astrocyte, we extracted connectivity statistics,
      opening a window to the NGV network organization. We showed that an in silico circuit of the NGV architecture
      could indeed be used to simultaneously quantify both compositional (densities, wiring, surface areas, and volume)
      and organizational (connectivities, distance distributions, correlations) aspects of its entities,
      as well as to investigate questions concerning the intricacies of cortical composition
      and their relation to computational capacity.
    </p>
    <strong>Figure legend:<br/></strong>
    <small>
      Quantification of the astrocytic interfaces.
      Histograms of per-astrocyte total endfeet area (A),
      volume (B),
      connected neurons (C),
      connected synapses (D),
      astrocytic neighbors (E) and
      gap junctions (F).
      (G-I) Neuronal processes total lengths, areas and volumes per microdomain and across the cortical depth.
      Purple line represents the average and the gray area the respective standard deviation.
    </small>
  </>),
};

export default textContent;
