import { getLive } from "@/app/utils/api"
import { LiveData } from "@/types/app"
import LiveCard from "./LiveCard"


async function Live() {
    const liveData: LiveData = await getLive()
    console.log(liveData)
  return (
    <section className="pt-6 w-5/6 mx-auto mb-[20px]">
    <h2 className="font-semibold text-4xl mb-5">Live Anywhere</h2>
    <div>
        <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">
            {
            liveData.map((item,index) => (
                <>
                    <LiveCard key={index} title={item.title} img={item.img} />
                </>
            ))
            }
        </div>
    </div>
  </section>
  )
}

export default Live
