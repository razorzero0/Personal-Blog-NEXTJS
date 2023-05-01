import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
export function Navbar() {
  const [rotate, setRotate] = useState(0);
  function turnRotate() {
    rotate == 1 ? setRotate(0) : setRotate(1);
  }
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
            <Link href={"#recent"}> Recent </Link>
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
            <ul className="bg-white backdrop-blur-md hidden p-1 z-[999] rounded-md group-hover:-left-1 text-center group-hover:block group-hover:absolute group-hover:font-normal">
              <li className=" hover:bg-black hover:text-white px-2 py-1">
                <Link href={"/"}>Javascript</Link>
              </li>
              <li className="hover:bg-black hover:text-white px-2 py-1">
                <Link href={"/"}>PHP</Link>
              </li>
            </ul>
          </li>
          <li className="btn-hover">
            <Link href={"./Home"}> About Us</Link>
            <span></span>
          </li>
        </ul>
        <label className=" md:flex  hidden text-gray-400 focus-within:text-gray-800 relative">
          <input className=" rounded-md border  px-2 w-40 h-8  focus:outline-none" />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute top-2 -left-6  "
          />
        </label>
      </div>
    </>
  );
}
