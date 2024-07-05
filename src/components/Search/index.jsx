"use client";
import Image from "next/image";
import Link from "next/link";

export default function Search({ title, keyword }) {
  return (
    <div className="absolute top-[18%] md:top-[10%]">
      <h2 className="text-white font-bold md:text-2xl p-4">
        Pencarian anda {title}
      </h2>
      <div className="relative flex items-center h-full">
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
          {keyword.data?.map((anime) => {
            return (
              <div key={anime.mal_id}>
                <Link href={`/${anime.mal_id}`} className="cursor-pointer">
                  <Image
                    src={anime.images.webp.image_url}
                    alt="..."
                    width={350}
                    height={350}
                    priority
                    className="w-full max-h-64 object-cover"
                  />
                  <h3 className="font-bold md:text-xl text-sm p-4 text-white">
                    {anime.title}
                  </h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
