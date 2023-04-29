import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid-element">
        <Image
          src="https://blog.hubspot.com/hs-fs/hubfs/embed-codes.jpeg?width=595&height=400&name=embed-codes.jpeg"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt="img"
        />
      </div>
    </>
  );
}
