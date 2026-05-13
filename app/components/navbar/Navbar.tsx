"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-blue-600">
        LATAH
      </h1>

      <div>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}