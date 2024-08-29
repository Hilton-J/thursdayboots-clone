import { RiStarFill } from "react-icons/ri"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CustomDotGroup from './CustomeDotGroup';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";



const Reviews = () => {
  return (


    <div className='bg-[#f8f8f8] m-3 space-y-6 text-center'>

      <h2 className="">WHAT PEOPLE ARE SAYING</h2>
      <div>
        <CarouselProvider className='h-56 relative'
          naturalSlideWidth={100}
          isIntrinsicHeight={true} // set's the height of the carousel automatically
          totalSlides={6}
        >
          <Slider className='h-full font-review text-3xl flex justify-center items-center'>
            <Slide index={0} >{`"Best Boots Under $200."`}</Slide>
            <Slide index={1}>{`"Made for walking."`}</Slide>
            <Slide index={2}>{`"...Perfectly understated and well-made."`}</Slide>
            <Slide index={3}>{`"These will be the most comfortable boots you have ever walked around in."`}</Slide>
            <Slide index={4}>{`"Durable, versatile boots that are comfortable and don't cost a fortune."`}</Slide>
            <Slide index={5}>{`"They're worth the investment because they'll pair well with everything you have in your closet."`}</Slide>
          </Slider>

          <ButtonBack className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 text-black z-50">
            <BsChevronLeft className='text-5xl' />
          </ButtonBack>
          <ButtonNext className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-black z-50">
            <BsChevronRight className='text-5xl' />
          </ButtonNext>
          <CustomDotGroup slides={6} />
        </CarouselProvider>
      </div>
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