import {
  Wifi,
  ShieldCheck,
  Car,
  Droplets,
  WashingMachine,
  Zap,
} from "lucide-react";

const amenities = [
  {
    title: "Free Wi-Fi",
    icon: Wifi,
  },
  {
    title: "24/7 Security",
    icon: ShieldCheck,
  },
  {
    title: "Parking",
    icon: Car,
  },
  {
    title: "Water Supply",
    icon: Droplets,
  },
  {
    title: "Laundry Area",
    icon: WashingMachine,
  },
  {
    title: "Electricity",
    icon: Zap,
  },
];

export default function Amenities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Our Amenities
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Everything you need for a comfortable stay.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {amenities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-gray-100 rounded-xl p-8 text-center shadow hover:shadow-xl hover:-translate-y-2 transition"
              >
                <Icon
                  size={50}
                  className="mx-auto text-red-700"
                />

                <h3 className="mt-6 text-xl text-black font-semibold">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
          </div>
          
          
      </section>
      
      
  );
}