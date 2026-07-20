import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="bg-white">

      {/* Header */}
      <section className="relative h-[420px]">
  <Image
    src="/hero1.jpg"
    alt="DMR Dormitory House"
    fill
    priority
    className="object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
    <p className="uppercase tracking-[6px] text-gray-200">
      DMR Dormitory House
    </p>

    <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white">
      Contact Us
    </h1>

    <p className="mt-5 max-w-2xl text-lg text-gray-200">
      Have questions or want to schedule a viewing? We're here to help.
      Get in touch with us today.
    </p>
  </div>
</section>
       

      {/* Content */}
      <section className="-mt-24 relative z-10 max-w-7xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-5">

          {/* Contact Card */}
          <div className="lg:col-span-2 bg-[#2f3437] text-white  p-10 shadow-xl">

            <h2 className="text-3xl font-bold">
              Contact Information
            </h2>

            <div className="space-y-8 mt-10">

              <div className="flex gap-4">
                <Phone className="text-[#899499]" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">
                    0949 155 2868
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#899499]" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">
                    mhdr.business@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-[#899499]" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-300">
                    Amores Drive Village<br />
                    Ibabao-Gisi<br />
                    Marigondon, Lapu-Lapu City
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#899499]" />
                <div>
                  <h3 className="font-semibold">Office Hours</h3>
                  <p className="text-gray-300">
                    Monday - Saturday
                    <br />
                    8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

            </div>

            

          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white  shadow-xl p-10">

            <h2 className="text-3xl font-bold text-gray-800">
              Send an Inquiry
            </h2>

            <p className="text-gray-500 mt-3">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form className="grid md:grid-cols-2 gap-6 mt-8">

              <input
                type="text"
                placeholder="Full Name"
               className="w-full border-2 border-gray-400 rounded-xl p-4 text-gray-800 placeholder:text-gray-500 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border-2 border-gray-400 rounded-xl p-4 text-gray-800 placeholder:text-gray-500 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border-2 border-gray-400 rounded-xl p-4 text-gray-800 placeholder:text-gray-500 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition"
              />

              <input
                type="text"
                placeholder="Preferred Move-in Date"
                className="w-full border-2 border-gray-400 rounded-xl p-4 text-gray-800 placeholder:text-gray-500 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition"
              />

              <textarea
                placeholder="Message"
                className="w-full border-2 border-gray-400 rounded-xl p-4 text-gray-800 placeholder:text-gray-500 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition"
              ></textarea>

              <button
                className="md:col-span-2 col-6 bg-red-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Map */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-2xl overflow-hidden shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=Amores+Drive+Village+Ibabao-Gisi+Marigondon+Lapu-Lapu+City&output=embed"
              width="100%"
              height="500"
              loading="lazy"
            />

          </div>

        </div>

      </section>

    </main>
  );
}