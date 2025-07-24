import  { useState } from "react";
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
import { ArrowRight, MapPin, X, Clock, Users, Building, Home, Trash2} from "lucide-react";


const pasarCardList = [
  {
    id: 1,
    nama: "Pasar Niten",
    image: pasarNiten,
    kota: "Yogyakarta",
    alamat: "Jl. Niten, Bantul",
    jamBuka: "06.00 – 17.00 WIB (Setiap hari)",
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
    kota: "Yogyakarta",
    alamat: "Jl. Pasar Tradisional, Yogyakarta",
    jamBuka: "06.00 – 17.00 WIB (Setiap hari)",
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    
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
    kota: "Yogyakarta",
    alamat: "Jl. Barongan, Bantul",
    jamBuka: "05.00 – 16.00 WIB (Setiap hari)",
    
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
      className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      <div className="relative">
        <img
          src={pasar.image}
          alt={pasar.nama}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-800 truncate">{pasar.nama}</h3>
          <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4 text-red-500 mr-1 flex-shrink-0" />
          <span className="truncate">{pasar.kota}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 text-green-500 mr-1 flex-shrink-0" />
          <span className="text-xs">06.00 - 17.00 WIB</span>
        </div>
      </div>
    </div>
  );
};

const PasarPopup = ({ pasar, onClose }) => {
  if (!pasar) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white  max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={pasar.image}
            alt={pasar.nama}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{pasar.nama}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-800">
              <MapPin className="w-5 h-5 text-red-500 mr-2" />
              <div>
                <p className="font-medium">Alamat</p>
                <p className="text-sm">{pasar.alamat}</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-800">
              <Clock className="w-5 h-5 text-green-500 mr-2" />
              <div>
                <p className="font-medium">Jam Operasional</p>
                <p className="text-sm">{pasar.jamBuka}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Statistik Pasar</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-blue-50 ">
                <Users className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-2xl font-bold text-blue-600">{pasar.stats.pedagang}</p>
                <p className="text-xs text-gray-600">Pedagang</p>
              </div>
              
              <div className="text-center p-3 bg-green-50 ">
                <Building className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <p className="text-2xl font-bold text-green-600">{pasar.stats.los}</p>
                <p className="text-xs text-gray-600">Los</p>
              </div>
              
              <div className="text-center p-3 bg-purple-50 ">
                <Home className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                <p className="text-2xl font-bold text-purple-600">{pasar.stats.kios}</p>
                <p className="text-xs text-gray-600">Kios</p>
              </div>
              
              <div className="text-center p-3 bg-orange-50 ">
                <Trash2 className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                <p className="text-2xl font-bold text-orange-600">{pasar.stats.tps}</p>
                <p className="text-xs text-gray-600">TPS</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center p-3 bg-gray-50 ">
                <p className="text-lg font-bold text-gray-700">{pasar.stats.kantor}</p>
                <p className="text-xs text-gray-600">Kantor</p>
              </div>
              
              <div className="text-center p-3 bg-gray-50 ">
                <p className="text-lg font-bold text-gray-700">{pasar.stats.mck}</p>
                <p className="text-xs text-gray-600">MCK</p>
              </div>
              
              <div className="text-center p-3 bg-gray-50 ">
                <p className="text-lg font-bold text-gray-700">{pasar.stats.bango}</p>
                <p className="text-xs text-gray-600">Bango</p>
              </div>
            </div>
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-20">Pasar Tradisional</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <PasarPopup
          pasar={selectedPasar}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}
