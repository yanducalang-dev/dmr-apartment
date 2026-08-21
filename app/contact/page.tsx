

"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();


    setSubmitted(true);

    event.currentTarget.reset();
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[360px] sm:h-[420px]">
        <Image
          src="/hero1.jpg"
          alt="DMR Dormitory House"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6">
          <p className="text-sm uppercase tracking-[3px] text-gray-200 sm:text-base sm:tracking-[6px]">
            DMR Dormitory House
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Contact Us
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Have questions or want to schedule a viewing? We&apos;re here to
            help. Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="relative z-10 -mt-16 mx-auto max-w-7xl px-4 pb-16 sm:-mt-24 sm:px-6 sm:pb-20">
        <div className="grid overflow-hidden shadow-xl lg:grid-cols-5">
          {/* Contact information */}
          <div className="bg-[#2f3437] p-6 text-white sm:p-8 lg:col-span-2 lg:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Contact Information
            </h2>

            <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">
              <div className="flex items-start gap-4">
                <Phone
                  className="mt-1 shrink-0 text-[#899499]"
                  size={22}
                />

                <div>
                  <h3 className="font-semibold">Phone</h3>

                  <a
                    href="tel:+639491552868"
                    className="mt-1 block text-gray-300 transition hover:text-white"
                  >
                    0949 155 2868
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail
                  className="mt-1 shrink-0 text-[#899499]"
                  size={22}
                />

                <div className="min-w-0">
                  <h3 className="font-semibold">Email</h3>

                  <a
                    href="mailto:mhdr.business@gmail.com"
                    className="mt-1 block break-all text-gray-300 transition hover:text-white"
                  >
                    mhdr.business@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 shrink-0 text-[#899499]"
                  size={22}
                />

                <div>
                  <h3 className="font-semibold">Address</h3>

                  <p className="mt-1 leading-relaxed text-gray-300">
                    Amores Drive Village
                    <br />
                    Ibabao-Gisi
                    <br />
                    Marigondon, Lapu-Lapu City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock
                  className="mt-1 shrink-0 text-[#899499]"
                  size={22}
                />

                <div>
                  <h3 className="font-semibold">Office Hours</h3>

                  <p className="mt-1 leading-relaxed text-gray-300">
                    Monday - Saturday
                    <br />
                    8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="bg-white p-6 sm:p-8 lg:col-span-3 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Send an Inquiry
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>

            {/* Success Message */}
            {submitted && (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                <CheckCircle className="mt-0.5 shrink-0" size={22} />

                <div>
                  <p className="font-semibold">
                    Inquiry submitted successfully!
                  </p>

                  <p className="mt-1 text-sm text-green-700">
                    Thank you for contacting us. We&apos;ll get back to you
                    shortly.
                  </p>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2"
            >
              <input
                required
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="name"
                className="w-full rounded-xl border-2 border-gray-400 p-4 text-gray-800 placeholder:text-gray-500 transition focus:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-200"
              />

              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                className="w-full rounded-xl border-2 border-gray-400 p-4 text-gray-800 placeholder:text-gray-500 transition focus:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-200"
              />

              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="tel"
                className="w-full rounded-xl border-2 border-gray-400 p-4 text-gray-800 placeholder:text-gray-500 transition focus:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-200"
              />

              <input
                required
                type="date"
                name="moveInDate"
                aria-label="Preferred Move-in Date"
                className="w-full rounded-xl border-2 border-gray-400 p-4 text-gray-800 transition focus:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-200"
              />

              <textarea
                required
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full resize-none rounded-xl border-2 border-gray-400 p-4 text-gray-800 placeholder:text-gray-500 transition focus:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-200 md:col-span-2"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-red-700 py-4 font-semibold text-white transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 md:col-span-2"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Amores+Drive+Village+Ibabao-Gisi+Marigondon+Lapu-Lapu+City&output=embed"
              title="DMR Dormitory House Location"
              className="h-[320px] w-full border-0 sm:h-[400px] lg:h-[500px]"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
