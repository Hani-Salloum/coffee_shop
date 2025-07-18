import HeroSection from "@/sections/home/HeroSection";
import TodayPicks from "@/sections/home/TodayPicks";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <TodayPicks />
    </Fragment>
  );
}
