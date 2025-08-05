import React from "react";
import SectionHeading from "../reusable/SectionHeading";

interface Props {
  origin_story?: string;
}

function ItemOriginStory({ origin_story }: Props) {
  return (
    <div className="bg-primary py-24 px-5 relative">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/coffee_shop.jpg"
          alt="Coffee Farm Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <section className="relative text-thirdp-12 container">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionHeading title="Origin Story" color="third" />
          <p className="text-lg pt-8 text-white/90 leading-relaxed">
            {origin_story}
          </p>
        </div>
      </section>
    </div>
  );
}

export default ItemOriginStory;
