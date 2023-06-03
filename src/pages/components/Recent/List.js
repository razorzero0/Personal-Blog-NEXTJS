import Image from "next/image";
import materi from "../../Materi/Materi";
import Link from "next/link";
export default function List({ data }) {
  return data.slice(0, 3).map((v) => {
    return (
      <Link key={v} href={`Post/${v.id}`}>
        <div className="flex gap-3 md:max-h-48 shadow-md rounded-sm p-2">
          <div className="overflow-hidden  h-full rounded-md   ">
            <Image
              src={"https://picsum.photos/400/250"}
              alt="gambar-article"
              width={500}
              height={250}
              className="h-full object-cover w-full"
            />
          </div>
          <div className="flex flex-col gap-1 xl:gap-3">
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
  });
}
