import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function InputSearch() {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleKeyword = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const keyword = event.target.value;
      router.push(`/search/${keyword}`);
    }
  };
  // const searchRef = useRef();
  // const router = useRouter();

  // const handleSearch = (event) => {
  //   if (event.key === "Enter" || event.type === "click") {
  //     event.preventDefault();
  //     const keyword = searchRef.current.value;
  //     router.push(`/search/${keyword}`);
  //   }
  // };

  return (
    <>
      <div className="relative search-container">
        {/* <input
          onKeyDown={handleSearch}
          placeholder="Search Anime"
          className="w-full p-2 rounded"
          ref={searchRef}
        />
        <button className="absolute top-2 end-2" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button> */}

        <div className={`search-input-container ${searchOpen ? "open" : ""}`}>
          <button onClick={handleSearch} className="search-button">
            <MagnifyingGlass size={24} className="text-white" />
          </button>
          {searchOpen && (
            <input
              onKeyDown={handleKeyword}
              type="text"
              className="search-input text-white"
              placeholder="Search..."
              ref={searchRef}
            />
          )}
        </div>
      </div>
    </>
  );
}
