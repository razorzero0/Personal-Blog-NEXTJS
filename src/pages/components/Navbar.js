import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
export function Navbar() {
  const [rotate, setRotate] = useState(false);
  return (
    <>
      <div className="flex fixed w-full justify-around py-3  items-center font-semibold">
        <div>
          <h1>Blog</h1>
        </div>
        <ul className="flex gap-8">
          <li>
            <Link href={"./Home"}> Home </Link>
          </li>
          <li
            className="tes cursor-pointer "
            onMouseEnter={() => setRotate(true)}
            onMouseLeave={() => setRotate(false)}>
            {" "}
            Category
            <FontAwesomeIcon
              icon={faCircleDown}
              className={
                rotate == true ? "rotate-arrow ml-1" : "ml-1 duration-300 "
              }
            />
            <div className="bg-slate-300 p-1 rounded-md ">
              <li>javascript</li>
              <li>php</li>
            </div>
          </li>
          <li> About Us </li>
        </ul>
        <div>
          <button className="w-24 h-10 rounded-lg bg-red-600 hover:bg-red-800 text-white">
            {" "}
            YouTube
          </button>
        </div>
      </div>
    </>
  );
}
