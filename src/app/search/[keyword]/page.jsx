"use client";
import AnimeList from "@/components/Header";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Row from "@/components/Util/Row";

export default async function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <Search keyword={searchAnime} title={decodedKeyword} />
    </>
  );
}
