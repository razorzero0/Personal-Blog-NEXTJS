import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import materi from "../Materi/Materi";
import Image from "next/image";

export default function Navbar({ post }) {
  const [rotate, setRotate] = useState(0);
  const [list, setList] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  function turnRotate() {
    rotate == 1 ? setRotate(0) : setRotate(1);
  }

  const router = useRouter();

  const handleSearch = (v) => {
    // Baca file JSON

    setList(true);
    const results = materi.filter((item) =>
      item.judul.toLowerCase().includes(v)
    );
    const limitedResults = results.slice(0, 5);
    setSearchResults(limitedResults);
  };

  return (
    <>
      <div className="flex fixed w-full justify-around py-3 pt-4  items-center font-semibold bg-white/70 backdrop-blur-md  ">
        <div className="btn-hover">
          <h1>Ainun Blog</h1>
          <span></span>
        </div>
        <ul className="flex gap-8">
          <li className="btn-hover">
            <Link href={"/"}> Home </Link>
            <span></span>
          </li>
          <li className="btn-hover">
            <Link href={"/#recent"}> Recent </Link>
            <span></span>
          </li>
          <li
            className="group cursor-pointer relative "
            onMouseEnter={() => turnRotate()}
            onMouseLeave={() => turnRotate()}>
            Category
            <FontAwesomeIcon
              icon={faCircleDown}
              className={
                rotate == 1
                  ? "rotate-arrow  text-sm ml-1 "
                  : "duration-300 text-sm ml-1"
              }
            />
            <ul className="bg-white backdrop-blur-md hidden shadow-md  p-1 z-[999] rounded-md group-hover:-left-1 text-center group-hover:block group-hover:absolute group-hover:font-normal">
              <Link href={"/#Javascript"}>
                <li className=" hover:bg-black hover:text-white px-2 py-1">
                  Javascript
                </li>
              </Link>
              <Link href={"/#PHP"}>
                <li className="hover:bg-black hover:text-white px-2 py-1">
                  PHP
                </li>
              </Link>
            </ul>
          </li>
        </ul>
        <label className=" md:flex flex-row items-baseline  hidden text-gray-400 focus-within:text-gray-800 relative">
          <input
            className=" rounded-md border  px-2 w-40 h-8  focus:outline-none"
            onChange={(e) => handleSearch(e.target.value)}
            onBlur={async () =>
              setTimeout(() => {
                setList(false);
              }, 1500)
            }
          />
          {list ? (
            <div className="absolute mt-9  rounded-md shadow-md bg-white ">
              <ul>
                {searchResults.map((v) => {
                  return (
                    <Link key={v.id} href={`/Post/${v.id}`}>
                      <li className="text-[11px] my-2  border-b p-2">
                        {v.judul}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          ) : null}
          {list ? (
            <Image
              className="absolute  top-3 -left-7 cursor-pointer"
              src="/img/loading.gif"
              alt="img"
              width={22}
              height={22}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute  top-2 -left-7 cursor-pointer hover:bg-gray-900 hover:text-white hover:-left-9 hover:top-0 hover:p-2 "
            />
          )}
        </label>
      </div>
    </>
  );
}
