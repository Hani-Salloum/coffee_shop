import ItemCard from "@/components/cards/ItemCard";
import SectionHeading from "@/components/reusable/SectionHeading";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Item } from "@/types/item";
import React from "react";

interface Props {
  data: Array<Item>;
}

function RelatedItemsSection({ data }: Props) {
  return (
    <div className="pg-third px-5 py-24">
      <section className="container">
        <SectionHeading title="You Might Also Like" align="center" />
        <div className="relative">
          <ScrollArea className="container whitespace-nowrap">
            <div className="flex w-max space-x-7 p-4">
              {data.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-72 lg:w-auto">
                  <ItemCard data={item} />
                </div>
              ))}
            </div>
            <ScrollBar className="opacity-0" orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
    </div>
  );
}

export default RelatedItemsSection;
