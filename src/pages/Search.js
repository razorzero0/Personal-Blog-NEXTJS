import { Navbar } from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";
export default function Search() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="mt-20 mx-2 xl:mx-72 md:mx-10 my-8 flex justify-center shadow-md p-2 rounded-md">
          <div className="w-full text-center ">
            <h1 className="text-2xl font-bold my-4">
              Perbandingan kecepatan antar PDO dan mysqli pada PHP
            </h1>
            <div className="">
              <Link href="Post">
                <div className="overflow-hidden  h-[400px] rounded-md self-center flex justify-center">
                  <Image
                    src={"https://picsum.photos/500/500"}
                    alt="gambar-article"
                    width={700}
                    height={700}
                    className="w-full"
                  />
                </div>
              </Link>
              <div className="flex flex-col my-3 gap-3">
                <p className="text-gray-500 ">Ainun | 1 January 2023</p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  autem veritatis, tempore incidunt ratione libero dolores
                  debitis amet in non veniam culpa dolor provident eos hic
                  pariatur odit.
                </p>
              </div>
              <div className="flex gap-3 justify-center">
                <span className="tag-name">PHP</span>
                <span className="tag-name">IT</span>
                <span className="tag-name">Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      s
    </>
  );
}
