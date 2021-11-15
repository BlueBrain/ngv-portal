import Head from 'next/head';

import HomeView from '../views/Home';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home / NGV Portal</title>
        <meta
          name="description"
          content="The NGV Portal showcases the digital modeling of the Neuro-Glia-Vasculature system performed within the Blue Brain Project."
        />
        <meta property="og:title" content="The Neuro-Glia-Vasculature Portal" />
        <meta property="og:description" content="The NGV Portal showcases the digital modeling of the Neuro-Glia-Vasculature system performed within the Blue Brain Project." />
        <meta property="og:image" content="https://bbp.epfl.ch/ngv-portal/assets/images/backgrounds/home-page/2_ngv_background.jpg" />
      </Head>

      <HomeView />
    </>
  );
}
