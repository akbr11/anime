import { getTopAnimeResponse } from "@/libs/api";
import Search from "@/components/Search";

export default async function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getTopAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <Search keyword={searchAnime} title={decodedKeyword} />
    </>
  );
}
