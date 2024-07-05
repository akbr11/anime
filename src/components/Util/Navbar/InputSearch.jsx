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
    const keyword = searchRef.current.value;
    if (!keyword) return;
    if (event.key === "Enter" && keyword != " ") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <>
      <div className="relative search-container">
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
