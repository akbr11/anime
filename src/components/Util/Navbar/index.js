import Link from "next/link";
import InputSearch from "./InputSearch";

export default function Navbar() {
  return (
    <header className="">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-5 gap-2 z-[100] absolute w-full">
        <Link
          href={"/"}
          className="font-extrabold text-3xl text-red-600 uppercase"
        >
          anime
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}
