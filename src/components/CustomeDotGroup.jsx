import { Dot } from 'pure-react-carousel';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const CustomDot = ({ slide, isActive }) => (
  <Dot
    slide={slide}
    className={`size-[10px] rounded-full transition-opacity duration-300 ${isActive ? 'bg-white opacity-100' : 'bg-white opacity-50'
      }`}
  />
);

const CustomDotGroup = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleSlideChange = (event) => {
      setActiveSlide(event.detail);
    };
    window.addEventListener('pure-react-carousel:afterSlide', handleSlideChange);

    return () => {
      window.removeEventListener('pure-react-carousel:afterSlide', handleSlideChange);
    };
  }, []);

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
      {Array.from({ length: slides }).map((_, index) => (
        <CustomDot slide={index} key={index} isActive={index === activeSlide} />

      ))}
    </div>
  );
};

{/* <CustomDot slide={index} key={index} /> */ }
CustomDotGroup.propTypes = {
  slides: PropTypes.number
};
CustomDot.propTypes = {
  slide: PropTypes.number,
  isActive: PropTypes.bool
};

export default CustomDotGroup;