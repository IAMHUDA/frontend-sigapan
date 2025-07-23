import React, { useState } from 'react';
import { Info, CalendarDays, ClipboardList, ChevronsUpDown, ArrowRightLeft, FileDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const HargaStokPangan = () => {
  const [selectedMarket, setSelectedMarket] = useState('Pasar Pijenan');
  const [showStok, setShowStok] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const formattedDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const markets = ['Pasar Pijenan', 'Pasar Piyungan', 'Pasar Bantul', 'Pasar Imogiri', 'Pasar Niten'];

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

  const exportToExcel = () => {
    const dataToExport = stockData.map((item, index) => ({
      No: index + 1,
      Komoditas: item.category,
      Jenis: item.types,
      Status: item.status,
      Stok: item.stock,
      Pasar: selectedMarket
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data Stok');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, `data_stok_${selectedMarket.replace(/\s+/g, '_')}.xlsx`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <ClipboardList className="text-blue-600" size={30} />
          Harga & Stok Bahan Pokok
        </h1>
        <p className="text-gray-600 mt-2">
          Informasi terkini mengenai ketersediaan dan harga bahan pokok di seluruh Kabupaten Bantul.
        </p>
      </div>

      {/* Controls */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          {/* Dropdown Pasar */}
          <div className="relative">
            <label className="text-sm text-gray-700 font-medium mb-1 block">Pilih Pasar</label>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-56 flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white hover:border-blue-400 focus:outline-none"
            >
              {selectedMarket}
              <ChevronsUpDown className="w-4 h-4 ml-2 text-gray-500" />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                  {markets.map((market, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedMarket(market);
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700"
                    >
                      {market}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setShowStok(!showStok)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md w-fit text-sm flex items-center gap-2"
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRightLeft size={16} />
            {showStok ? 'Lihat Harga' : 'Lihat Stok'}
          </motion.button>

          {/* Export Button */}
          {showStok && (
            <motion.button
              onClick={exportToExcel}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md w-fit text-sm flex items-center gap-2"
              whileTap={{ scale: 0.95 }}
            >
              <FileDown size={16} />
              Export Excel
            </motion.button>
          )}
        </div>

        {/* Date */}
        <div className="flex items-center text-sm text-gray-500 mt-2 md:mt-0">
          <CalendarDays size={18} className="text-blue-600 mr-2" />
          <span>Diperbarui: {formattedDate}</span>
        </div>
      </div>

      {/* Data Container */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-md">
        <AnimatePresence mode="wait">
          {!showStok ? (
            <motion.div
              key="cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {stockData.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-50 p-4 rounded-lg shadow-sm border hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.category}</h3>
                      <p className="text-sm text-gray-500">{item.types}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    <strong>Harga:</strong> {item.price}
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    <strong>Stok:</strong> {item.stock}
                  </div>
                  <div className="text-sm font-medium">
                    <strong>Status:</strong>{' '}
                    <span className={`${item.statusColor} font-semibold`}>{item.status}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="overflow-x-auto"
            >
              <table className="w-full table-auto text-sm border-collapse">
                <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                  <tr>
                    <th className="p-3 text-center">#</th>
                    <th className="p-3 text-left">Komoditas</th>
                    <th className="p-3 text-center">Jenis</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-center">Stok</th>
                    <th className="p-3 text-center">Pasar</th>
                  </tr>
                </thead>
                <tbody>
                  {stockData.map((item, index) => (
                    <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="p-3 text-center">{index + 1}</td>
                      <td className="p-3 flex items-center gap-2 font-medium text-gray-800">
                        <span className="text-xl">{item.icon}</span>
                        {item.category}
                      </td>
                      <td className="p-3 text-center text-gray-700">{item.types}</td>
                      <td className="p-3 text-center">
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3 text-center font-medium text-gray-800">{item.stock}</td>
                      <td className="p-3 text-center text-gray-600">{selectedMarket}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info Box */}
      <div className="mt-20 bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-sm">
        <div className="flex items-start gap-4">
          <Info className="text-blue-600" size={24} />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Informasi Penting</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Data diperbarui setiap hari oleh Dinas Perdagangan Kabupaten Bantul. Harga dapat berbeda di setiap pasar tergantung lokasi dan kualitas produk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HargaStokPangan;
