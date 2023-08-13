"use client";

import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ToursPreview from "../Home/ToursPreview";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

type Props = {
  slides: {
    id: number;
    title: string;
    img: string;
    url: string;
    duration: string;
  }[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

export default function Carousel({
  slides,
  autoSlide,
  autoSlideInterval,
}: Props) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="mb-6 px-4 overflow-hidden relative">
      <h1 className="text-center mb-2 text-4xl font-semibold tracking-tight leading-none">
        Tours
      </h1>
      <div className="flex items-center ">
        <button onClick={prev} className="px-2  ">
          <HiOutlineArrowNarrowLeft size={30} />
        </button>
        <button onClick={next} className={!curr ? 'text-yellow-400' : ''}>
          <HiOutlineArrowNarrowRight size={30} />
        </button>
      </div>

      <div className=" ">
        <div
          className="flex  transition-transform ease-in duration-1000"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((tour) => (
            <ToursPreview
              title={tour.title}
              img={tour.img}
              url={tour.url}
              duration={tour.duration}
              key={tour.id}
            />
          ))}
        </div>
        

      
      </div>
      <div className="absolute bottom-4 right-0 left-0 -z-10 ">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
              transition-all w-3 h-3 bg-black-950 rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
    </div>
  );
}
