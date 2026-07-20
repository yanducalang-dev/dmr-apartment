import { rooms } from "@/data/rooms";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">

        <div className="relative h-[500px] rounded-xl overflow-hidden">
          <Image
            src={room.image}
            alt={room.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold">
            {room.title}
          </h1>

          <p className="text-2xl text-[#899499] mt-4">
            {room.price}
          </p>

          <p className="mt-8 text-gray-600 leading-8">
            {room.description}
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Features
          </h2>

          <ul className="mt-4 space-y-3">
            {room.features.map((feature) => (
              <li key={feature}>
                ✔ {feature}
              </li>
            ))}
          </ul>

          <button className="mt-10 bg-[#899499] hover:bg-[#6f7a7f] text-white px-8 py-4 rounded-lg transition">
            Book Now
          </button>
        </div>

      </div>
    </main>
  );
}