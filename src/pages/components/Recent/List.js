import Image from "next/image";
export default function List() {
  return (
    <div className="  flex gap-3 md:max-h-48">
      <div className="overflow-hidden  h-full rounded-md   ">
        <Image
          src={"https://picsum.photos/400/250"}
          alt="gambar-article"
          width={400}
          height={250}
          className="h-full object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-1 xl:gap-3">
        <p className="text-gray-500 text-xs">Ainun | 1 January 2023</p>
        <h1 className="text-sm font-semibold">
          Perbandingan kecepatan antar PDO dan mysqli pada PHP
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className="md:flex gap-3 hidden">
          <span className="tag-name">PHP</span>
          <span className="tag-name">IT</span>
          <span className="tag-name">Code</span>
        </div>
      </div>
    </div>
  );
}
