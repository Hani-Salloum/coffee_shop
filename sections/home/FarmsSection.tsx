import FarmCard from "@/components/cards/FarmCard";
import SectionHeading from "@/components/reusable/SectionHeading";
import { Farm } from "@/types/farm";
import Link from "next/link";
import React from "react";

interface Props {
  data: Array<Farm>;
}

function FarmsSection({ data }: Props) {
  return (
    <div className="bg-primary py-24 px-5">
      <div className="container mx-auto">
        <SectionHeading title="Our Farms" color="third" />
      </div>
      <div className="container mx-auto rounded-[40px] flex justify-between items-center gap-3 flex-col md:flex-row">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div key={index} className="col-span-1">
              <Link href={`/farm/${item.id}`}>
                <FarmCard data={item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FarmsSection;
