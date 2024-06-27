import AnimeList from "@/components/Header";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Row from "@/components/Util/Row";

export default async function Page({ params }) {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      {/* <Header /> */}
      {/* <Row title={"Populer"} api={searchAnime} /> */}
      <Search keyword={searchAnime} title={keyword} />
    </>
  );
}
