![NGV illustration](./public/assets/images/backgrounds/home-page/1_ngv_background.jpg)

# NGV Portal

## About

The NGV Portal showcases the digital modeling of the Neuro-Glia-Vasculature system performed within the Blue Brain Project. The process is divided into three main blocks:

1. Anatomical reconstruction (Anatomy)
2. Metabolism
3. Blood flow (which includes calcium-regulated modulation of vasculature by the astrocytic endfeet).

Each type of modeling is developed in the context of the existing Blue Brain microcircuit. The microcircuit is a large-scale electrical model of cortex, which includes well-characterized types of neurons at their known densities and connections.

### Anatomical reconstruction

Understanding the biophysical, physiological, and molecular interactions in this Neuro-Glia-Vascular system (NGV) and how they support brain function is severely restricted by the lack of detailed cytoarchitecture (cellular structure of a biological tissue).

To address this problem, we used data from multiple sources to create a data-driven digital reconstruction of the NGV at micrometer anatomical resolution. We reconstructed 0.2 mm3 of rat somatosensory cortical tissue with approximately 16,000 morphologically detailed neurons, its microvasculature, and approximately 2,500 morphologically detailed protoplasmic astrocytes.

In order to maintain the local connectivity, the microcircuit was surrounded by an NGV region, approximately 0.2% of the rat's brain. A total of 14,402 astrocytes populated the bounding region, co-localized with 88,541 neurons and 1.37 m of vasculature wiring.

The reconstruction's consistency with a wide array of experimental measurements allows novel predictions of the numbers and locations of astrocytes and astrocytic processes that support different types of neurons. This allows anatomical reconstruction of the spatial microdomains of astrocytes and their overlapping regions.

The number and locations of end-feet connecting each astrocyte to the vasculature can be determined as well as the extent to which they cover the microvasculature. The structural analysis of the NGV circuit showed that astrocytic shape and numbers are constrained by vasculature’s spatial occupancy and their functional role to form NGV connections.

The digital reconstruction of the NGV is a resource that will enable a better understanding of the anatomical principles and geometric constraints which govern how astrocytes support brain function.

### Metabolism

The brain is an efficient, but also energy-demanding organ. While the importance of the brain energy metabolism has been recognized for decades, a complete understanding of the metabolic processes supporting and constraining the brain function remains elusive.

We built a biologically detailed bottom-up reconstruction and simulation of the NGV Unit and the rat neocortical microcircuitry energy metabolism driven by its electrophysiological activity and constrained by bidirectional feedback.

A multitude of reactions define energy metabolism at the molecular level. The metabolism simulation features the most important biochemical pathways that provide the brain with the energy for complex neuronal activity. It includes glycolysis, pentose phosphate pathway, tricarboxylic acid cycle, oxidative phosphorylation, astrocytic glycogenolysis, malate-aspartate shuttle in the neuron, as well as the processes of glutamate, GABA, glutathione and creatine metabolism. The system of differential equations describes dynamically changing concentrations of more than 150 metabolites in neurons, astrocytes, extracellular space and capillaries. Neuronal and astrocytic reactions are located in the cytosol and mitochondria. The model is validated against published data, including the BOLD signal, OGI, and concentrations of metabolites.

### Blood flow

The brain represents only 2% of the body mass but consumes about 20% of the body’s energy. Furthermore, there is a limited capacity to store energy in the brain. There is therefore a highly oxygen/glucose dependency in the brain supply from the bloodstream.

Blood flow is regulated by neurons and astrocytes. Astrocytes, a type of cell in the central nervous system, play an important role in metabolism. Each astrocyte has an endfoot which connects to the blood vessels. Increased neuronal activity elevates calcium levels in astrocytes, which in turn releases vasoactive substances at the endfeet, causing changes in the diameter of the associated blood vessel.

Blood flow through the blood vessel (vasculature) network changes in response to altered diameters, meaning that delivery of nutrients, lactate, glucose, and oxygen to support neuronal metabolism is in turn changed. We made the whole NGV unit working together by integrating astrocytes to vasculature in a simulation.

Release of glutamate at synapses can cause local elevation of calcium within astrocytic processes. We have adapted a model of calcium from Savchenko 2019 to run within the neuronal microcircuit. Resulting elevation of calcium levels within the endfoot causes release of vasoactive substances which in turn modulate the diameter of the associated blood vessels.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/ngv-portal](http://localhost:3000/ngv-portal) with your browser to see the result.

## Build for production

```bash
npm run build && npm run export
```

You can find the build files in the `out` folder.

## Acknowledgment

The development of this software was supported by funding to the Blue Brain Project, a research center of the École polytechnique fédérale de Lausanne (EPFL), from the Swiss government's ETH Board of the Swiss Federal Institutes of Technology.

Copyright (c) 2024 Blue Brain Project/EPFL
