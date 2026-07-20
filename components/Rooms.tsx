import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/data/rooms";



export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Available Rooms
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Choose the room that fits your lifestyle.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {room.title}
                </h3>

                <p className="text-[#899499] font-semibold mt-2">
                  {room.price}
                </p>

                <ul className="mt-4 space-y-2 text-gray-600">
                  {room.features.map((feature) => (
                    <li key={feature}>✔ {feature}</li>
                  ))}
                </ul>

                      
                      <Link
                    href={`/rooms/${room.slug}`}
                    className="block text-center mt-6 w-full bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
                    >
                    View Details
                    </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}