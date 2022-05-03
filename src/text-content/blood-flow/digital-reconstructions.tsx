
const textContent = {
  pageDescriptionMeta: 'Mathematical models of cerebral microcirculation are widely used in order to run hemodynamic simulations. These models imply to combine biophysical principles with data from medical imaging. For instance, data from synchrotron radiation based X-ray tomographic microscopy data of rat somatosensory cortex was used in Reichold (2009). These models have increasingly become an obvious field of research for cerebral circulation to get the whole NGV ensemble working together. This would enable a better understanding of the anatomical principles and geometric constraint, a better prediction of cerebral blood flow and, a better characterization of metabolites exchanges from and to tissues, and this could deepen our knowledge of the mechanisms involved in the blood flow control.',

  pageDescription: (<p>
    Mathematical models of cerebral microcirculation are widely used in order to run hemodynamic simulations. These models imply to combine biophysical principles with data from medical imaging. For instance, data from synchrotron radiation based X-ray tomographic microscopy data of rat somatosensory cortex was used in <a 
    href="https://journals.sagepub.com/doi/10.1038/jcbfm.2009.58"
    target="_blank"
    rel="noopener noreferrer">Reichold (2009)</a>. These models have increasingly become an obvious field of research for cerebral circulation to get the whole NGV ensemble working together. This would enable a better understanding of the anatomical principles and geometric constraint, a better prediction of cerebral blood flow and, a better characterization of metabolites exchanges from and to tissues, and this could deepen our knowledge of the mechanisms involved in the blood flow control.
  </p>),

  mathematicalModelingAndSimulationFlowAndPressure: (
    <>
      <p>
        The blood flow is considered here as an incompressible viscous fluid modeled by the incompressible Euler equation with deformable walls. In this model, the independent variables are blood pressure, blood flow and area, closed by a linear tube law parametrized by the compliance of the vessels. This in order to find the boundary conditions by using the frequency solution. In this case, the vessel’s diameter depends linearly on the blood flow and blood pressure. If there is a non-linear regime, a static simulation is performed. Nevertheless, in terms of static solution we use for simulation, there is no compliance.
      </p>
      <p>
        This model can be linearized to yield a wave equation for the blood pressure, from which the blood flow can be deduced. One of the simplest ways to solve a linear equation is by Fourier transform, giving explicit solutions on each edge (section), with two boundary conditions to be determined by imposing conservation of blood flow and continuity of blood pressure at each node (branching point). These boundary conditions can be written in terms of a node to node matrix, whose inverse is the transfer function of the vasculature between any two branching points.
      </p>
    </>
  ),

  mathematicalModelFigureLegend: (
    <small>
      <strong>Figure: </strong> 
      Modeling blood flow in realistic vascular network:  equations solved for each section of the vasculature such as this section with a length L, a resistance R, a blood density \rho and a blood viscosity \eta.  A minimum of 3 variables should be taken into account: the area,  the pressure (P) and the flow (Q). Vascular network is represented by a graph, a collection of  nodes and an ensemble of edges that connect pairs of nodes. Between 2 black circles, sections are represented, while between 2 orange dashes, segment is highlighted.
    </small>
  )
};

export default textContent;
