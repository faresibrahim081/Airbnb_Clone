"use client"
import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"
import { useState } from "react"

function Nav() {
  const [nav,setNav] =useState(false);
  const login: string[] = ["Sign up", "log in"];
  const navItem: string[] = ["gift cards", "airbnb your home", "help center"];
  
  return (
    <div className="flex justify-between items-center space-x-4 text-gray-500">
      <p className="hidden md:inline cursor-pointer ">Become a host</p>
      <GlobeAltIcon className="h-6 cursor-pointer hidden sm:block" />
      <div className="flex justify-between items-center border-2 p-2 cursor-pointer hover:shadow-md transition-all duration-200 rounded-full">
        <MenuIcon onClick={()=> setNav(!nav)} className="h-6" />
        <UserCircleIcon className="h-6" />
      </div>
      {nav && 
      <div className="w-full sm:w-[250px] bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer absolute top-[122%] right-1 sm:right-[3%]">
        {login.map((item,index) => (
          <ul key={index} className="">
            <li className="p-2 hover:bg-gray-100 transition-all duration-150">{item}</li>
          </ul>
        ))}
        <hr className="my-2" />
        {navItem.map((item,index) => (
          <ul key={index}>
            <li className="p-2 hover:bg-gray-100 transition-all duration-150">{item}</li>
          </ul>
        ))}
      </div>
      }
    </div>
  )
}

export default Nav
