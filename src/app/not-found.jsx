import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <FileSearch size={44} className="text-color-accent" />
        <h1 className="text-color-accent text-4xl font-bold">Not Found</h1>
        <Link
          href={"/"}
          className="text-color-primary hover:text-color-accent transition-all underline"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
