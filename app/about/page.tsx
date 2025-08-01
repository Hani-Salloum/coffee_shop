//@ts-nocheck

import { getAboutPageData } from "@/actions/about";
import { getAllBaristas } from "@/actions/barista";
import { getAllGalleryImages } from "@/actions/gallery";
import CoffeeJourney from "@/sections/about/CoffeeJourney";
import OurStory from "@/sections/about/OurStory";
import Gallery from "@/sections/global/Gallery";
import OurTeam from "@/sections/global/OurTeam";
import ContactUsSection from "@/sections/home/ContactUsSection";
import { Fragment } from "react";

const getData = async () => {
  const data = (await getAboutPageData()).data
  const baristas = (await getAllBaristas()).data
  const gallery = (await getAllGalleryImages()).data

  return {
    data,
    baristas,
    gallery
  }
}

export default async function About() {
  const { baristas, gallery, data } = await getData()

  const { image, our_story, coffee_journey } = data

  return (
    <Fragment>
      <OurStory data={{ image, our_story }} />
      <CoffeeJourney data={coffee_journey} />
      <OurTeam data={baristas} />
      <Gallery data={gallery} />
      <ContactUsSection />
    </Fragment>
  );
}
