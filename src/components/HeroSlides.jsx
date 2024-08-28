import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Hero from './Hero';
import TheEden from './TheEden';
import Encore from './Encore';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const HeroSlides = () => {
  return (
    <CarouselProvider className='bg-slate-600 h-screen relative'
      naturalSlideWidth={100}
      isIntrinsicHeight={true} // set's the height of the carousel automatically
      totalSlides={3}

    >
      <Slider className='h-full'>
        <Slide index={0}><Hero /></Slide>
        <Slide index={1}><TheEden /></Slide>
        <Slide index={2}><Encore /></Slide>
      </Slider>

      <ButtonBack className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 text-white ">
        <FiChevronLeft className='text-5xl' />
      </ButtonBack>
      <ButtonNext className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-white z-50">
        <FiChevronRight className='text-5xl' />
      </ButtonNext>
      <DotGroup dotNumbers={true} className="absolute bottom-4 left-1/2 -translate-x-1/2 transform  flex space-x-2" />
    </CarouselProvider>
  )
}

export default HeroSlides;
