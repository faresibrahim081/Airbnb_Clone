import Image from 'next/image'
import image from '@/public/image/Sea_Beach_Background.jpg'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px]'>
      <Image src={image} fill className='object-cover object-lefts shadow-md' alt='...' />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-gray-600 font-semibold">Not Sure where To Go ? Perfict.</p>
        <button className='text-red-400 bg-white px-10 py-2 hover:text-white hover:bg-red-400 transition-all duration-200 shadow-md rounded-full font-bold'>
            Pock Now
        </button>
      </div>
    </div>
  )
}

export default Banner
