import useInfoModal from "@/hooks/useInfoModal";
import Image from "next/image";
import React, { useCallback } from "react";

const Anime = ({ anime }) => {
  const { onOpen } = useInfoModal();
  const handleOpenModal = useCallback(() => {
    onOpen(anime?.mal_id);
  }, [onOpen, anime?.mal_id]);

  return (
    <div
      onClick={handleOpenModal}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
    >
      <Image
        src={anime.images.jpg.image_url}
        alt="..."
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
  );
};

export default Anime;
