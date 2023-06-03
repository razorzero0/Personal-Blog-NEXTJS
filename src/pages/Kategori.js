import Marquee from "react-fast-marquee";
import List from "./components/Recent/List";
import materi from "./Materi/Materi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";

export default function Kategori({ title }) {
  const filter = materi.filter((item) => {
    return item.kategori == title;
  });
  return (
    <div className="pt-16 text-center md:mx-20 mx-2" id={title}>
      <h1 className=" text-2xl font-bold text-gray-800">{title}</h1>
      <div className="flex justify-between flex-wrap my-10">
        {filter.map((v) => {
          return (
            <Link
              href={{
                pathname: "/Post/[id]",
                query: { id: v.id },
              }}
              key={v}>
              <div className="md:w-64 md:h-58 w-full shadow-md p-2 rounded-md my-2">
                <h1
                  className="text-md font-bold  text-black my-2 
                ">
                  {v.judul}
                </h1>
                <Image
                  className="w-full"
                  src={"https://picsum.photos/350/200"}
                  alt="img"
                  width={350}
                  height={200}
                />
                <p className="my-2 text-sm"> {v.deskripsi}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
