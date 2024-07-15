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

const Page = async () => {
  const data = await getTopAnime();

  return (
    <>
      <section>
        <Header />
        <Anime title={"Populer"} api={data} />
      </section>
    </>
  );
};

export default Page;
