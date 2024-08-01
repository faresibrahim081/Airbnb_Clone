import { ExploreItem } from "@/types/app";
import Image from "next/image";

type ExploreCardProps = ExploreItem;

function ExploreCard({location, img , distance}: ExploreCardProps) {
  
  return (
    <div className="flex items-center gap-4 rounded-md overflow-hidden cursor-pointer mt-5 hover:bg-gray-200 hover:scale-105 transform ease-in-out transition-all duration-200">
      <div className="relative w-16 h-16">
        <Image src={img} alt={location} fill/>
      </div>
      <div>
        <h2>{location}</h2>
        <h2 className="text-gray-500">{distance}</h2>
      </div>
    </div>
  )
}

export default ExploreCard
