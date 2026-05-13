import Navbar from "./components/navbar/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          LATAH
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Lapor Aspirasi & Tata Kota Jember.
          Platform smart city untuk membantu masyarakat
          melaporkan masalah publik secara cepat,
          transparan, dan berbasis AI.
        </p>

        <a
          href="/login"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Mulai Sekarang
        </a>
      </section>
    </main>
  );
}