import Image from "next/image";

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

const Page = async ({ params: { id } }) => {
  const details = await fetchAnimeDetail(id);
  return (
    <>
      <div className="absolute top-[20%] md:top-[15%] px-5">
        <div className="relative flex items-center h-full ">
          <div className="w-full h-full">
            <h1 className="text-white text-lg md:text-3xl font-semibold">
              {details.data?.title}
            </h1>
          </div>
        </div>
        <div className="w-full mx-auto px-52">
          <div className="bg-gray-950 flex sm:flex-nowrap flex-wrap gap-4 p-5">
            <Image
              src={details.data?.images.jpg.large_image_url}
              alt="..."
              width={300}
              height={300}
              className="object-cover"
            />
            <p className="text-white">{details.data?.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
