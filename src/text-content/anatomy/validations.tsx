
const textContent = {
  pageDescriptionMeta: 'To ensure biological fidelity, we validated that input constraints could be reproduced for each step in the circuit building process and compared structural measurements with corresponding values extracted from the literature and experimental data.',

  pageDescription: (<p>
    To ensure biological fidelity, we validated that input constraints could be reproduced
    for each step in the circuit building process and compared structural measurements with corresponding values
    extracted from the literature and experimental data.
  </p>),

  networkLevelValidation: {
    description: (<p>
      We validated that input constraints could be reproduced for each step in the circuit building process
      and compared structural measurements with corresponding values extracted
      from the literature and experimental data.
    </p>),

    density: {
      text: (<>
        <p>
          Astrocytes were placed according to the densities reported in <a
            href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0035169"
            target="_blank"
            rel="noopener noreferrer"
          >
            Appaix <i>et al.</i> (2012)
          </a>,
          measuring an average density of 12241 mm<sup>-3</sup>,
          ranging from 9367 mm<sup>-3</sup> to 21479 mm<sup>-3</sup> close to the pia.
          The NGV framework accurately reproduced the density distribution for the selected profile
        </p>
      </>),

      legend: (<>
        <small>
          <strong>Figure: </strong>
          (A) Astrocyte density histogram (orange) compared to the input density profile (gray).
          (B) Average circuit density (orange) compared to reported values (gray) for different animal ages.
        </small>
      </>),
    },

    dispersion: {
      text: (<>
        <p>
          Our placement algorithm reproduced the spacing between astrocytes, which results
          from their anatomically exclusive territories. We verified this orderly distribution
          using spatial analysis methods such as the pair correlation function and Ripley’s K-function.
        </p>
      </>),

      legend: (<>
        <small>
          <strong>Figure:</strong> Spatial analysis of the point patterns corresponding to astrocytic somata.
          (A) Pair correlation function.
          (B) Ripley’s K-function.
          (C) Distance distribution from each astrocytic soma to its closest neighbor,
          compared to the input profile (orange) from Lopez-Hidalgo et al. 2016.
        </small>
      </>),
    },

    radiusDistribution: {
      text: (<>
        <p>
          During placement, the radii of the astrocytic somata were sampled from a normal distribution,
          which was fitted on the experimental values of astrocyte soma radii found in a multitude of studies.
          Soma size is taken into account while being placed so that intersections of somata with other somata
          and the vasculature are eliminated.
        </p>
      </>),

      legend: (<>
        <small>
          <strong>Figure: </strong>
          (A) Synthesized somata radius histogram and
          (B) comparison of average soma radius with reported values (gray).
        </small>
      </>),
    },

    microdomainVolumes: {
      text: (<>
        <p>
          The NGV framework produced domain volumes that corresponded to juvenile astrocytic densities,
          capturing the magnitude of the measurements encountered in the literature.
        </p>
      </>),

      legend: (<>
        <small>
          <strong>Figure:</strong> NGV microdomains analysis and validation.
          (A) Volume distribution of the regular (gray) and overlapping (orange) tessellations.
          (B) Comparison of NGV microdomain volumes (orange) with literature sources.
          (C) Per layer microdomain volume distributions and their respective box plots (red).
          (D) Scaling relationship between average microdomain volume and average astrocyte density.
        </small>
      </>),
    },

    distanceOfAstrocyteToVasculature: {
      text: (<>
        <p>
          The shortest path length from the soma to the vasculature’s surface was measured to be 16 μm on average,
          which was in agreement with reported values (<a
            href="https://doi.org/10.3791/60225"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moye <i>et al.</i>, 2019
          </a>).
          The relation between the surface area and thickness of the endfeet geometries validated that they agreed
          with the relationship from the study of (<a
            href="https://doi.org/10.1016/j.pneurobio.2019.101696"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calì <i>et al.</i> (2019)
          </a>).
        </p>
      </>),

      figure: (<>
        <small>
          <strong>Figure:</strong> Validation of astrocytic endfeet processes.
          (A) Shortest path length of the endfeet perivascular processes from the surface of the astrocytic soma
          to the surface of the vasculature.
          (B) Comparison of the average path length in the NGV (salmon) to the values
          reported by Moye et al., 2019 (turquoise).
          (C) Relationship between endfeet surface areas and thicknesses in the NGV circuit (salmon)
          and in the work of Cali et al., 2020 (turquoise).
        </small>
      </>),
    },

    endfeetSurfaceMeshes: {
      text: (<>
        <p>
          Studies using chemical fixation for their tissues reported a 70% − 100% coverage of the vasculature
          by perivascular endfeet. However, Korogod et al., (2015) showed that chemical fixation induces swelling
          of the astrocytic compartment, leading to increased coverage. They reported 62.9 ± 1.5% vascular coverage
          by astrocytic endfeet  using anatomy-preserving tissue fixation.
          We reproduced a ~60% (Figure 4L) vascular coverage by pruning the meshes
          using a Gaussian surface area distribution with a mean of 225 μm2 (<a
            href="https://doi.org/10.1016/j.pneurobio.2019.101696"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calì <i>et al.</i>, 2019
          </a>).
        </p>
      </>),

      legend: (<>
        <small>
          <strong>Figure:</strong> Validation of astrocytic endfeet surface meshes.
          (A) Endfeet surface area distribution.
          (B) Cumulative distribution comparison between the resulting surface areas and the target ones.
          (C) Coverage percentage of the vasculature surface (turquoise) by the endfeet areas (salmon).
        </small>
      </>),
    },

    numberOfProcesses: {
      text: (<>
        <p>
          In the NGV circuit, the number of perivascular processes was constrained for juvenile rodents
          at 2 ± 1 processes. The number of primary processes in the NGV was measured as 8 ± 1 processes.
          We validated the spatial relationship between neurons and astrocytes, by measuring the distance
          to the closest neuronal soma. The distribution falls within the range of literature observations,
          that is from 5 µm to 30 µm for three types of inhibitory neurons  (<a
            href="https://doi.org/10.1002/glia.24044"
            target="_blank"
            rel="noopener noreferrer"
          >
            Refaeli <i>et al.</i>, 2020
          </a>).
        </p>
      </>),

      legend: (<>
        <small>
          <strong>Figure:</strong> Validation of astrocytic processes and association with neurons.
          (A) Average number of processes (primary and perisynaptic) per astrocyte
          for the NGV circuit (salmon) and literature sources (turquoise).
          (B) Histogram of the distances for each astrocytic soma to the closest neuronal soma.
        </small>
      </>),
    },
  },

  synthesizedCellValidation: {
    description: <p>
      We validated the synthesized astrocytes against the experimental reconstructions
      in terms of morphological features and branching topology.
    </p>,

    featureBased: {
      text: (<>
        <p>
          To validate the astrocytic component of the NGV circuit, we randomly selected
          six non-boundary synthesized astrocyte representatives from each layer. Morphometrics were extracted
          from these uniquely grown morphologies and were compared against those
          of the experimentally reconstructed astrocytes. The selection of morphometric features
          consisted of the number and length of sections, the section radial, path distances and branch orders,
          the remote bifurcation angles, and the segment radii and volumes.
        </p>
      </>),

      legend: (<>
        <small>
          <strong>Figure:</strong> Morphometric comparison between synthesized (orange)
          and experimental morphologies (blue).
        </small>
      </>),
    },

    topological: {
      text: (<>
        <p>
          The trees of both reconstructed and synthesized morphologies were converted into persistence diagrams
          and subsequently into persistence images. First, the topological distance
          between each pair in the group of experimental morphologies in order to determine the error baseline
          within the reconstructed population. Then the topological distance between the experimental
          and synthesized astrocytes for each layer was calculated. The synthesized trees exhibited smaller
          topological distance to the experimental cells compared to the topological distance
          within the experimental population.
        </p>
      </>),

      legend: (<>
        <small>
          <strong>Figure:</strong> Per layer persistence diagrams overlap between the synthesized
          and experimental astrocytes. The topological distance of each layer’s persistence diagram
          compared with the experimental (black continuous line) and its respective standard error (black dashed line).
          Path distance units are in microns.
        </small>
      </>),
    },
  },
};

export default textContent;
