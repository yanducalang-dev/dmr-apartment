import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2f3437] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              DMR Apartment
            </h2>

            <p className="mt-4 text-sm leading-7">
              Providing affordable, clean, and secure apartment rentals in
              Marigondon, Lapu-Lapu City.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/#about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="/#rooms" className="hover:text-white">
                  Rooms
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Info
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>0949 155 2868</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>mhdr.business@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>
                  Amores Drive Village,
                  <br />
                  Marigondon, Lapu-Lapu City
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} DMR Apartment. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}