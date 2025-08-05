import SectionHeading from "@/components/reusable/SectionHeading";
import { Farm } from "@/types/farm";
import {
  Globe,
  MapPin,
  Building,
  Mountain,
  Star,
  Coffee,
  Thermometer,
  Maximize,
} from "lucide-react";
import Image from "next/image";

interface Props {
  data: Farm;
}

export default function FarmInfo({ data }: Props) {
  const showDetails = {
    Altitude: data.height,
    Area: data.area,
    Region: data.region,
    Temperature: data.temperature,
  };

  return (
    <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
      <h2 className="text-4xl font-bold text-primary text-center mb-10">
        Farm Overview
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-md group">
          <div className="w-full h-[450px] relative transition-transform duration-300 group-hover:scale-105">
            <Image
              src={data.image || "/placeholder.svg"}
              alt="Farmers working with coffee beans"
              fill
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white text-lg font-semibold">
              Harvesting the finest beans
            </p>
          </div>
        </div>

        {/* Right: Map */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-secondary/30 h-80 lg:h-full">
          <iframe
            src={data.map_url}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Coffee Farm Location"
          ></iframe>
        </div>
      </div>

      {/* Farm Facts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 pt-8 border-t border-third">
        {Object.entries(showDetails).map(([key, value]) => {
          let IconComponent;
          switch (key) {
            case "Region":
              IconComponent = MapPin;
              break;
            case "Altitude":
              IconComponent = Mountain;
              break;
            case "Area":
              IconComponent = Maximize;
              break;
            case "Temperature":
              IconComponent = Thermometer;
              break;
            default:
              IconComponent = Globe;
          }
          return (
            <div
              key={key}
              className="flex items-center gap-4 p-4 bg-third/50 rounded-xl shadow-sm"
            >
              <IconComponent className="w-6 h-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-primary">{key}</h3>
                <p className="text-lg text-primary/90">{value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
