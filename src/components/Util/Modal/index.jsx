"use client";
import Link from "next/link";
import { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ detailAnime, onClose, open }) => {
  const [videoError, setVideoError] = useState(false);

  // Menyiapkan URL video YouTube dengan parameter
  const videoUrl = `https://www.youtube.com/embed/${detailAnime.data?.trailer.youtube_id}?rel=0&showinfo=0`;

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-xl rounded-none overflow-hidden">
        <div
          className={`${
            open ? "scale-100" : "scale-125"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <div className="w-full h-full brightness-[60%] object-cover">
              {videoError ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-white">
                    Video could not be loaded.{" "}
                    <a
                      href={`https://www.youtube.com/watch?v=${detailAnime.data?.trailer.youtube_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Watch here
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  allowFullScreen
                  onError={() => setVideoError(true)}
                  title="YouTube Video"
                ></iframe>
              )}
            </div>
            <div
              onClick={onClose}
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <IoCloseOutline className="text-white" size={28} />
            </div>
            <div className="absolute bottom-[3%] left-10">
              <p className="text-white text-2xl md:text-3xl h-full lg:text-4xl font-bold mb-8">
                {detailAnime.data?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <Link
                  href={`/anime/${detailAnime.data?.mal_id}`}
                  className="w-28 bg-green-500 text-white rounded-md h-10 font-bold flex items-center justify-center gap-3"
                >
                  <CgDetailsMore />
                  Detail
                </Link>
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <p className="text-green-400 font-semibold text-lg">New</p>
            <p className="text-white text-lg">{detailAnime.data?.duration}</p>
            <p className="text-white text-lg">
              {detailAnime.data?.synopsis.substring(0, 250)} ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
