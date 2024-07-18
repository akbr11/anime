import Anime from "@/components/Anime";
import Header from "@/components/Header";

const getTopAnime = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${"top/anime"}`
    );
    if (!res.ok) throw new Error("Failed Fetching data");
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getRecommendationsAnime = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${"recommendations/anime"}`
    );
    if (!res.ok) throw new Error("Failed Fetching data");
    const response = await res.json();
    const result = response.data.flatMap((item) => item.entry);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const Page = async () => {
  const topAnime = await getTopAnime();
  let recommendationsAnime = await getRecommendationsAnime();
  recommendationsAnime = { data: recommendationsAnime };

  return (
    <>
      <section>
        <Header />
        <Anime rowId="1" title={"Populer"} api={topAnime} />
        <Anime rowId="2" title={"Rekomendasi"} api={recommendationsAnime} />
      </section>
    </>
  );
};

export default Page;
