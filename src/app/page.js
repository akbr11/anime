"use client";
import Header from "@/components/Header";
import Row from "@/components/Util/Row";
import { useEffect, useState } from "react";

export default function Home() {
  const [topAnime, setTopAnime] = useState([]);
  useEffect(() => {
    const fetchTopAnime = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
      );
      const data = await response.json();
      setTopAnime(data);
    };
    fetchTopAnime();
  }, []);
  return (
    <>
      <section>
        <Header />
        <Row title={"Populer"} api={topAnime} />
      </section>
    </>
  );
}
