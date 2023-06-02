import { Navbar } from "./components/Navbar";
import Image from "next/image";
import materi from "./Materi/Materi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import HTMLReactParser from "html-react-parser";
import { useEffect, useRef, useState } from "react";

export default function Post() {
  const b = Math.floor(Math.random() * 5);
  const [A, setA] = useState("");
  return (
    <>
      <div className="flex flex-col">
        <Navbar name={setA} />

        <div className="mt-28 mx-4  xl:mx-72">
          <h1 className="text-center text-xl xl:text-4xl font-semibold my-1 xl:my-3">
            {materi[0].judul}
          </h1>
          <p className="text-gray-500 text-center text-sm xl:text-md mb-2">
            {materi[0].tanggal}
          </p>
          <div className="overflow-hidden flex justify-center w-full h-[400px] mb-4">
            <Image
              src={"https://picsum.photos/600/400"}
              width={600}
              height={400}
              alt="heade-img"
              className="object-cover w-full rounded-md"
            />
          </div>
          <p className="text-gray-500 text-center text-sm xl:text-md mb-2">
            Author by {materi[0].penulis}
          </p>
          <div className="my-5 w-full text-justify">
            {HTMLReactParser(materi[0].isi)}
            <br />
            <SyntaxHighlighter style={atomOneDark}>
              {materi[0].syntax}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  );
}
