"use client";
import useAnimeDetail from "@/hooks/useAnime";
import useInfoModal from "@/hooks/useInfoModal";
import React, { useCallback, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import YouTube from "react-youtube";

const Modal = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { mal_id } = useInfoModal();
  const anime = useAnimeDetail(mal_id);
  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-none overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md `}
        >
          <div className="relative h-96">
            <div className="w-full h-full brightness-[60%] object-cover">
              <YouTube
                videoId={anime.data?.trailer.youtube_id}
                onReady={(e) => e.target.playVideo()}
                opts={{
                  width: "780",
                  height: "400",
                }}
              />
            </div>
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <IoCloseOutline className="text-white" size={28} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {anime.data?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <button className="w-28 bg-white rounded-md h-10 font-bold flex items-center justify-center gap-3">
                  <FaPlay />
                  Play
                </button>
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <p className="text-green-400 font-semibold text-lg">New</p>
            <p className="text-white text-lg">{anime.data?.duration}</p>
            <p className="text-white text-lg">
              {anime.data?.synopsis.substring(0, 250)} ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
