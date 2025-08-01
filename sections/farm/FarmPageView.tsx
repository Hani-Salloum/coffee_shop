//@ts-nocheck

import SectionHeading from "@/components/reusable/SectionHeading"
import FarmInfo from "./FarmInfo"
import SoilInfo from "./SoilInfo"
import FarmDescription from "./FarmDescription"
import { Farm } from "@/types/farm"

interface Props {
  data: Farm
}

export default function FarmPage({ data: farmDetails }: Props) {
  return (
    <div className="min-h-screen bg-third py-24 px-5">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Page Title */}
        <SectionHeading className="mb-12" title={farmDetails.name} align="center" /> 

        {/* Section 1: Farm Overview */}
        <FarmInfo data={farmDetails} />

        {/* Section 2: Grower Information */}
        <SoilInfo image={farmDetails.ground_info_img} description={farmDetails.description} />

        {/* Section 3: Production Process */}
        <FarmDescription info_arr={farmDetails.info_arr} />
      </div>
    </div>
  )
}