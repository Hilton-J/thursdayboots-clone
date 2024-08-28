import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function ReviewsSwiper() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        pagination={true}
        // pagination={{
        //   el: '.custom-pagination',
        //   clickable: true,
        //   renderBullet: (index, className) => {
        //     return `<div class="${className} custom-bullet"></div>`;
        //   }
        // }}
        className="mySwiper text-center h-64 font-review text-3xl flex justyfy"
      >
        <SwiperSlide className='bg-red-700  '><p>{`"Best Boots Under $200."`}</p></SwiperSlide>
        <SwiperSlide>Made for walking</SwiperSlide>
        <SwiperSlide>...Perfectly understated and well-made.</SwiperSlide>
        <SwiperSlide>These will be the most comfortable boots you have ever walked around in.</SwiperSlide>
        <SwiperSlide>Durable, versatile boots that are comfortable and don&apos;t cost a fortune.</SwiperSlide>
        <SwiperSlide>They&apos;re worth the investiment beacuase they&apos;ll pair well with everything you have in your closet.</SwiperSlide>
      </Swiper>
    </>
  );
}
