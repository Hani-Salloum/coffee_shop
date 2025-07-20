import FaqSection from "@/sections/global/FaqSection";
import Gallery from "@/sections/global/Gallery";
import OurTeam from "@/sections/global/OurTeam";
import ContactUsSection from "@/sections/home/ContactUsSection";
import FarmsSection from "@/sections/home/FarmsSection";
import HeroSection from "@/sections/home/HeroSection";
import TodayPicks from "@/sections/home/TodayPicks";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <TodayPicks />
      <FarmsSection />
      <OurTeam />
      <Gallery />
      <ContactUsSection />
      <FaqSection />
    </Fragment>
  );
}
