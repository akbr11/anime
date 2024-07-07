"use client";
import Anime from "@/components/Anime";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function Row({ title, api }) {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-2xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <FaCircleChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {api.data?.length > 0 ? (
            <>
              {api.data.map((anime, id) => (
                <Anime key={id} anime={anime} />
              ))}
            </>
          ) : (
            <>
              {[...Array(6)].map((_, id) => (
                <div
                  className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block m-1 animate-pulse"
                  key={id}
                >
                  <div className="bg-slate-300 w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] rounded-lg"></div>
                </div>
              ))}
            </>
          )}
        </div>
        <FaCircleChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}
