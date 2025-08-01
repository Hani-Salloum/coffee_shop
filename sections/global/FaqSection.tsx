import FaqCard from "@/components/cards/FaqCard";
import SectionHeading from "@/components/reusable/SectionHeading";
import { Accordion } from "@/components/ui/accordion";
import { Faq } from "@/types/faq";
import React from "react";

interface Props {
  data: Array<Faq>
}

function FaqSection({ data }: Props) {
  return (
    <div className="bg-third py-24 px-5">
      <div className="container mx-auto">
        <SectionHeading title="Frequently Asked Questions" color="primary" />
      </div>
      <div className="mt-8 container mx-auto rounded-[40px] flex justify-between items-center gap-3 flex-col md:flex-row">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <div className="w-full grid grid-cols-1  gap-6">
            {data.map((faq) => (
              <FaqCard
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                value={faq.id || 0}
              />
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqSection;
