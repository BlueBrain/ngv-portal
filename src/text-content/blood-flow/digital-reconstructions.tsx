
const textContent = {
  pageDescriptionMeta: 'Mathematical models of cerebral microcirculation are widely used in order to run hemodynamic simulations. These models imply to combine biophysical principles with data from medical imaging. For instance, data from synchrotron radiation based X-ray tomographic microscopy data of rat somatosensory cortex was used in Reichold (2009). These models have increasingly become an obvious field of research for cerebral circulation to get the whole NGV ensemble working together. This would enable a better understanding of the anatomical principles and geometric constraint, a better prediction of cerebral blood flow, a better characterization of metabolites exchanges from and to tissues, and this could deepen our knowledge of the mechanisms involved in the blood flow control.',

  pageDescription: (<p>
    Mathematical models of cerebral microcirculation are widely used in order to run hemodynamic simulations. These models imply to combine biophysical principles with data from medical imaging. For instance, data from synchrotron radiation based X-ray tomographic microscopy data of rat somatosensory cortex was used in <a 
    href="https://journals.sagepub.com/doi/10.1038/jcbfm.2009.58"
    target="_blank"
    rel="noopener noreferrer">Reichold (2009)</a>. These models have increasingly become an obvious field of research for cerebral circulation to get the whole NGV ensemble working together. This would enable a better understanding of the anatomical principles and geometric constraint, a better prediction of cerebral blood flow, a better characterization of metabolites exchanges from and to tissues, and this could deepen our knowledge of the mechanisms involved in the blood flow control.
  </p>),

  mathematicalFramework: (
    <>
      <p>
        The vasculature is composed by many interconnected vessels and each of them is represented by a tube with circular section A(t) = π r(t)^2, where r(t) is the radius. The vessel section A(t) can change over time due to the effect of transmural pressure and endfeet, but it is considered constant along the longitudinal axis.
      </p>
      <p>
        The blood is considered as an incompressible viscous fluid that flows inside a vessel. We define the blood velocity u(t, x) and the pressure p(t, x) as the average velocity and pressure values computed over the section A(t). Thanks to this assumption, the system can be considered one-dimensional, i.e. we only consider the longitudinal dimension x. Once the pressure is computed, we can retrieve the flux vector. We solve equations of our model at each time point under different boundary conditions and different values of vessels radii. In brief, our approach to compute boundary conditions can be described as follows (1) Select the entry nodes i.e. the nodes where the blood is injected (2) Define a model for the time dependent injected flow inside the entry nodes (3) Compute the exit flows i.e. the amount of blood leaving the vasculature from the exit nodes. 
      </p>
    </>
  ),

  mathematicalModelFigureLegend: (
    <small>
      <strong>Figure: </strong> 
      Schematic representation of realistic microvascular network sample. The vasculature network is represented by a graph, a collection of nodes and an ensemble of edges that connect pairs of nodes on which the endfeet are placed. Between 2 black circles, sections (where bifurcation start or end) are represented, while between 2 orange dashes, segment is highlighted. Equations to compute blood flow and pressure are solved at each time point and each vessels radii under different  boundary conditions. The blood pressure is computed on each node of the vasculature, while the flow is computed on each edge.
    </small>
  ),

  stochasticSimulation: (
    <>
      <p>
        We used an Ornstein Uhlenbeck (OU) process in order to model the dynamics of the radius of a vessel due to vasodilation. It is a stochastic process that always reverses to the resting state. We then introduce a reflecting boundary on the resting state such that the radius can never go below it. Since we decided to focus only on vasodilation, we introduced the reflecting barrier in order to prevent the process from becoming negative. The OU process is a common stochastic process, widely used in the literature and simple in terms of mathematical tractability. Furthermore, this is the only stochastic Gaussian process that is also Markovian and stationary.
      </p>
    </>
  ),

  stochasticSimulationFigureLegend: (
    <small>
      <strong>Figure: </strong> 
      Model calibration: in this model we have 2 parameters, sigma and kappa for every vessels. Kappa stands for speed of reversion to the RS, while square sigma stands for the variance of the noise. On the left, sample path of a Reflected OU process with T = 1, kappa = 5 and sigma = 4. On the right: comparison of the asymptotic OU and ROU distributions. We simulated 5000 ROU paths and created an histogram with the values of XT at T = 1.
    </small>
  ),
};

export default textContent;
