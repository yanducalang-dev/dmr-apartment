"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#2f3437] shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon.jpg"
            alt="DMR Apartment"
            width={45}
            height={45}
            className="rounded-full"
          />

          <div>
            <h1 className="text-white font-bold text-xl">
              DMR Apartment
            </h1>
            <p className="text-gray-300 text-xs">
              
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/#about">About</Link>
          </li>

          <li>
            <Link href="/#rooms">Rooms</Link>
          </li>

          <li>
            <Link href="/#amenities">Amenities</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2f3437] border-t border-gray-700">

          <ul className="flex flex-col">

            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-white hover:bg-[#899499]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-white hover:bg-[#899499]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/#rooms"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-white hover:bg-[#899499]"
              >
                Rooms
              </Link>
            </li>

            <li>
              <Link
                href="/#amenities"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-white hover:bg-[#899499]"
              >
                Amenities
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-white hover:bg-[#899499]"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>
      )}
    </header>
  );
}