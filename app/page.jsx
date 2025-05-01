import HeroBanner from "@/components/sections/HeroBanner";
import WhatIsAmbition from "@/components/sections/WhatIsAmbition";
import WhyParticipate from "@/components/sections/WhatYouGet";
import Tracks from "@/components/sections/Tracks";
import TimeLine from "@/components/sections/Timeline";
import Perks from "@/components/sections/PrizesAndRewards";
import HowToParticipate from "@/components/sections/Sponsors";
import FAQs from "@/components/sections/FAQs";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <WhatIsAmbition />
      <WhyParticipate />
      <Tracks />
      <TimeLine />
      <Perks />
      <HowToParticipate />
      <FAQs />
      <Footer />
    </>
  );
}
