import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const NextArrow = (props) => (
  <CustomArrow
    style={{ right: "0px" }}
    onClick={props.onClick}>
    <RiArrowRightSLine />
  </CustomArrow>
);

const PrevArrow = (props) => (
  <CustomArrow
    onClick={props.onClick}>
    <RiArrowLeftSLine />
  </CustomArrow>
);


const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // const slides = [
  //   { id: 1, text: "Slide 1", imageUrl: "/images/carousel/boho.png" },
  //   { id: 2, text: "Slide 2", imageUrl: "/images/carousel/boho.png" },
  //   { id: 3, text: "Slide 3", imageUrl: "/images/carousel/boho.png" },
  // ];

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {slides?.map((imageUrl: string, index: number) => (
          <Slide key={index}>
            <Image src={imageUrl} alt={"Not found"} />
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;


const CarouselContainer = styled.div`
  width: 58%;
  margin: auto;

  .slick-dots {
    bottom: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height:250px;
  font-size: 24px;
  font-weight: bold;
  color: #333;

  @media (max-width: 480px){
    height:150px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const CustomArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 30px;
  height: 30px;
  top: 45%;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;
