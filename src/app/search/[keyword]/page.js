// "use client";
import AnimeList from "@/components/Header";
import Header from "@/components/Header";

export default async function Page({ params }) {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${keyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}
