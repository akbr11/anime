import Link from "next/link";
import InputSearch from "./InputSearch";

export default function Navbar({ params }) {
  const key = params;

  return (
    <header
      className={`${
        key === "/" ? "" : "bg-black"
      } flex md:flex-row flex-col justify-between md:items-center p-5 gap-2 z-[10] absolute w-full`}
    >
      <Link
        href={"/"}
        className="font-extrabold text-3xl text-red-600 uppercase"
      >
        anime
      </Link>
      <InputSearch />
    </header>
  );
}
