// "use client";
import Link from "next/link";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <>
      <section>
        <Header
          title={"Populer"}
          linkTitle={"Lihat Semua"}
          linkHref={"/populer"}
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
}
