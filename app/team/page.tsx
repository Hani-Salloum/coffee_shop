import { getAllBaristas } from "@/actions/barista";
import SectionHeading from "@/components/reusable/SectionHeading";
import OurTeam from "@/sections/global/OurTeam";
import BaristaSection from "@/sections/team/BaristaSection";
import { Fragment } from "react";

const getData = async () => {
  const res = await getAllBaristas()

  return res.data
}

export default async function Team() {
  const baristas = await getData()

    return (
        <div className="min-h-screen bg-third py-24 px-5">
      <div className="max-w-4xl mx-auto space-y-20">
        <SectionHeading title="Our Dedicated Baristas" align="center" className="mb-12" />

            {baristas?.map((barista, index) => (
            <BaristaSection key={index} data={barista} index={index} />
            ))}
      </div>
    </div>
    // <Fragment>
    //   <OurTeam />
    // </Fragment>
  );
}
