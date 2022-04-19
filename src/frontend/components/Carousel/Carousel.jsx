import { Carousel } from "react-responsive-carousel";
import { CarouselItem } from "./CarouselItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import { Carousel1, Carousel2, Carousel3 } from "../../assets";
const MyCarousel = () => {
  const images = [Carousel1, Carousel2,Carousel3];
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      emulateTouch={true}
      dynamicHeight={true}
    >
      {images.map((img, index) => (
        <CarouselItem img={img} key={index} />
      ))}
    </Carousel>
  );
};

export { MyCarousel };
