
const textContent = {
  pageDescriptionMeta: 'Blood flow validation are of two types, standalone validation of spatial structure of the flow on the vasculature w.r.t biological measurements, and validation of flow response under time dependent vasodilatation from astrocytes activities.',

  pageDescription: (<p>Blood flow validation are of two types, standalone validation of spatial structure of the flow on the vasculature w.r.t biological measurements, and validation of flow response under time dependent vasodilatation from astrocytes activities.</p>),

  introductionTextSection1: (<div>
    We validated our findings by conducting a rigorous comparison of our simulation outputs with two commonly referenced entities prevalent in the existing literature and experimental data: blood flow and blood velocity.
  </div>),

  figure1Title: (<>
    <p>We consider only the blood vessels in the internal part of the vasculature. In this way, we can minimize the effect due to the boundary conditions, and benefit from the contributions from all nodes in the vasculature</p>
    <p>To fit with the method used in the literature, we do average values of simulated flow/velocity by averaging over all segments throughout the entire time series. These simulation values are represented by the blue boxplots.</p>    
    <p>Square markers within the scatter plots represent the values reported in previous studies <a 
    href="https://journals.sagepub.com/doi/10.1161/01.res.75.1.55"
    target="_blank"
    rel="noopener noreferrer">Villringer et al.</a> and <a 
    href="https://journals.sagepub.com/doi/10.1177/0271678X16631560"
    target="_blank"
    rel="noopener noreferrer">Gutiérrez-Jiménez et al.</a>. These markers were color-coded according to the animal species for which these parameters were computed. Gray rectangles depict the extent of flow and velocity values observed for rats where no average data (see <a 
    href="https://journals.sagepub.com/doi/10.1038/nn.3278"
    target="_blank"
    rel="noopener noreferrer">Shih et al.</a>) were available in the literature.</p>
  </>),

  figure1ImgLegend: (
    <small>
      <strong>Figure: </strong>
      Validation of our simulation results against existing literature data. Blood flow (A), expressed in units of <span><em>μ</em><em>m</em><sup>3</sup>.<em>s</em><sup>−1</sup></span>, and Blood velocity (B), expressed in units of <span><em>μ</em><em>m</em>.<em>s</em><sup>−1</sup></span> were evaluated for both capillaries and large vessels.
    </small>
  ),

  figure2Title: (<p>
    Insets offer clearer views of the distribution characteristics in the blood flow distribution for capillaries ranging in diameter from 4 to 6 μm.
  </p>),

  figure2ImgLegend: (
    <small>
      <strong>Figure: </strong>
      (A) Blood flow distribution for capillaries ranging in diameter from 4 to 6 μm, (B) Blood flow distribution for large vessels depicting a diameter <span>≥</span> 14 μm.
    </small>
  ),

  figure3Title: (<p>The zoomed-in portion offers a clearer view of the distribution's characteristics in the blood flow distribution for large vessels ranging in diameter superior to 14 μm.</p>),

  figure3ImgLegend: (
    <small>
      <strong>Figure: </strong>
      (A) Velocity distribution for capillaries ranging in diameter from 4 to 6 μm, (B) Velocity distribution for large vessels depicting a diameter <span>≥</span> 14 μm. The zoomed-in portion offers a clearer view of the distribution's characteristics.
    </small>
  ),

  introductionTextSection2: (<div>
      We present a refined validation of the simulation outputs, focusing on an in-depth analysis of flow values in capillaries categorized by their diameters.
  </div>),

  figure4ImgLegend: (
    <small>
      <strong>Figure: </strong>
      Blood flow distribution for capillary diameter (A) 1-2 μm, (B) 2-3 μm.
    </small>
  ),

  figure5ImgLegend: (
    <small>
      <strong>Figure: </strong>
      Blood flow distribution for capillary diameter (A) 3-4 μm, (B) 4-5 μm.
    </small>
  ),

  figure6ImgLegend: (
    <small>
      <strong>Figure: </strong>
      Blood flow distribution for capillary diameter (A) 5-6 μm, (B) 6-7 μm.
    </small>
  ),

  openSourcingDescription: (
    <>
      <p>
        The source code is available for public access on GitHub at <a 
        href="https://github.com/BlueBrain/AstroVascPy"
        target="_blank"
        rel="noopener noreferrer">https://github.com/BlueBrain/AstroVascPy</a>. This Python-based package, AstroVascPy, has been designed for scalability across various vascular network datasets represented as point graphs.
      </p>
      <p>
        It incorporates the influence of astrocytic endfeet on blood vessel radii. Notably, this tool can effectively replicate the dynamic changes in vessel radius resulting from vasodilation in diverse vascular networks.
      </p>
    </>
  )
};

export default textContent;
