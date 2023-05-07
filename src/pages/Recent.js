import Image from "next/image";
import Link from "next/link";
import List from "./components/Recent/List";
export default function Recent() {
  const a = [1, 2, 3, 4];
  return (
    <>
      <div className="mt-20 mx-2 xl:mx-24 md:mx-10 my-8">
        <h1 className="text-2xl text-gray-900 font-bold mb-8" id="recent">
          Recent Blog Post
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex-1 ">
            <Link href="Post">
              <div className="overflow-hidden  h-[400px] rounded-md ">
                <Image
                  src={"https://picsum.photos/500/500"}
                  alt="gambar-article"
                  width={700}
                  height={700}
                />
              </div>
            </Link>
            <div className="flex flex-col my-3 gap-3">
              <p className="text-gray-500 ">Ainun | 1 January 2023</p>
              <h1 className="text-xl font-semibold">
                Perbandingan kecepatan antar PDO dan mysqli pada PHP
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                autem veritatis, tempore incidunt ratione libero dolores debitis
                amet in non veniam culpa dolor provident eos hic pariatur odit.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="tag-name">PHP</span>
              <span className="tag-name">IT</span>
              <span className="tag-name">Code</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col md:gap-0 gap-4 md:justify-between">
            <List />
            <List />
            <List />
          </div>
        </div>
      </div>
    </>
  );
}
