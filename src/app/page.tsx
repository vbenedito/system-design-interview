import CallToAction from "./_components/call-to-actions";
import Features from "./_components/features";
import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import Navbar from "./_components/navbar/navbar";
import Showcase from "./_components/showcases";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
      <CallToAction />
    </>
  );
}
