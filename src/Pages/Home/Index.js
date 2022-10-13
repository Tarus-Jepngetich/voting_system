import React from "react";
import { Carousel } from "rsuite";
import carouselImage1 from "../../Assets/carouselImage1.jpg";
import carouselImage2 from "../../Assets/carouselImage2.jpg";
import carouselImage3 from "../../Assets/carouselImage3.jpg";

const images = [carouselImage1, carouselImage2, carouselImage3];

export default function Home() {
  return (
    <>
      <div className="flex place-content-center">
        <h1 className="font-medium leading-tight pb-2 text-2xl sm:text-5xl mt-0 mb-2 text-black ">
          Happy <span className="text-orange-900">Voting</span>
        </h1>

        <img
          src="https://media.tenor.com/hI-oOVvwasYAAAAC/happy.gif"
          alt=""
          height={50}
          width={50}
        />

        <h1 className="font-medium leading-tight pb-2 text-2xl sm:text-5xl mt-0 mb-2 text-black-600 ">
          !
        </h1>
      </div>

      <Carousel
        className="object-cover rounded-lg custom-slider w-full sm:max-h-full max-h-48"
        shape="bar"
        autoplay={true}
      >
        {images.map((image, index) => {
          return <img src={image} alt="" key={index} />;
        })}
      </Carousel>
    </>
  );
}
