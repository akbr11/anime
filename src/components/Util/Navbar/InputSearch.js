"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <>
      <div className="relative">
        <input
          onKeyDown={handleSearch}
          placeholder="Search Anime"
          className="w-full p-2 rounded"
          ref={searchRef}
        />
        <button className="absolute top-2 end-2" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </>
  );
}
