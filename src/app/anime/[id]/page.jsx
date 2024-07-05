import { getTopAnimeResponse } from "@/app/libs/api";

const Page = async ({ params: { id } }) => {
  const anime = await getTopAnimeResponse(`anime/${id}`);
  console.log(anime);

  return (
    <div className="absolute top-[20%] md:top-[15%]">
      <div className="relative flex items-center h-full">
        <h1 className="text-white">
          {anime.data?.title} - {anime.data?.year}
        </h1>
      </div>
    </div>
  );
};

export default Page;
