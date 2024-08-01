import { GlobeAltIcon } from "@heroicons/react/solid";
import { airbnb, hosting, support } from "./footerData";

function Footer() {

  return (
    <footer className="bg-gray-200">
        <div className="myContainer">
            <section className=" py-8 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h3 className="text-lg font-bold">Support</h3>
                    {
                        support.map((item, index) => (
                            <h5 className="hover:underline cursor-pointer my-1" key={index}>{item}</h5>
                        )) 
                    }
                </div>
                <div>
                    <h3 className="text-lg font-bold">Hosting</h3>
                    {
                        hosting.map((item, index) => (
                            <h5 className="hover:underline cursor-pointer my-1" key={index}>{item}</h5>
                        )) 
                    }
                </div>
                <div>
                    <h3 className="text-lg font-bold">airbnb</h3>
                    {
                        airbnb.map((item, index) => (
                            <h5 className="hover:underline cursor-pointer my-1" key={index}>{item}</h5>
                        )) 
                    }
                </div>
            </section>
                <hr className="bg-gray-400 h-[2px] w-full" />
                <section className=" py-5 flex justify-between items-center flex-wrap">
                    <p>© 2024 Airbnb, Inc</p>
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-2 items-center">
                            <GlobeAltIcon className="h-5 cursor-pointer"/>
                            <p className="hover:underline">English (US)</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <h1>$</h1>
                            <p className="hover:underline">USD</p>
                        </div>
                    </div>
                </section>
        </div>
    </footer>
  );
}

export default Footer;
