import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Stack() {
  return (
    <div className="my-16 md:mx-20 mx-2">
      <h1
        className="text-xl text-gray-800 font-bold text-center mb-10
      ">
        Tech Stack
      </h1>
      <Marquee
        className="  "
        gradient={true}
        gradientColor={[255, 255, 255]}
        speed={100}>
        <Image
          src={"/img/js.png"}
          alt="img"
          width={100}
          height={50}
          className="mx-10"
        />
        <div className=" h-full p-5">
          <Image
            src={"/next.svg"}
            alt="img"
            width={150}
            height={100}
            className=" mx-10 p-5"
          />
        </div>
        <Image
          src={"/img/html.png"}
          alt="img"
          width={100}
          height={50}
          className=" mx-10"
        />
        <Image
          src={"/img/git.png"}
          alt="img"
          width={100}
          height={50}
          className=" mx-10"
        />

        <Image
          src={"/img/fa.png"}
          alt="img"
          width={100}
          height={50}
          className=" mx-10"
        />
        <Image
          src={"/img/tailwind.png"}
          alt="img"
          width={100}
          height={50}
          className=" mx-10"
        />
        <div className="  ">
          <Image
            src={"/img/react.png"}
            alt="img"
            width={200}
            height={50}
            className=" mx-10 p-6 "
          />
        </div>
      </Marquee>
    </div>
  );
}
