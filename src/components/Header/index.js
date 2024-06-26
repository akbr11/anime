import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-tr from-black"></div>
        <Image
          src={"/bg1.jpg"}
          width={1028}
          height={1028}
          className="w-full h-full object-cover"
          priority
          alt="..."
        />
        <div className="absolute w-full top-[35%] md:top-[30%] p-5 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-color-primary grid sm:grid-cols-3">
            Get access to millions of writings from all over the world
          </h1>
          <div className="my-5">
            <Link
              href={`/`}
              className="bg-red-600 text-white font-bold border-gray-300 py-2 px-5"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
