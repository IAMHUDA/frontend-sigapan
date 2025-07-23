import React, { useState } from "react";

const bahanPokok = [
  {
    nama: "Beras",
    jenis: "Premium & Medium",
    status: "Tersedia",
    stok: "2,450 Ton",
    harga: "Rp 12,500/kg",
    persen: 92,
    warna: "green",
  },
  {
    nama: "Gula Pasir",
    jenis: "Kristal Putih",
    status: "Terbatas",
    stok: "890 Ton",
    harga: "Rp 14,200/kg",
    persen: 60,
    warna: "yellow",
  },
  {
    nama: "Minyak Goreng",
    jenis: "Kemasan & Curah",
    status: "Tersedia",
    stok: "1,230 Ton",
    harga: "Rp 16,800/liter",
    persen: 78,
    warna: "green",
  },
  {
    nama: "Telur Ayam",
    jenis: "Segar",
    status: "Tersedia",
    stok: "45,600 kg",
    harga: "Rp 28,500/kg",
    persen: 92,
    warna: "green",
  },
  {
    nama: "Daging Sapi",
    jenis: "Segar",
    status: "Rendah",
    stok: "12,400 kg",
    harga: "Rp 135,000/kg",
    persen: 38,
    warna: "red",
  },
  {
    nama: "Cabai Merah",
    jenis: "Keriting & Besar",
    status: "Tersedia",
    stok: "8,750 kg",
    harga: "Rp 45,000/kg",
    persen: 70,
    warna: "green",
  },
];


// === HELPER ===
const getStatusColor = (status) =>
  ({
    Tersedia: "text-green-600",
    Terbatas: "text-yellow-600",
    Rendah: "text-red-600",
  }[status] || "text-gray-500");

const getBarColor = (warna) =>
  ({
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  }[warna] || "bg-gray-300");



const StokBahanPokok = () => (
  <div className="max-w-6xl mx-auto py-10 px-4 mt-20 mb-20">
    <h2 className="text-2xl font-bold text-center mb-2">
      Stok Bahan Pokok Hari Ini
    </h2>
    <p className="text-center text-gray-500 mb-8">
      Informasi terkini mengenai ketersediaan dan harga bahan pokok di seluruh
      Kabupaten Bantul
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bahanPokok.map((item, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md rounded-xl p-4 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-gray-800">
              {item.nama}
              <div className="text-sm text-gray-400 font-normal">
                {item.jenis}
              </div>
            </div>
            <div
              className={`text-sm font-semibold ${getStatusColor(item.status)}`}
            >
              {item.status}
            </div>
          </div>
          <div className="text-sm text-gray-500">Stok Tersedia</div>
          <div className="font-bold text-lg text-gray-800">{item.stok}</div>
          <div className="text-sm text-gray-500 mt-2">Harga Rata-rata</div>
          <div className="font-bold text-green-600 text-lg">{item.harga}</div>
          <div className="mt-4">
            <div className="text-xs text-gray-400 mb-1">
              {item.persen}% dari kebutuhan bulanan
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className={`h-2 rounded-full ${getBarColor(item.warna)}`}
                style={{ width: `${item.persen}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StokBahanPokok;