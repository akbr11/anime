"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Util/Modal";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const fetchAnimeDetail = async (animeId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${`anime/${animeId}`}`
    );
    if (!res.ok) throw new Error("Failed Fetching data");
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const Anime = ({ title, api }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [animeDetails, setAnimeDetails] = useState(null);

  const handleAnimeClick = async (animeId) => {
    try {
      const details = await fetchAnimeDetail(animeId);
      setAnimeDetails(details);
      setSelectedAnime(animeId);
      setIsOpen(true);
    } catch (error) {
      console.error(error.message);
    }
  };

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
          id="slider"
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {api.data?.length > 0 ? (
            <>
              {api.data.map((anime, id) => (
                <div
                  onClick={() => handleAnimeClick(anime.mal_id)}
                  className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                  key={id}
                >
                  <Image
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    width={1028}
                    height={1028}
                    priority
                    className="w-full rounded-lg max-h-[160px] sm:max-h-[200px] md:max-h-[240px] lg:max-h-[280px] object-cover block"
                  />
                  <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                    <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                      {anime.title}
                    </p>
                  </div>
                </div>
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
      {isOpen && animeDetails && (
        <Modal
          detailAnime={animeDetails}
          onClose={() => setIsOpen(false)}
          open={isOpen}
        />
      )}
    </>
  );
};

export default Anime;
