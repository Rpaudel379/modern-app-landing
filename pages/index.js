import Head from "next/head";
import CoreFeatures from "../components/CoreFeatures";
import CoreFeaturesBottom from "../components/CoreFeaturesBottom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Payment from "../components/Payment";
import QualityFeatures from "../components/QualityFeatures";
import QualityFeaturesLists from "../components/QualityFeaturesLists";
import StepsBanner from "../components/StepsBanner";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Startup App Modern Landing</title>
        <meta name="description" content="Startup NextJS app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* navbar */}

      {/* hero */}

      <Hero />

      {/* end of hero */}

      {/* quality features */}
      <QualityFeatures />
      {/* end of quality features */}

      {/* core features */}
      <CoreFeatures />
      {/* end of core features */}

      <QualityFeaturesLists />

      <CoreFeaturesBottom />

      <StepsBanner />

      <Testimonial />

      <Payment />

      <Footer />
    </div>
  );
}
