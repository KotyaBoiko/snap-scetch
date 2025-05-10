import img1 from "@/app/assets/images/1.jpg";
import img10 from "@/app/assets/images/10.jpg";
import img11 from "@/app/assets/images/11.jpg";
import img12 from "@/app/assets/images/12.jpg";
import img13 from "@/app/assets/images/13.jpg";
import img14 from "@/app/assets/images/14.jpg";
import img2 from "@/app/assets/images/2.jpg";
import img3 from "@/app/assets/images/3.jpg";
import img4 from "@/app/assets/images/4.jpg";
import img5 from "@/app/assets/images/5.jpg";
import img6 from "@/app/assets/images/6.jpg";
import img7 from "@/app/assets/images/7.jpg";
import img8 from "@/app/assets/images/8.jpg";
import img9 from "@/app/assets/images/9.jpg";
import img15 from "@/app/assets/images/16.jpg";

import { useRef } from "react";
import classes from "./banner.module.css";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    const maxOffset = 20;

    document.querySelectorAll(".home-banner-parallax").forEach((img) => {
      const offsetX = mouseX * 0.1;
      const offsetY = mouseY * 0.1;

      const boundedOffsetX = Math.min(Math.max(offsetX, -maxOffset), maxOffset);
      const boundedOffsetY = Math.min(Math.max(offsetY, -maxOffset), maxOffset);

      (img as HTMLElement).style.transform = `translate(${boundedOffsetX}px, ${boundedOffsetY}px)`;
    });
  };

  const handleMouseLeave = () => {
    document.querySelectorAll(".home-banner-parallax").forEach((img) => {
      (img as HTMLElement).style.transform = `translate(0px, 0px)`;
    });
  };

  return (
    <div className="min-h-[100vh] overflow-hidden">
      <div
        className="fixed w-full h-full mt-[-100px] flex items-center justify-center"
        ref={bannerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative z-10 text-center flex items-center flex-col">
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-7xl">INSPIRE THE HAND SHARPEN EYE</h1>
          <p className="max-w-[450px]">
            Choose a category, set a timer, and draw from real-time prompts — on
            paper, your way. No distractions, just practice.
          </p>
        </div>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            className={
              classes[`banner-img-${index}`] +
              ` absolute home-banner-parallax ` +
              classes["banner-img"]
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
