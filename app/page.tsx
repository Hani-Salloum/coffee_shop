//@ts-nocheck

import { getAllBaristas } from "@/actions/barista";
import { getAllFaqs } from "@/actions/faq";
import { getAllFarms } from "@/actions/farm";
import { getAllGalleryImages } from "@/actions/gallery";
import { getTodayPicks } from "@/actions/item";
import FaqSection from "@/sections/global/FaqSection";
import Gallery from "@/sections/global/Gallery";
import OurTeam from "@/sections/global/OurTeam";
import ContactUsSection from "@/sections/home/ContactUsSection";
import FarmsSection from "@/sections/home/FarmsSection";
import HeroSection from "@/sections/home/HeroSection";
import TodayPicks from "@/sections/home/TodayPicks";
import Image from "next/image";
import { Fragment } from "react";

const getData = async () => {
  const farms = (await getAllFarms()).data
  const baristas = (await getAllBaristas()).data
  const gallery = (await getAllGalleryImages()).data
  const faqs = (await getAllFaqs()).data
  const todayPicks = (await getTodayPicks()).data

  return {
    farms,
    baristas,
    gallery,
    faqs,
    todayPicks
  }
}

export default async function Home() {
  const { farms, baristas, gallery, faqs, todayPicks } = await getData()

  return (
    <Fragment>
      <HeroSection />
      <TodayPicks data={todayPicks} />
      <FarmsSection data={farms} />
      <OurTeam data={baristas} />
      <Gallery data={gallery} />
      <ContactUsSection />
      <FaqSection data={faqs} />
    </Fragment>
  );
}
