import { LiveItem } from "@/types/app"
import Image from "next/image";

type LiveCardProps = LiveItem;

function LiveCard({title,img}:LiveCardProps) {
  return (
    <div className="cursor-pointer mt-5 hover:bg-gray-200 hover:scale-105 transform ease-in-out transition-all duration-200">
      <div className="relative w-80 h-80">
        <Image src={img} alt={title} fill/>
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default LiveCard
