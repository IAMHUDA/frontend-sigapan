import { useState } from "react";
import {Clock, MapPin, Users, X } from "lucide-react";
import Produk from "../components/Home/Product";
import Stok from "../components/Home/Stok";
import Pasar from "../components/Home/Pasar";
import Carousel from "../components/home/Carousel";


// const HeroSection = () => {
//   return (
//     <div
//       className="w-full bg-cover bg-center flex items-center"
//       style={{ backgroundImage: `url(${heroBg})`, height: "650px" }}
//     >
//       <div className="bg-black/40 text-white p-8 max-w-xl ml-10 rounded-lg shadow-lg">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">
//           Selamat datang di SIGAPAN!
//         </h1>
//         <p className="text-sm md:text-base mb-6">
//           Temukan informasi harga pangan terbaru dan terpercaya di Kabupaten
//           Bantul. Disajikan oleh Dinas Koperasi, UKM, Perindustrian dan
//           Perdagangan. Data selalu akurat, transparan, dan diperbarui setiap
//           saat.
//         </p>
//         <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow flex items-center gap-2">
//           Lihat Daftar Harga <ArrowRight size={16} />
//         </button>
//       </div>
//     </div>
//   );
// };

const DashboardBantul = () => {
  const [selectedPasar, setSelectedPasar] = useState(null);

  return (
    <div className="min-h-screen mt-[95px] bg-gray-50">
      <div className="border-t border-gray-200"></div>

      {/* Hero Section */}
      <Carousel/>

      {/* Produk */}
      <div className="mt-8 px-4 md:px-10">
        <Produk />
      </div>

      <div className="border-t border-gray-200 mt-10"></div>

      {/* Stok Bahan Pokok
      <div className="mt-8 px-4 md:px-10">
        <Stok />
      </div> */}

      <div className="border-t border-gray-200 mt-10"></div>

      {/* Pasar */}
      <div className="mt-8 px-4 md:px-10">
        <Pasar onPasarClick={setSelectedPasar} />
      </div>

      {/* Modal Pasar Detail */}
      {selectedPasar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl">
            {/* Header Gambar */}
            <div className="relative">
              <img
                src={selectedPasar.image || ""}
                alt={selectedPasar.nama || "Pasar Bantul"}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Tombol Close */}
              <button
                onClick={() => setSelectedPasar(null)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white p-1 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badge Tipe Pasar */}
              <span className="absolute bottom-3 right-3 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                {selectedPasar.tipe}
              </span>
            </div>

            {/* Konten */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{selectedPasar.nama}</h2>
              <p className="text-gray-500 mb-4">{selectedPasar.nama}</p>

              {/* Lokasi */}
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <MapPin className="w-4 h-4 text-red-500" />
                {selectedPasar.alamat}
              </div>

              {/* Jam Buka */}
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <Clock className="w-4 h-4 text-green-500" />
                Buka: {selectedPasar.jamBuka}
              </div>

              {/* Jumlah Pedagang */}
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
                <Users className="w-4 h-4 text-gray-500" />
                {selectedPasar.stats?.pedagang?.toLocaleString() || 0}+ Pedagang
              </div>

              {/* Statistik */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600">
                <p>
                  Los: <strong>{selectedPasar.stats?.los || 0}</strong>
                </p>
                <p>
                  Kios: <strong>{selectedPasar.stats?.kios || 0}</strong>
                </p>
                <p>
                  Kantor: <strong>{selectedPasar.stats?.kantor || 0}</strong>
                </p>
                <p>
                  MCK: <strong>{selectedPasar.stats?.mck || 0}</strong>
                </p>
                <p>
                  Bango: <strong>{selectedPasar.stats?.bango || 0}</strong>
                </p>
                <p>
                  TPS: <strong>{selectedPasar.stats?.tps || 0}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardBantul;
