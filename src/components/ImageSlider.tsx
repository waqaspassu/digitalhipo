"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperType from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  urls: string[];
}
const ImageSlider = ({ urls }: ImageSliderProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesConfig, setSlidesConfig] = useState({
    isBegning: true,
    isEnd: activeIndex === (urls.length ?? 0) - 1,
  });

  useEffect(() => {
    console.log({ urls });
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlidesConfig({
        isBegning: activeIndex === 0,
        isEnd: activeIndex === (urls.length ?? 0) - 1,
      });
    });
  }, [swiper, urls]);
  const activeStyle =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";
  const inActiceStyles = "hidden text-gray-400";
  return (
    <div className="group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl">
      <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slideNext();
          }}
          className={cn(activeStyle, "right-4  transition", {
            [inActiceStyles]: slidesConfig.isEnd,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slidesConfig.isEnd,
          })}
          aria-label="next-image"
        >
          <ChevronRight className="h-4 w-4 text-zinc-700" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slidePrev();
          }}
          className={cn(activeStyle, "left-4  transition", {
            [inActiceStyles]: slidesConfig.isBegning,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slidesConfig.isBegning,
          })}
          aria-label="previous-image"
        >
          <ChevronLeft className="h-4 w-4 text-zinc-700" />
        </button>
      </div>
      <Swiper
        pagination={{
          renderBullet: ({ _, className }: any) => {
            return `<span class="rounded-full transition ${className}"></span>`;
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        className="h-full w-full"
      >
        {urls.map((url, index) => {
          return (
            <SwiperSlide key={index} className="-z-10 relative w-full h-full">
              <Image
                src={url}
                loading="eager"
                alt="product image category"
                fill
                className="-z-10 h-full object-cover object-center"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
