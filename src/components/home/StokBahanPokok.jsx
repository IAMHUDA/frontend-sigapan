import React, { useState } from 'react';
import { ClipboardList, CalendarDays, Info } from 'lucide-react';

const StokBahanPokok = () => {
  const [selectedMarket, setSelectedMarket] = useState('Pasar Pijenan');

  const stockData = [
    {
      category: 'Beras',
      types: 'Premium & Medium',
      status: 'Tersedia',
      stock: '2,450 Ton',
      price: 'Rp 12,500/kg',
      icon: '🌾',
      statusColor: 'text-green-600'
    },
    {
      category: 'Gula Pasir',
      types: 'Kristal Putih',
      status: 'Terbatas',
      stock: '890 Ton',
      price: 'Rp 14,200/kg',
      icon: '🍯',
      statusColor: 'text-yellow-600'
    },
    {
      category: 'Minyak Goreng',
      types: 'Kemasan & Curah',
      status: 'Tersedia',
      stock: '1,230 Ton',
      price: 'Rp 16,800/liter',
      icon: '🛢️',
      statusColor: 'text-green-600'
    },
    {
      category: 'Telur Ayam',
      types: 'Segar',
      status: 'Tersedia',
      stock: '45,600 kg',
      price: 'Rp 28,500/kg',
      icon: '🥚',
      statusColor: 'text-green-600'
    },
    {
      category: 'Daging Sapi',
      types: 'Segar & Rendah Lemak',
      status: 'Tersedia',
      stock: '12,400 kg',
      price: 'Rp 135,000/kg',
      icon: '🥩',
      statusColor: 'text-green-600'
    },
    {
      category: 'Cabai Merah',
      types: 'Keriting & Besar',
      status: 'Tersedia',
      stock: '8,750 kg',
      price: 'Rp 45,000/kg',
      icon: '🌶️',
      statusColor: 'text-green-600'
    },
    {
      category: 'Tepung Terigu',
      types: 'Segitiga Biru',
      status: 'Tersedia',
      stock: '1,230 Ton',
      price: 'Rp 16,800/kg',
      icon: '🌾',
      statusColor: 'text-green-600'
    }
  ];

  const formattedDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-15 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <ClipboardList className="text-blue-600" size={32} />
          Stok Bahan Pokok Hari Ini
        </h1>
        <p className="text-xl text-gray-600">
          Informasi terkini mengenai ketersediaan dan harga bahan pokok di seluruh Kabupaten Bantul
        </p>
      </div>

      {/* Dropdown + Tanggal */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <label htmlFor="market-select" className="block text-sm text-gray-700 font-medium mb-1">
            Pilih Pasar
          </label>
          <select
            id="market-select"
            value={selectedMarket}
            onChange={(e) => setSelectedMarket(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Pasar Pijenan">Pasar Pijenan</option>
            <option value="Pasar Piyungan">Pasar Piyungan</option>
            <option value="Pasar Bantul">Pasar Bantul</option>
            <option value="Pasar Imogiri">Pasar Imogiri</option>
            <option value="Pasar Niten">Pasar Niten</option>
          </select>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <CalendarDays size={18} className="text-blue-600 mr-2" />
          <span>Diperbarui: {formattedDate}</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 bg-white shadow-sm rounded-lg text-base">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-4 text-center">#</th>
              <th className="p-4 text-left">Komoditas</th>
              <th className="p-4 text-center">Jenis</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Stok</th>
              <th className="p-4 text-center">Harga</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="p-4 text-center">{index + 1}</td>
                <td className="p-4 whitespace-nowrap flex items-center gap-2 font-medium text-left">
                  <span className="text-xl">{item.icon}</span>
                  {item.category}
                </td>
                <td className="p-4 text-center">{item.types}</td>
                <td className="p-4 text-center">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-center font-semibold">{item.stock}</td>
                <td className="p-4 text-center font-semibold">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <div className="mt-20 bg-blue-100 p-6 rounded-md border-l-4 border-blue-500">
  <div className="flex items-start gap-4">
    <Info className="text-blue-700 mt-1 flex-shrink-0" size={24} />
    <div>
      <h3 className="text-lg font-semibold text-blue-800 mb-1">Informasi Penting</h3>
      <p className="text-gray-800 leading-relaxed">
        Data ini diperbarui setiap hari oleh <span className="font-medium">Dinas Perdagangan Kabupaten Bantul</span>.
        Harga yang tercantum bersifat indikatif dan dapat berbeda di masing-masing pasar, tergantung lokasi serta kualitas produk.
      </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default StokBahanPokok;
