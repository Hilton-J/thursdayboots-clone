import { RiStarFill } from "react-icons/ri"
import ReviewsSwiper from "./ReviewsSwiper"


const Reviews = () => {
  return (


    <div className='bg-[#f8f8f8] m-5 space-y-6 text-center'>

      <h2 className="">WHAT PEOPLE ARE SAYING</h2>
      <ReviewsSwiper />
      <div className="text-center space-y-4">
        <h3 className="" >OVER 125,000 5-STAR CUSTOMER REVIEWS</h3>
        <div className="flex justify-center ">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
        </div>

      </div>


    </div>
  )
}

export default Reviews