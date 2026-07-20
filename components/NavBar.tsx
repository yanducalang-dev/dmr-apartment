import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/icon.jpg"
    alt="DMR Apartment"
    width={50}
    height={50}
    className="rounded-full"
  />

  <div>
    <h1 className="text-xl font-bold text-white">
      DMR Apartment
    </h1>

  </div>
</Link>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#rooms">Rooms</Link></li>
          <li><Link href="/#amenities">Amenities</Link></li>
          <Link href="/contact">Contact</Link>
          
        </ul>
      </nav>
    </header>
  );
}