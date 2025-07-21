import SectionHeading from "@/components/reusable/SectionHeading"
import FarmInfo from "./FarmInfo"
import SoilInfo from "./SoilInfo"
import FarmDescription from "./FarmDescription"

const farmDetails = {
  name: "Gatomboya Wet Mill",
  image: "/coffee_shop.jpg",
  height: 1750, // MASL
  area: 120, // Hectares
  temperature: 20, // Celsius
  region: "Nyeri County, Kenya",
  map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199999999996!2d144.9630576!3d-37.814107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b9782e2c05%3A0x5045675218ce7e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678888888888!5m2!1sen!2sau",
  ground_info_img: "/KENYA_ISTOS.png",
  description:
    "Our coffee journey begins with dedicated growers who pour their heart and soul into cultivating the freshest beans. This particular batch hails from the lush highlands of Kenya, where generations of farming wisdom meet innovative techniques. The unique microclimate and rich volcanic soil contribute to the distinctive flavor profile you'll experience. The beans undergo a meticulous washed process, followed by a controlled fermentation method that enhances their natural sweetness and bright acidity. This careful approach ensures that every bean reaches its full potential, delivering a cup that truly reflects its origin and the passion of its growers.",
  info_arr: [
    {
      text: "We exclusively cultivate Arabica beans, renowned for their delicate aroma and complex flavor profile, ensuring a premium coffee experience.",
      image: "/coffeelab-icon6.jpg",
    },
    {
      text: "Our beans are meticulously roasted in small batches to unlock their unique characteristics, from light and fruity to dark and bold.",
      image: "/coffeelab-icon6.jpg",
    },
    {
      text: "Each batch is ground to the perfect consistency, tailored for various brewing methods to ensure maximum flavor extraction.",
      image: "/coffeelab-icon6.jpg",
    },
    {
      text: "Our skilled baristas employ precise brewing techniques, from pour-over to espresso, to highlight the nuanced flavors of each coffee.",
      image: "/coffeelab-icon6.jpg",
    },
    {
      text: "Every step of our process, from farm to cup, undergoes strict quality checks to guarantee consistency and excellence in every sip.",
      image: "/coffeelab-icon6.jpg",
    },
  ],
}

export default function FarmPage() {
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