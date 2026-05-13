"use client"; // karena ada interaktivitas client (hover, dll)

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-white/80 dark:bg-primary-container/80 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-surface-variant/20 dark:border-outline-variant/10 shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max-width mx-auto">
          <div className="font-headline-md text-headline-md font-bold text-primary dark:text-on-primary-container tracking-tight">
            LATAH
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              className="text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary pb-1 font-headline-sm text-headline-sm"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 font-headline-sm text-headline-sm"
              href="#"
            >
              Transparency Map
            </a>
            <a
              className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 font-headline-sm text-headline-sm"
              href="#"
            >
              Reports
            </a>
            <a
              className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 font-headline-sm text-headline-sm"
              href="#"
            >
              Resources
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center px-6 py-2 bg-primary text-on-primary rounded-full hover:bg-primary/90 transition-all shadow-md font-label-caps text-label-caps">
              Quick Report
            </button>
            <div className="flex gap-2 text-primary dark:text-primary-fixed">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">
                notifications
              </span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">
                account_circle
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[819px] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Jember City Streets"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqx7nm2F3bCJcKpsA_ASjX80rnBy6fguzc59o_8j1ZK9HHzfiojWD-5unEtAG5RqZNk3FD9-Tcmk2OV5PjchdgZSXufWWIBzRxkWvk9TV4IT_RIzeYmALkp7P1fQphibG7MaR7oYm7GRactIXuucwfTDL1bSbhk9jlARBSAgpR6NW9UDmzh_oU5I2c6b8dNwdWZaoR9wXoyfMPQ1BHsnwkUrIxCcv-A7K27efutDPcYTQ_tC35D4X40zVC9IuzcTZ38PItIz2nkjU-"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-container-max-width mx-auto px-margin-desktop flex flex-col items-center text-center w-full">
          <h1 className="font-display-italic text-display-italic text-white max-w-4xl mb-8 leading-tight drop-shadow-md italic">
            Transparansi Kota, Respons Cepat untuk Jember
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mb-12 drop-shadow">
            Platform layanan digital terpadu untuk pelaporan masyarakat, pemantauan infrastruktur, dan tata kelola kota yang responsif.
          </p>
          {/* Glassmorphism Search Bar */}
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 flex items-center shadow-lg hover:bg-white/15 transition-all">
            <span className="material-symbols-outlined text-white ml-4">search</span>
            <input
              className="flex-1 bg-transparent border-none text-white placeholder-white/70 focus:ring-0 font-body-md px-4 py-3 outline-none"
              placeholder="Lacak status laporan Anda (Cth: LTH-2024-089)..."
              type="text"
            />
            <button className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-label-caps text-label-caps tracking-wider hover:shadow-lg transition-all">
              LACAK
            </button>
          </div>
        </div>
        {/* Curved Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative block w-full h-[60px] rotate-180"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-surface"
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              className="fill-surface"
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-51.24V0Z"
              opacity=".5"
            ></path>
            <path
              className="fill-surface"
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* How it Works & Stats */}
      <section className="relative w-full py-section-padding bg-surface overflow-hidden">
        <svg
          className="organic-blob top-0 left-[-10%] w-[40%]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="text-surface-container-low"
            d="M47.7,-57.2C59.4,-44.6,64.8,-26.4,66.8,-8.1C68.9,10.2,67.6,28.6,58.3,42.5C49,56.5,31.7,66,12.6,69.5C-6.5,73.1,-27.4,70.6,-43.3,59.3C-59.2,47.9,-70.2,27.7,-72.1,6.8C-74,-14.2,-66.8,-35.8,-53,-49.2C-39.1,-62.7,-19.6,-67.9,-1.3,-66.4C17,-64.8,36.1,-69.8,47.7,-57.2Z"
            fill="currentColor"
            transform="translate(100 100) scale(1.1)"
          ></path>
        </svg>
        <div className="max-w-container-max-width mx-auto px-margin-desktop relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              Proses Layanan Transparan
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Kami memastikan setiap laporan ditangani dengan standar layanan tinggi dan dapat dipantau secara real-time oleh publik.
            </p>
          </div>
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Steps (Span 8) */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-surface-variant/50 flex flex-col items-start hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">edit_document</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  1. Laporkan
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Kirimkan detail permasalahan infrastruktur atau layanan publik melalui portal cerdas kami.
                </p>
                <div className="absolute -bottom-4 -right-4 text-9xl text-surface-container-low font-display-italic font-bold opacity-30 select-none">
                  1
                </div>
              </div>
              {/* Step 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-surface-variant/50 flex flex-col items-start hover:shadow-md transition-shadow relative overflow-hidden group mt-4 sm:mt-8">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">share_location</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  2. Verifikasi
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Tim penindaklanjut memverifikasi dan mengalokasikan unit kerja terkait dalam waktu kurang dari 24 jam.
                </p>
                <div className="absolute -bottom-4 -right-4 text-9xl text-surface-container-low font-display-italic font-bold opacity-30 select-none">
                  2
                </div>
              </div>
              {/* Step 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-surface-variant/50 flex flex-col items-start hover:shadow-md transition-shadow relative overflow-hidden group mt-8 sm:mt-16">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  3. Tuntas
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Pantau progres penyelesaian hingga laporan dinyatakan selesai dengan bukti otentik.
                </p>
                <div className="absolute -bottom-4 -right-4 text-9xl text-surface-container-low font-display-italic font-bold opacity-30 select-none">
                  3
                </div>
              </div>
            </div>
            {/* Live Stats (Span 4) */}
            <div className="md:col-span-4 bg-primary text-on-primary rounded-2xl p-8 shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl z-0 pointer-events-none"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/30 rounded-full blur-3xl z-0"></div>
              <div className="relative z-10 mb-8">
                <h3 className="font-headline-sm text-headline-sm font-bold mb-1">
                  Dampak Nyata
                </h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                  Statistik penyelesaian laporan bulan ini.
                </p>
              </div>
              <div className="relative z-10 space-y-6">
                <div className="border-b border-primary-fixed-dim/20 pb-4">
                  <div className="font-display-lg text-display-lg text-secondary-fixed">
                    1,204
                  </div>
                  <div className="font-label-caps text-label-caps tracking-widest text-primary-fixed-dim uppercase mt-1">
                    Laporan Diselesaikan
                  </div>
                </div>
                <div className="border-b border-primary-fixed-dim/20 pb-4">
                  <div className="font-display-lg text-display-lg text-white">
                    98%
                  </div>
                  <div className="font-label-caps text-label-caps tracking-widest text-primary-fixed-dim uppercase mt-1">
                    Tingkat Respons 24 Jam
                  </div>
                </div>
                <div>
                  <div className="font-display-lg text-display-lg text-white">
                    45
                  </div>
                  <div className="font-label-caps text-label-caps tracking-widest text-primary-fixed-dim uppercase mt-1">
                    Unit Kerja Aktif
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reports Section */}
      <section className="relative w-full py-section-padding bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max-width mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-surface-variant/40 pb-6">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-2">
                Transparansi Laporan Publik
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Menampilkan contoh kasus yang telah berhasil ditangani oleh tim tata kota.
              </p>
            </div>
            <button className="mt-4 md:mt-0 flex items-center gap-2 text-primary font-label-caps text-label-caps hover:text-secondary transition-colors">
              LIHAT PETA TRANSPARANSI
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          {/* Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-surface-variant/30 flex flex-col">
              <div className="h-48 relative w-full bg-surface-variant">
                <img
                  alt="Pembangunan Jalan"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Q-eaOLItSk0_9y08tXbaWKzZBirfpJysR4Wbptvq71ECIedBXM7g23jfHtc3yFQsIg5ezdcvnPXPIZQccue-fDEkmjJ2PbCMBDu65CeD02WxRgjLMWSFBGk63iFdQzvc4xk3vwOb-80mR3T8TKlN5txxey8FNmEMUwYBskosV2foihVEJ9fMg0VI1wvdu8rLqDrP5pd5u3_lxTnONhFfQq8h7IZfh03cUim1a8QWvWIRKIbciq3sujqrxXR7qUTdOYdetzbNiOWN"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-on-primary px-3 py-1 rounded-full font-label-caps text-label-caps text-[10px] backdrop-blur-md flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  TUNTAS
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3 text-on-surface-variant font-label-caps text-[10px]">
                  <span>ID: LTH-24-001</span>
                  <span>2 Hari Lalu</span>
                </div>
                <h4 className="font-headline-sm text-[20px] text-primary mb-2 leading-tight">
                  Perbaikan Lubang Jalan Raya Sudirman
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">
                  Laporan warga mengenai jalan berlubang yang membahayakan pengendara telah selesai diperbaiki dengan pengaspalan ulang.
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-variant/50">
                  <div className="flex items-center gap-2 text-primary font-body-sm text-sm">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      location_on
                    </span>
                    Kec. Kaliwates
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-surface-variant/30 flex flex-col">
              <div className="h-48 relative w-full bg-surface-variant">
                <img
                  alt="Lampu Jalan"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIXPbxxSgzUnpIb49EDtz3qjkrZp8-wVO41iRinP25L-2Xv1MGHT9Gs2GRsAPrfGP2Z5eoVhbgA0InOEFevFwhrJRxMuumb9Lyh3kEYBEOXjrmKNLVcgIW77dmDY_ipZEAT1r3rHajajlaJ2ILcXg35I4_DGRlfs9QrmqD3FoLsnjeyDleA9XHPezHM6rsBcHE1YyxfMH_yHp6yz_2taBXZS9QAZ2dUwxdktlJkSUbzHT_H-c3xR-pn6O7CWyz5JC5rAFly5I1aPJX"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-on-primary px-3 py-1 rounded-full font-label-caps text-label-caps text-[10px] backdrop-blur-md flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  TUNTAS
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3 text-on-surface-variant font-label-caps text-[10px]">
                  <span>ID: LTH-24-042</span>
                  <span>5 Hari Lalu</span>
                </div>
                <h4 className="font-headline-sm text-[20px] text-primary mb-2 leading-tight">
                  Penerangan Jalan Umum Padam
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">
                  Penggantian 5 unit lampu PJU tipe LED di sepanjang jalan masuk kawasan perumahan untuk keamanan warga di malam hari.
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-variant/50">
                  <div className="flex items-center gap-2 text-primary font-body-sm text-sm">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      location_on
                    </span>
                    Kec. Sumbersari
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-surface-variant/30 flex flex-col">
              <div className="h-48 relative w-full bg-surface-variant">
                <img
                  alt="Taman Kota"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJjU-e6MVon25bhtCKWv5SWgSTzmzPKflW278X7qhcRePW4iWSUPK4Ypx3xNSsCObDhjZEOdIpT9ql56JcYSXuRrOGS01yz5FanOQIA0iUXH2Jwu7AjyYrBSphZf9Spo0t8MLu6mT9BhLD6yblA4oYonClwTRfxo1nSBff321aOakOBil6HOIuGS7xkUvnYDmrHMx5cQDbDeuyii91IDN-Efk3RBmFNPXoFxaySyobxPl3dxd_oXkWl8cvezP7N5OGvvh8iWDDluMT"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-on-primary px-3 py-1 rounded-full font-label-caps text-label-caps text-[10px] backdrop-blur-md flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  TUNTAS
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3 text-on-surface-variant font-label-caps text-[10px]">
                  <span>ID: LTH-24-115</span>
                  <span>1 Minggu Lalu</span>
                </div>
                <h4 className="font-headline-sm text-[20px] text-primary mb-2 leading-tight">
                  Pembersihan Area Taman Kota
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">
                  Tindak lanjut laporan penumpukan sampah pasca acara publik di alun-alun kota. Area telah dibersihkan sepenuhnya.
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-variant/50">
                  <div className="flex items-center gap-2 text-primary font-body-sm text-sm">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      location_on
                    </span>
                    Kec. Patrang
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-highest dark:bg-surface-container-lowest w-full py-12 bg-surface-container dark:bg-surface-container-low max-w-container-max-width mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-headline-sm text-headline-sm font-bold text-primary">
          LATAH
        </div>
        <div className="text-on-surface-variant font-body-sm text-body-sm text-center md:text-left">
          © 2024 LATAH — Jember Digital Governance. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a
            className="text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim underline underline-offset-4 transition-colors font-body-sm text-body-sm"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim underline underline-offset-4 transition-colors font-body-sm text-body-sm"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim underline underline-offset-4 transition-colors font-body-sm text-body-sm"
            href="#"
          >
            Public API
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim underline underline-offset-4 transition-colors font-body-sm text-body-sm"
            href="#"
          >
            Contact Support
          </a>
        </div>
      </footer>
    </>
  );
}