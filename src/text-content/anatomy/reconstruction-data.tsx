
const textContent = {
  pageDescriptionMeta: 'The NGV anatomy model is reconstructed using the NGV circuit building framework, written in Python, using a component-based design. There are three main datasets in the NGV digital reconstruction: the neuronal, glial, and vascular datasets linked together with pairwise connectivities.',

  pageDescription: (<p>
    The NGV anatomy model is reconstructed using the NGV circuit building framework, written in Python,
    using a component-based design. A component is defined as a standalone processing
    step with strictly-defined inputs and outputs. The execution of a component may depend on the output files
    of more than one other components. This relationship between components results
    in an acyclic graph of dependencies (DAG), which is managed by the Snakemake workflow engine (<a
      href="https://doi.org/10.1093/bioinformatics/bts480"
      target="_blank"
      rel="noopener noreferrer"
    >
      Köster and Rahmann, 2012
    </a>).
    <br/>
    <br/>
    There are three main datasets in the NGV digital reconstruction: the neuronal, glial, and vascular datasets
    linked together with pairwise connectivities.
    The neuronal circuit was generated using the pipeline published in <a
      href="https://doi.org/10.1016/j.cell.2015.09.029"
      target="_blank"
      rel="noopener noreferrer"
    >
      Markram <i>et al.</i>, 2015
    </a>.
    Protoplasmic astrocytes were placed and grown in the space populated by the vasculature and neurons.
    Their processes reached the vascular surface and linked with neuronal synapses.
    A total of 14,402 astrocytes occupied the bounding region, co-localized with 88,541 neurons
    and 1.37 m of vasculature wiring. The central microcircuit consisted of 15,888 neurons, 2,469 astrocytes,
    and 0.23 m of the vasculature, occupying a volume of 0.2 mm<sup>3</sup>.
  </p>),

  finalReconstructions: (<p>
    The movie shows the three main datasets that comprise the NGV, neurons, protoplasmic astrocytes
    and the microvasculature. In addition, it shows the steps of the building process
    from the placement of the astrocytic somata to the morphology generation.
  </p>),

  neuronalCircuit: (<p>
    Neuronal neocortical circuits of the somatosensory cortex of the juvenile rat
    were algorithmically generated based on the circuit building framework that was previously published
    by <a
      href="https://doi.org/10.1016/j.cell.2015.09.029"
      target="_blank"
      rel="noopener noreferrer"
    >
      Markram <i>et al.</i> (2015)
    </a>.
    In this work the input neocortical mesocircuit consisted of a central microcircuit,
    occupying a volume of 0.28 mm<sup>3</sup>, with 23,590 neurons surrounded by
    six satellite microcircuits of 139,992 neurons in total. The overlapping arbors of neuronal morphologies
    formed ~8 million connections with ~37 million synapses, constituting the basis of the neuronal component
    of the NGV networks and providing the synaptic locations that are required from the NGV connectome.
  </p>),

  vasculatureSurfaceMesh: {
    text: (<>
      <p>
        Although most of the steps in the circuit building pipeline use the skeletonized representation
        of the cerebral microvasculature, the generation of endfeet appositions
        on the surface of the vasculature requires a more detailed representation of the surface geometry.
        Thus, starting from the skeletonized dataset we reconstructed a triangular discretization
        of the surface geometry with variable resolution. The surface mesh was generated based on
        implicit structures, known as metaobjects (<a
          href="https://doi.org/10.1093/bioinformatics/btaa461"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abdellah <i>et al.</i>, 2020
        </a>, <a
          href="http://dx.doi.org/10.2312/VisSym/VisSym04/311-320"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oeltze & Preim, 2004
        </a>)
        which allowed the creation of highly-detailed meshes of vasculature datasets (Figure D-F).
      </p>
    </>),

    legend: (<>
      <small>
        <strong>Figure:</strong> Vasculature meshing.
        (A) The vasculature dataset consists of points with a diameter linked by edges.
        (B) Two consecutive points linked by an edge are defined as a segment.
        (C) A chain of consecutive points between two forking points is defined as a section.
        (D) Generated surface mesh with overlaid triangles. (E-F) Original vasculature dataset mesh.
      </small>
    </>),
  },

  astrocyticPositionsWithoutCollision: {
    text: (<>
    <p>
      We first placed astrocytic somata in space, matching the experimental distributions of cell density
      and dispersion. Previous placement algorithms placed cells with respect to their density
      (across layers and brain regions). However, astrocytic spacing results in a spacing
      that is not uniform and depends on animal species and age. Therefore, in the NGV model
      we distributed somata taking into account both the astrocytic density but also the distances between them.
      Moreover, the astrocytic somata were placed without colliding with the vascular geometry.
    </p>
  </>),
  legend: (
    <>
      <small>
        <strong>Figure:</strong> Illustrations of the somata distribution in the NGV circuit.
        (A) Illustration of vasculature mesh (red) and astrocytic somata (turquoise).
        (B) Evenly distributed astrocytic somata, unaffected by vasculature geometry.
        (C) Neuronal somata convex hulls (blue) restrict astrocytes (green) from being placed
        according to their densities and distancing.
      </small>
    </>
    )
  },
  microdomains: {
    text: (<>
      <p>
        The morphologies of protoplasmic astrocytes reach out and contact neighboring astrocytes.
        As they grow one against the other they tile the cortical space forming anatomically exclusive regions.
      </p>
      <p>
        We modeled this organization as polygons, which we generated using mathematical tessellations.
        Each region represented the accessible space for each astrocyte.
      </p>
    </>),

    legend: (<>
      <small>
        <strong>Figure:</strong> Illustrations of the microdomains in the NGV circuit.
        (A) Cross section of the microdomain tessellation geometry without other entities.
        (B) Overlay of microdomain edges with astrocytic somata (turquoise) and vasculature (red).
        (C) Example of microdomain neighborhood, populated with random trees.
      </small>
    </>),
  },

  connectivities: {
    text: (<>
      <p>
        We reconstructed three types of connectivities:
        <ul>
          <li>Gliovascular connections (astrocyte-vasculature endfoot)</li>
          <li>Neuroglial connections (astrocyte-neuron tripartite synapse)</li>
          <li>Glial connections (astrocyte-astrocyte gap junctions).</li>
        </ul>
      </p>
      <p>
        For their establishment, the microdomain tessellation determined the available region of each astrocyte.
        Therefore, the vasculature sites and the synapses each astrocyte can project to, are limited to its interior.
      </p>
      <p>
        To establish the connectivity between astrocytes and the vasculature, we first distributed potential targets
        on the vasculature graph and then determined which fraction of the resulting point cloud was included in
        each microdomain polygon. Based on literature data, each astrocyte was assigned a number of endfeet,
        ranging from 1 to 5 and the endfeet sites were selected according to the following observations
        from experimental astrocyte reconstructions:
        <ul>
          <li>Endfeet processes minimize their distance to the vascular site</li>
          <li>Maximize the distance to nearby endfeet sites and target different branches</li>
        </ul>
      </p>
      <p>
        Similarly, neuroglial connectivity was determined by first finding the synapses within each microdomain.
        Then a 60% random subset was selected to match the experimental observations.
      </p>
      <p>
        Finally, gap junctions between neighboring astrocytes were determined as touches between
        the colliding morphologies of the grown astrocytes, using the process of touch-detection
        as presented in (<a
          href="https://doi.org/10.1016/j.cell.2015.09.029"
          target="_blank"
          rel="noopener noreferrer"
        >
          Markram <i>et al.</i>, 2015
        </a>).
      </p>
    </>),

    figure: (<>
      <small>
        <strong>Figure:</strong> Illustrations of the connectivity in the NGV circuit.
        (A) Astrocytic somata (turquoise), vasculature (red) and biased random walks (green)
        connecting the somata to the surface targets on the vasculature.
        (B) Connectivity to potential targets distributed on the vasculature and on a single artery
        (C). (D) Glial-glial connections (green) between an astrocyte and all its neighbors.
        (E) Synapses (red) that are contained into a single microdomain, surrounded by its neighbors.
      </small>
    </>),
  },

  endfeetSurfaceReconstruction: {
    text: (<>
      <p>
        The surface geometry of the endfeet wrapping around the vasculature was generated from the positions
        on the surface of the vasculature, which have previously been assigned in the gliovascular connectivity step.
        From each endfoot target site, the endfeet area was grown isotropically on the vessel surface
        until it collided with another endfoot area or reached a maximum radius.
      </p>
      <p>
        The growth is considered competitive because all the endfeet are growing simultaneously restricting the area
        they are grown into, from neighboring endfeet. After the simulation has converged we pruned
        the overshoot surfaces so that they matched the experimental distribution of endfeet areas.
      </p>
    </>),

    legend: (<>
      <small>
        <strong>Figure:</strong> Example of endfeet area reconstruction.
        Perivascular endfeet (blue) wrap around the microvasculature (red).
      </small>
    </>),
  },

  morphologicalSynthesisOfAstrocytes: {
    text: (<>
      <p>
        The final stage was to grow stochastic astroglial morphologies, constrained by the astrocytic data
        produced in the previous steps. To make this possible, we developed a novel algorithm
        that combined topological branching and space colonization using neuronal synapses as attraction seeds.
        This allowed us to grow in-silico,  unique astrocytic morphologies that were embedded in space,
        projecting to the vasculature forming endfeet and encapsulating the synapses in their microdomains.
      </p>
      <p>
        To launch the astrocyte analysis Jupyter notebook in your browser using MyBinder, click the badge &nbsp;
        <a
          href="https://mybinder.org/v2/gh/BlueBrain/NeuroM/HEAD?filepath=tutorial%2Fastrocyte_analysis.ipynb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://mybinder.org/badge_logo.svg"
            alt="MyBinder link for astrocyte analysis notebook"
          />
        </a>
      </p>
    </>),

    legend: (<>
      <small>
        <strong>Figure:</strong> Illustrations of the circuit with the grown morphologies.
        (A) Overview of the astrocytic circuit.
        (B) A group of five astrocytes with their endfeet.
        (C) Closeup of a single astrocytic morphology and its endfoot on the surface of the vasculature.
      </small>
    </>),
  },
};

export default textContent;
