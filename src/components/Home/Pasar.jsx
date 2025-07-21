import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import pasarNiten from "../../assets/Niten.jpg";
import pasarJanten from "../../assets/Janten.jpg";
import pasarBarongan from "../../assets/Barongan.jpg";
import pasarBantul from "../../assets/Bantul.jpg";
import pasarImogiri from "../../assets/Imogiri.jpg";
import pasarPiyungan from "../../assets/Piyungan.jpg";
import pasarAngkruksari from "../../assets/Angkruksari.jpg";
import pasarTuri from "../../assets/Turi.jpg";
import pasarGumulan from "../../assets/Gumulan.jpg";
import pasarPijenan from "../../assets/Pijenan.jpg";
import pasarMangiran from "../../assets/Mangiran.jpg";
import pasarPleret from "../../assets/Pleret.jpg";
import pasarPundong from "../../assets/Pundong.jpg";
import pasarUnggasBantul from "../../assets/UnggasBantul.jpg";
import pasarHewanImogiri from "../../assets/HewanImogiri.jpg";
import PasarGatak from "../../assets/Gatak.jpg";
import { ArrowRight, MapPin, X, Clock, Users } from "lucide-react";


const pasarCardList = [
  {
    id: 1,
    nama: "Pasar Niten",
    image: pasarNiten,
    kota: "Yogyakarta",
    alamat: "Jl. Niten, Bantul",
    jamBuka: "06.00 – 17.00 WIB (Setiap hari)",
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
    tipe: "Tradisional",
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
      className="bg-white shadow overflow-hidden hover:shadow-lg transition cursor-pointer flex flex-col justify-between rounded-md"
    >
      <img
        src={pasar.image}
        alt={pasar.nama}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-800">{pasar.nama}</h3>
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <MapPin className="w-4 h-4 text-red-500 mr-1" />
          {pasar.kota}
        </div>
      </div>
    </div>
  );
};

export default PasarCard;