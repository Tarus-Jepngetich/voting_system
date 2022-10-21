import React from "react";
import { Carousel } from "rsuite";
import image1 from "../../Pictures/Image1.png";
import image2 from "../../Pictures/Image2.jpg";
import image3 from "../../Pictures/Image3.jpg";

export default function Home() {
  return (
    <>
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600 grid place-items-center ">
        Happy Voting!
      </h1>
      <Carousel
        autoplay
        className="object-cover rounded lg custom-slider w-full sm:max-h-full max-h-48"
      >
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </Carousel>
    </>
  );
}
