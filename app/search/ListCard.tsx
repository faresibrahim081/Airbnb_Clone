import { HeartIcon, StarIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { useState } from "react"

type ListPropsType = {
    img:string,
    location:string,
    title:string,
    description:string,
    star:number,
    price:string,
    total:string,
}

function ListCard({img,location,title,description,star,price,total}:ListPropsType) {
  return (
    <div className="flex-col md:flex-row p-4 items-center hover:shadow-lg border-b last-of-type:mb-4 last-of-type:border-none">
      <div className="relative mx-auto mb-3  md:m-0 h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} fill className=" rounded-2xl object-cover" alt={title} />
      </div>
      <div className="flex flex-col w-full pl-5">
        <div className="flex justify-between">
            <p>{location}</p>
            <HeartIcon className="h-7 cursor-pointer " />
        </div>
        <h4 className="texxt-lg">{title}</h4>
        <div className="">
            <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
            <div className="flex justify-between items-end pt-5">
                <p className="flex items-center">
                    <StarIcon className="h-5 text-red-400" />
                    {star}
                </p>
                <div>
                    <p className="text-lg lg:text-2xl font-semibold pb-2">{price}$</p>
                    <p className="text-right font-extralight">{total}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ListCard
