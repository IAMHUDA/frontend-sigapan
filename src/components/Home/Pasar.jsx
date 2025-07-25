import { useState } from "react";
import pasarNiten from "../../assets/pasar/Niten.jpg";
import pasarJanten from "../../assets/pasar/Janten.jpg";
import pasarBarongan from "../../assets/pasar/Barongan.jpg";
import pasarBantul from "../../assets/pasar/Bantul.jpg";
import pasarImogiri from "../../assets/pasar/Imogiri.jpg";
import pasarPiyungan from "../../assets/pasar/Piyungan.jpg";
import pasarAngkruksari from "../../assets/pasar/Angkruksari.jpg";
import pasarTuri from "../../assets/pasar/Turi.jpg";
import pasarGumulan from "../../assets/pasar/Gumulan.jpg";
import pasarPijenan from "../../assets/pasar/Pijenan.jpg";
import pasarMangiran from "../../assets/pasar/Mangiran.jpg";
import pasarPleret from "../../assets/pasar/Pleret.jpg";
import pasarPundong from "../../assets/pasar/Pundong.jpg";
import pasarUnggasBantul from "../../assets/pasar/UnggasBantul.jpg";
import pasarHewanImogiri from "../../assets/pasar/HewanImogiri.jpg";
import PasarGatak from "../../assets/pasar/Gatak.jpg";
import { MapPin, X, Clock, Users, Building, Home, Trash2, Layout, Scan, Landmark } from "lucide-react";


const pasarCardList = [
  {
    id: 1,
    nama: "Pasar Niten",
    image: pasarNiten,
    
    alamat: "Jl. Niten, Bantul",
    jamBuka: "06.00 – 17.00 WIB (Setiap hari)",
    stats: {
      pedagang: 1007,
      los: 37,
      kios: 85,
      kantor: 1,
      mck: 2,
      bango: 30,
      tps: 1,
    },
  },
  {
    id: 2,
    nama: "Pasar Janten",
    image: pasarJanten,
    
    alamat: "Jl. Pasar Tradisional, Yogyakarta",
    jamBuka: "06.00 – 17.00 WIB (Setiap hari)",
    stats: {
      pedagang: 1007,
      los: 37,
      kios: 85,
      kantor: 1,
      mck: 2,
      bango: 30,
      tps: 1,
    },
  },
  {
    id: 3,
    nama: "Pasar Barongan",
    image: pasarBarongan,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 4,
    nama: "Pasar Bantul",
    image: pasarBantul,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 5,
    nama: "Pasar Imogiri",
    image: pasarImogiri,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 6,
    nama: "Pasar Piyungan",
    image: pasarPiyungan,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 7,
    nama: "Pasar Angkruksari",
    image: pasarAngkruksari,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 8,
    nama: "Pasar Turi",
    image: pasarTuri,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 9,
    nama: "Pasar Gumulan",
    image: pasarGumulan,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 10,
    nama: "Pasar Pijenan",
    image: pasarPijenan,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 11,
    nama: "Pasar Mangiran",
    image: pasarMangiran,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 12,
    nama: "Pasar Pleret",
    image: pasarPleret,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 13,
    nama: "Pasar Pundong",
    image: pasarPundong,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 14,
    nama: "Pasar Unggas Bantul",
    image: pasarUnggasBantul,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 15,
    nama: "Pasar Hewan Imogiri",
    image: pasarHewanImogiri,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
  {
    id: 16,
    nama: "Pasar Gatak",
    image: PasarGatak,
    
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",

    stats: {
      pedagang: 850,
      los: 25,
      kios: 60,
      kantor: 1,
      mck: 2,
      bango: 20,
      tps: 1,
    },
  },
];

const PasarCard = ({ pasar, onClick }) => {
  if (!pasar) return null;

  return (
    <div
      onClick={() => onClick?.(pasar)}
      className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
    >
      <div className="relative">
        <img
          src={pasar.image}
          alt={pasar.nama}
          className="w-full h-48 object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl text-gray-900 mb-2 truncate">{pasar.nama}</h3>
        <div className="flex items-center text-sm text-gray-700 mb-1">
          <MapPin className="w-4 h-4 text-green-700 mr-2 flex-shrink-0" />
          <span className="truncate">{pasar.alamat}</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <Clock className="w-4 h-4 text-green-700 mr-2 flex-shrink-0" />
          <span className="font-medium">{pasar.jamBuka}</span>
        </div>
      </div>
    </div>
  );
};

const PasarPopup = ({ pasar, onClose }) => {
  if (!pasar) return null;

  const statItems = [
    { icon: Users, label: "Pedagang", value: pasar.stats.pedagang },
    { icon: Layout, label: "Los", value: pasar.stats.los },
    { icon: Home, label: "Kios", value: pasar.stats.kios },
    { icon: Landmark, label: "Kantor", value: pasar.stats.kantor },
    { icon: Scan, label: "Kamar Mandi/WC", value: pasar.stats.mck },
    { icon: Building, label: "Bango", value: pasar.stats.bango },
    { icon: Trash2, label: "Tempat Sampah", value: pasar.stats.tps },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn border border-gray-200">
        <div className="relative">
          <img
            src={pasar.image}
            alt={pasar.nama}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="px-6 py-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {pasar.nama}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <MapPin className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-semibold text-gray-800">Alamat</p>
                <p className="text-gray-600 text-sm">{pasar.alamat}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-semibold text-gray-800">Jam Operasional</p>
                <p className="text-gray-600 text-sm font-medium">{pasar.jamBuka}</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-5 ">
            Statistik Pasar
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {statItems.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 text-center flex flex-col items-center"
              >
                <item.icon className="w-7 h-7 text-green-700 mb-2" />
                <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                <p className="text-sm font-medium text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default function PasarTradisional() {
  const [selectedPasar, setSelectedPasar] = useState(null);

  const handleCardClick = (pasar) => {
    setSelectedPasar(pasar);
  };

  const handleClosePopup = () => {
    setSelectedPasar(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">
            Jelajahi <span className="text-green-700">Pasar Tradisional</span> Kami
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Temukan informasi lengkap mengenai pasar-pasar tradisional di Yogyakarta —
            mulai dari lokasi, jam buka, hingga fasilitas yang tersedia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pasarCardList.map((pasar) => (
            <PasarCard
              key={pasar.id}
              pasar={pasar}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {selectedPasar && (
        <PasarPopup pasar={selectedPasar} onClose={handleClosePopup} />
      )}
    </div>
  );
}
