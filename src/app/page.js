// "use client";
import Header from "@/components/Header";
import Row from "@/components/Util/Row";

export default async function Home() {
  return (
    <>
      <section>
        <Header
        // title={"Populer"}
        // linkTitle={"Lihat Semua"}
        // linkHref={"/populer"}
        />
        {/* <AnimeList api={topAnime} /> */}
        <Row title={"Populer"} />
      </section>
    </>
  );
}
