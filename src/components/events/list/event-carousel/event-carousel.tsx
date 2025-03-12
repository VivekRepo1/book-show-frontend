import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

import "./carousel.css";

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => (
  <div className="prev-arrow" onClick={onClick}>
    <GoArrowLeft />
  </div>
);

const NextArrow = ({ onClick }: ArrowProps) => (
  <div className="arrow-right" onClick={onClick}>
    <GoArrowRight />
  </div>
);

const CustomCarousel = ({ slides }) => {

  const settings: Settings = {
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '20%',
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '10%',
        },
      },
    ],
  };

  // const slide: string[] = [
  //   "/images/carousel/boho.png",
  //   "/images/carousel/boho.png",
  // "/images/carousel/boho.png",
  // "/images/carousel/boho.png",
  // "/images/carousel/boho.png",
  // ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides?.map((src, index) => (
          <div key={index} className="carousel-slide">
            <img src={src} alt={`Slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomCarousel;
