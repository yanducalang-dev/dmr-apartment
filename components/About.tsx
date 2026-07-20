import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/hero.jpg"
            alt="DMR Dormitory House"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Welcome to DMR Dormitory House
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            DMR Dormitory House offers clean, safe, and affordable rooms
            for students, professionals, and long-term tenants in
            Lapu-Lapu City.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            We provide a secure environment with modern amenities,
            reliable facilities, and a welcoming community to make
            you feel at home.
          </p>

          <button className="mt-8 bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}