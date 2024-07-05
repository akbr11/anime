"use client";
import Header from "@/components/Header";
import Row from "@/components/Util/Row";
import { useEffect, useState } from "react";
import { getTopAnimeResponse } from "../libs/api";
import Modal from "@/components/Util/Modal";
import useInfoModal from "@/hooks/useInfoModal";

const Page = () => {
  const [topAnime, setTopAnime] = useState({});
  const fetchTopAnime = async () => {
    const topAnime = await getTopAnimeResponse("top/anime");
    setTopAnime(topAnime);
  };

  useEffect(() => {
    fetchTopAnime();
  }, []);

  const { mal_id, isOpen, onClose } = useInfoModal();

  return (
    <>
      <section>
        <Modal visible={isOpen} onClose={onClose} mal_id={mal_id} />
        <Header />
        <Row title={"Populer"} api={topAnime} />
      </section>
    </>
  );
};

export default Page;
