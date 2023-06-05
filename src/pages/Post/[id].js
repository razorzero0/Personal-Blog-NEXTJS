import Image from "next/image";
import materi from "../Materi/Materi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import HTMLReactParser from "html-react-parser";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  const [id, setId] = useState(0);
  useEffect(() => {
    if (router && router.query.id) {
      setId(router.query.id - 1);
    }
  }, [router]);

  return (
    <>
      <div className="flex flex-col">
        <Navbar />

        <div className="my-28 mx-4  xl:mx-72">
          <h1 className="text-center text-xl xl:text-4xl font-semibold my-1 xl:my-3">
            {router ? materi[id].judul : "loading..."}
          </h1>
          <p className="text-gray-500 text-center text-sm xl:text-md mb-2">
            {router ? materi[id].tanggal : "loading..."}
          </p>
          <div className="overflow-hidden flex justify-center w-full h-[400px] mb-4">
            <Image
              src={`https://source.unsplash.com/1200x1000/?${materi[id].kategori} + " progamming`}
              width={600}
              height={400}
              alt="heade-img"
              className="object-cover w-full rounded-md"
            />
          </div>
          <p className="text-gray-500 text-center text-sm xl:text-md mb-2">
            Author by {materi[id].penulis}
          </p>
          <div className="my-5 w-full text-justify">
            {HTMLReactParser(materi[id].isi)}
            <br />
            <SyntaxHighlighter
              style={atomOneDark}
              language={materi[id].kategori.toLowerCase}>
              {materi[id].syntax}
            </SyntaxHighlighter>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
