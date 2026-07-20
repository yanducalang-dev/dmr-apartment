import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Rooms from "@/components/Rooms";


export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Amenities />
      <Rooms />
    </>
  );
}