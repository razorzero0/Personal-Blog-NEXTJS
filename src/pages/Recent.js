import Image from "next/image";
import Link from "next/link";
import materi from "./Materi/Materi";
export default function Recent() {
  const post = materi.slice(0, 3);
  return (
    <>
      <div className="pt-20 mx-2 xl:mx-24 md:mx-10 my-8">
        <h1
          className="text-2xl text-gray-900 font-bold mb-8 text-center"
          id="recent">
          Recent Blog Post
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex-1 shadow-md p-2">
            <Link href={`Post/${post[0].id}`}>
              <div className="overflow-hidden  rounded-md ">
                <Image
                  src={"https://source.unsplash.com/800x600/?progamming"}
                  alt="gambar-article"
                  width={700}
                  height={700}
                />
              </div>
            </Link>
            <div className="flex flex-col my-3 gap-3 ">
              <p className="text-gray-500 ">
                {post[0].penulis} | {post[0].tanggal}
              </p>
              <h1 className="text-xl font-semibold">{post[0].judul}</h1>
              <p>{post[0].deskripsi}</p>
            </div>
            <div className="flex gap-3">
              <span className="tag-name">PHP</span>
              <span className="tag-name">IT</span>
              <span className="tag-name">Code</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col md:gap-0 gap-4 md:justify-between">
            {post.map((v) => {
              return (
                <Link key={v.id} href={`Post/${v.id}`}>
                  <div className="flex gap-3 md:max-h-48 shadow-md rounded-sm p-2">
                    <div className="overflow-hidden  h-full rounded-md   ">
                      <Image
                        src={`https://source.unsplash.com/400x300/?${v.kategori}`}
                        alt="gambar-article"
                        width={500}
                        height={400}
                        className="h-full object-cover w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-gray-500 text-xs">
                        {v.penulis} | {v.tanggal}
                      </p>
                      <h1 className="text-sm font-semibold">{v.judul}</h1>
                      <p className="text-sm">{v.deskripsi}</p>
                      <div className="md:flex gap-3 hidden">
                        <span className="tag-name">{v.kategori}</span>
                        <span className="tag-name">IT</span>
                        <span className="tag-name">Code</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
