import React from 'react';
import { Info, Check, AlertTriangle } from 'lucide-react';

const StokBahanPokok = () => {
  // Data stok bahan pokok
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
      status: 'Terkatas',
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <Info className="text-blue-600" size={32} />
          Stok Bahan Pokok Hari Ini
        </h1>
        <p className="text-xl text-gray-600">
          Informasi terkini mengenai ketersediaan dan harga bahan pokok di seluruh Kabupaten Bantul
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
          <div className="flex items-center gap-3">
            <Check className="text-green-600" size={24} />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">92%</h3>
              <p className="text-gray-600">Kebutuhan Bulanan Terpenuhi</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-200">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-yellow-600" size={24} />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">33%</h3>
              <p className="text-gray-600">Persediaan Tambahan</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
          <div className="flex items-center gap-3">
            <Info className="text-blue-600" size={24} />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">7 Hari</h3>
              <p className="text-gray-600">Update Terakhir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stock Items */}
      <div className="space-y-6">
        {stockData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{item.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{item.category}</h2>
                  <span className={`px-3 py-1 rounded-full text-lg font-medium ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-xl text-gray-600 mb-4">{item.types}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg text-gray-500 mb-1">Stok Tersedia</h3>
                    <p className="text-2xl font-semibold text-gray-800">{item.stock}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg text-gray-500 mb-1">Harga Rata-rata</h3>
                    <p className="text-2xl font-semibold text-gray-800">{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <div className="flex items-start gap-3">
          <Info className="text-blue-600 mt-1" size={20} />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Informasi Penting</h3>
            <p className="text-gray-600">
              Data diperbarui setiap hari oleh Dinas Perdagangan Kabupaten Bantul. 
              Harga dapat berbeda di setiap pasar tergantung lokasi dan kualitas produk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StokBahanPokok;