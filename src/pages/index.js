import Tes from "./components/tes";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Recent from "./Recent";
import Kategori from "./Kategori";
import Footer from "./components/Footer";
import Stack from "./Stack";
export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <Navbar />
        <Hero />
        <Recent />
        <Kategori title={"Javascript"} />
        <Kategori title={"PHP"} />
        <Stack />
        <Footer />
      </div>
    </>
  );
}
