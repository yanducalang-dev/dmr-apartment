import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/hero1.jpg"
        alt="DMR Dormitory House"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          DMR Apartment
        </h1>

        <p className="mt-6 text-xl text-gray-200 max-w-2xl">
          Affordable • Safe • Comfortable Living in Lapu-Lapu City
        </p>

        <Link
  href="/#rooms"
  className="inline-block mt-10 bg-[#36454F] hover:bg-[#6f7a7f] text-white px-6 py-3 rounded-lg transition"
>
  View Available Rooms
</Link>
      </div>
    </section>
  );
}