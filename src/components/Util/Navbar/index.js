import Link from "next/link";
import InputSearch from "./InputSearch";

export default function Navbar() {
  return (
    <header className="bg-indigo-400">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href={"/"} className="font-bold text-white text-2xl">
          AnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}
