import Image from "next/image"
import Link from "next/link"
import logo from "@/public/image/logo.png"
import SearchBar from "./SearchBar"
import Nav from "./Nav"

const Header = ({placeholder} : {placeholder?: string}) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="flex myContainer relative justify-between items-center">
      <Link href='/' className="hidden md:block">
        <Image src={logo} width={120} height={50} className="object-contain" alt="...." />
      </Link>
      <SearchBar placeholder={placeholder} />
      <Nav />
      </div>
    </header>
  )
}

export default Header
