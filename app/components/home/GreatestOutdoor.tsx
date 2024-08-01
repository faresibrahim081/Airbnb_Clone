import { GreatestOutdoorProps } from "@/types/app"
import Image from "next/image"
import Link from "next/link"


function GreatestOutdoor({img,desc,title,linkText}:GreatestOutdoorProps) {
  return (
    <section className="relative pt-6 w-5/6 mx-auto mb-[80px]">
        <div className="relative min-w-[300px] h-96">
            <Image src={img} fill alt={title} className="rounded-xl object-cover -z-10" />
        </div>
        <div className="absolute top-32 text-white left-12">
            <h3 className="text-4xl font-semibold mb-1 w-64">{title}</h3>
            <p className="mb-5">{desc}</p>
            <Link href='/' className="text-sm px-4 py-2 rounded-lg block w-fit bg-gray-600 hover:bg-gray-900 transition-all duration-200">{linkText}</Link>
        </div>
    </section>
  )
}

export default GreatestOutdoor
