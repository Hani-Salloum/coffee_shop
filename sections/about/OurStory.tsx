import SectionHeading from "@/components/reusable/SectionHeading";
import { baseURL } from "@/utils/axios";
import Image from "next/image";
import React from "react";

interface Props {
  data: {
    image: string;
    our_story: string;
  };
}

function OurStory({ data }: Props) {
  const { image, our_story } = data;
  // const imagePath = baseURL + image

  return (
    <section className="bg-primary py-24 px-5">
      <SectionHeading title="Our Story" align="center" color="third" />
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <div className="w-full h-[450px] relative rounded-3xl overflow-hidden shadow-md">
            <Image src={image} alt="ous story image" fill objectFit="cover" />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-xl text-third/80 leading-relaxed mb-6">
            {our_story}
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
