import Tes from "./components/tes";
import { Navbar } from "./components/Navbar";
import Hero from "./Hero";
import Recent from "./Recent";
export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <Navbar />
        <Hero />
        <Recent />
      </div>
    </>
  );
}
