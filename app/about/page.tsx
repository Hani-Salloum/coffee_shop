import CoffeeJourney from "@/sections/about/CoffeeJourney";
import OurStory from "@/sections/about/OurStory";
import Gallery from "@/sections/global/Gallery";
import OurTeam from "@/sections/global/OurTeam";
import ContactUsSection from "@/sections/home/ContactUsSection";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <OurStory />
      <CoffeeJourney />
      <OurTeam />
      <Gallery />
      <ContactUsSection />
    </Fragment>
  );
}
