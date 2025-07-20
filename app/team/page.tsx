import SectionHeading from "@/components/reusable/SectionHeading";
import OurTeam from "@/sections/global/OurTeam";
import BaristaSection from "@/sections/team/BaristaSection";
import { Fragment } from "react";

export default function Team() {
    const baristas = [
        {
          name: "Elena Rodriguez",
          image: "/hani_salloum.jpg",
          age: 32,
          position: "Head Barista",
          experience_years: 8,
          nationality: { code: "italy", name: "Italian" },
          description:
            "Elena is our passionate Head Barista, known for her exceptional latte art and deep knowledge of coffee origins. She believes every cup is an opportunity to create a moment of joy. Her dedication to the craft ensures every beverage is a masterpiece.",
        },
        {
          name: "Marcus Chen",
          image: "/hani_salloum.jpg",
          age: 28,
          position: "Lead Roaster & Barista",
          experience_years: 6,
          nationality: { code: "france", name:"France" },
          description:
            "Marcus brings a unique perspective from his family's coffee farm in Brazil. He oversees our roasting process, ensuring each bean reaches its peak flavor before it's brewed to perfection. His expertise guarantees a rich and consistent taste.",
        },
        {
          name: "Sophia Lee",
          image: "/hani_salloum.jpg",
          age: 25,
          position: "Specialty Coffee Barista",
          experience_years: 4,
          nationality: { code: "south-korea", name: "South Korean" },
          description:
            "Sophia is our expert in specialty brews, always experimenting with new methods to highlight the subtle notes in our single-origin coffees. Her precision and dedication are unmatched, creating unique and memorable coffee experiences.",
        },
        {
          name: "Elena Rodriguez",
          image: "/hani_salloum.jpg",
          age: 32,
          position: "Head Barista",
          experience_years: 8,
          nationality: { code: "italy", name: "Italian" },
          description:
            "Elena is our passionate Head Barista, known for her exceptional latte art and deep knowledge of coffee origins. She believes every cup is an opportunity to create a moment of joy. Her dedication to the craft ensures every beverage is a masterpiece.",
        },
        {
          name: "Marcus Chen",
          image: "/hani_salloum.jpg",
          age: 28,
          position: "Lead Roaster & Barista",
          experience_years: 6,
          nationality: { code: "france", name:"France" },
          description:
            "Marcus brings a unique perspective from his family's coffee farm in Brazil. He oversees our roasting process, ensuring each bean reaches its peak flavor before it's brewed to perfection. His expertise guarantees a rich and consistent taste.",
        },
        {
          name: "Sophia Lee",
          image: "/hani_salloum.jpg",
          age: 25,
          position: "Specialty Coffee Barista",
          experience_years: 4,
          nationality: { code: "south-korea", name: "South Korean" },
          description:
            "Sophia is our expert in specialty brews, always experimenting with new methods to highlight the subtle notes in our single-origin coffees. Her precision and dedication are unmatched, creating unique and memorable coffee experiences.",
        },
      ]

    return (
        <div className="min-h-screen bg-third py-24 px-5">
      <div className="max-w-4xl mx-auto space-y-20">
        <SectionHeading title="Our Dedicated Baristas" align="center" className="mb-12" />

            {baristas.map((barista, index) => (
            <BaristaSection key={index} data={barista} index={index} />
            ))}
      </div>
    </div>
    // <Fragment>
    //   <OurTeam />
    // </Fragment>
  );
}
