"use client";
import Header from "@/components/Header";
import Modal from "@/components/Util/Modal";
import Row from "@/components/Util/Row";
import useInfoModal from "@/hooks/useInfoModal";
import { useEffect, useState } from "react";

const Page = () => {
  const [topAnime, setTopAnime] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/${"top/anime"}`
        );
        if (!res.ok) throw new Error("Failed Fetching data");
        const data = await res.json();
        setTopAnime(data);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchData();
  }, []);

  const { isOpen, onClose } = useInfoModal();

  return (
    <>
      <section>
        <Modal visible={isOpen} onClose={onClose} />
        <Header />
        <Row title={"Populer"} api={topAnime} />
      </section>
    </>
  );
};

export default Page;
