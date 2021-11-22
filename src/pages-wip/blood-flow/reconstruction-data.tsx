import React from 'react';

import Filters from '../../layouts/Filters';
import Title from '../../components/Title';
import InfoBox from '../../components/InfoBox';
import DataContainer from '../../components/DataContainer';
import DataSection from '../../components/DataSection';


export default function AnatomyExpData() {
  return (
    <>
      <Filters primaryColor="purple" backgroundAlt hasData={true}>
        <div className="center-col">
          <Title
            primaryColor="purple"
            title="Experimental data"
            subtitle="Metabolism"
          />
          <div role="information">
            <InfoBox
              title="Lorem Ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra neque et interdum maximus. Curabitur luctus tempor porta. Quisque non tellus turpis. Donec lectus augue, dapibus vel turpis at, hendrerit lobortis velit. Curabitur pulvinar tempor lorem, vitae interdum tellus viverra et. Ut finibus risus a pharetra viverra. Donec ornare condimentum risus, id tincidunt mi luctus at. In tincidunt ligula in leo luctus, at suscipit ligula pellentesque. Nullam molestie nisi vitae augue tempor aliquam. Morbi ipsum quam, laoreet id congue vel, bibendum eu metus. Proin vel mauris eu est tempus blandit. Curabitur sodales pulvinar ex, in suscipit nisi efficitur quis. Etiam sed pulvinar dui, vitae dignissim velit. Maecenas nisl sem, hendrerit at laoreet vitae, lobortis vel libero. Pellentesque eget tellus vitae tortor sodales pharetra quis in augue."
              color="purple"
            />
          </div>
        </div>
        <div className="center-col"></div>
      </Filters>

      <DataContainer>
        <DataSection title="Concentration of Molecules">
          <span>TODO: add content</span>
        </DataSection>

        <DataSection title="Enzyme parameters for reaction rates" className="mt-4">
          <span>TODO: add content</span>
        </DataSection>

        <DataSection title="Equations describing changes of concentrations" className="mt-4">
          <span>TODO: add content</span>
        </DataSection>

        <DataSection title="Experimental data form validation: BOLD.." className="mt-4">
          <span>TODO: add content</span>
        </DataSection>
      </DataContainer>
    </>
  );
}

