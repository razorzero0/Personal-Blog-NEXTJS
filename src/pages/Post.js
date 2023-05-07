import { Navbar } from "./components/Navbar";
import Image from "next/image";
// import materi from "./materi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import HTMLReactParser from "html-react-parser";
import { useEffect, useRef, useState } from "react";

export default function Post() {
  const a = ` <code>
  {a}
</code>`;

  const b = HTMLReactParser(a);
  const [A, setA] = useState("");
  return (
    <>
      <div className="flex flex-col">
        <Navbar name={setA} />

        <div className="mt-28 mx-4  xl:mx-72">
          <h1 className="text-center text-xl xl:text-4xl font-semibold my-1 xl:my-3">
            Cara mudah install React JS dengan cepat
          </h1>
          <p className="text-gray-500 text-center text-sm xl:text-md mb-2">
            Author by Ainun | 1 January 2023
          </p>
          <div className="overflow-hidden flex justify-center w-full h-[400px] mb-4">
            <Image
              src={"https://picsum.photos/600/400"}
              width={600}
              height={400}
              alt="heade-img"
              className="object-cover rounded-sm w-full"
            />
          </div>
          <div className="my-20 w-full">
            <code className="code w-full">const a skdlkadlkalk \nasss</code>
          </div>
        </div>
      </div>
    </>
  );
}
