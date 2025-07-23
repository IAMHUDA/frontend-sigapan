import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';

const HargaPangan = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [priceFilter, setPriceFilter] = useState('Semua');
  const [marketFilter, setMarketFilter] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Categories
  const categories = [
    'Semua',
    'Beras',
    'Minyak Goreng',
    'Gula',
    'Terigu',
    'Daging',
    'Ayam',
    'Telur',
    'Cabai',
    'Bawang',
    'Susu',
    'Garam',
    'Kacang',
    'Mie Instan',
    'Ikan',
    'Umbi-umbian',
    'Sayuran',
    'Buah',
    'Lainnya'
  ];

  // Price filters
  const priceFilters = ['Semua', 'Harga Naik', 'Harga Turun', 'Harga Stabil'];

  // Market locations from the image
  const marketFilters = [
    'Semua',
    'Bantul',
    'Jodog ',
    'Sorobayan',
    'Niten ',
    'Pijenan',
    'Niten',
    'Gumulan',
    'Janten',
    'Hewan Pandak',
    'Janten',
    'Semampir',
    'Piyungan',
    'Gatak',
    'Sungapan',
    'Imogiri',
    'Pundong',
    'Turi',
    'Jejeran',
    'Angkrulsari',
    'Celep',
    'Pieret',
    'Barongan',
    'Panasan',
    'Hewan Imogiri',
    'Mangiran',
    'Dlingo',
    'Grogol',
    'Bendosari',
    'Unggas Bantul',
    'Koripan',
    'Ngipik',
    'Kiltikan Niten',
    'Jragan',
    'Sangkeh',
    'Hewan Pieret'
  ];

  // Complete list of products with categories
  const products = [
  // Beras
  { id: 1, name: 'Beras Premium', price: 15500, unit: '/kg', trend: 'up', change: 1.5, category: 'Beras', location: 'Jodog', image: '🌾' },
  { id: 2, name: 'Beras Medium', price: 12500, unit: '/kg', trend: 'stable', change: 0, category: 'Beras', location: 'Pijenan', image: '🌾' },
  { id: 3, name: 'Beras Bulog', price: 10500, unit: '/kg', trend: 'down', change: 2.0, category: 'Beras', location: 'Gumulan', image: '🌾' },
  
  // Minyak Goreng
  { id: 4, name: 'Minyak Goreng Premium', price: 18000, unit: '/liter', trend: 'up', change: 3.2, category: 'Minyak Goreng', location: 'Pieret', image: '🛢️' },
  { id: 5, name: 'Minyak Goreng Sederhana', price: 15000, unit: '/liter', trend: 'up', change: 2.5, category: 'Minyak Goreng', location: 'Dlingo', image: '🛢️' },
  { id: 6, name: 'Minyak Goreng Curah', price: 14000, unit: '/liter', trend: 'down', change: 1.0, category: 'Minyak Goreng', location: 'Grogol', image: '🛢️' },
  
  // Gula
  { id: 7, name: 'Gula Pasir Curah', price: 14500, unit: '/kg', trend: 'stable', change: 0, category: 'Gula', location: 'Grogol', image: '🍯' },
  { id: 8, name: 'Gula Pasir Kemasan', price: 16000, unit: '/kg', trend: 'up', change: 1.5, category: 'Gula', location: 'Hewan Pandak', image: '🍯' },
  
  // Daging
  { id: 9, name: 'Daging Sapi Kualitas 1', price: 125000, unit: '/kg', trend: 'up', change: 5.0, category: 'Daging', location: 'Jejeran', image: '🥩' },
  { id: 10, name: 'Daging Sapi Kualitas 2', price: 110000, unit: '/kg', trend: 'up', change: 3.0, category: 'Daging', location: 'Celep', image: '🥩' },
  { id: 11, name: 'Daging Kambing', price: 140000, unit: '/kg', trend: 'stable', change: 0, category: 'Daging', location: 'Panasan', image: '🥩' },
  
  // Ayam
  { id: 12, name: 'Ayam Ras', price: 35000, unit: '/kg', trend: 'down', change: 2.0, category: 'Ayam', location: 'Unggas Bantul', image: '🍗' },
  { id: 13, name: 'Ayam Kampung', price: 60000, unit: '/kg', trend: 'stable', change: 0, category: 'Ayam', location: 'Hewan Imogiri', image: '🍗' },
  
  // Telur
  { id: 14, name: 'Telur Ayam Negeri', price: 28500, unit: '/kg', trend: 'up', change: 2.0, category: 'Telur', location: 'Sorobayan', image: '🥚' },
  { id: 15, name: 'Telur Ayam Kampung', price: 35000, unit: '/kg', trend: 'stable', change: 0, category: 'Telur', location: 'Hewan Pieret', image: '🥚' },
  
  // Cabai
  { id: 16, name: 'Cabe Merah Keriting', price: 45000, unit: '/kg', trend: 'up', change: 10.0, category: 'Cabai', location: 'Gatak', image: '🌶️' },
  { id: 17, name: 'Cabe Merah Besar', price: 40000, unit: '/kg', trend: 'up', change: 8.0, category: 'Cabai', location: 'Sungapan', image: '🌶️' },
  { id: 18, name: 'Cabe Rawit Merah', price: 50000, unit: '/kg', trend: 'up', change: 12.0, category: 'Cabai', location: 'Koripan', image: '🌶️' },
  { id: 19, name: 'Cabe Rawit Hijau', price: 35000, unit: '/kg', trend: 'stable', change: 0, category: 'Cabai', location: 'Kiltikan Niten', image: '🌶️' },
  
  // Bawang
  { id: 20, name: 'Bawang Merah', price: 30000, unit: '/kg', trend: 'down', change: 5.0, category: 'Bawang', location: 'Turi', image: '🧅' },
  { id: 21, name: 'Bawang Putih', price: 35000, unit: '/kg', trend: 'stable', change: 0, category: 'Bawang', location: 'Pundong', image: '🧄' },
  { id: 22, name: 'Bawang Bombay', price: 25000, unit: '/kg', trend: 'down', change: 2.0, category: 'Bawang', location: 'Jragan', image: '🧅' },
  
  // Susu
  { id: 23, name: 'Susu Bubuk', price: 85000, unit: '/400g', trend: 'stable', change: 0, category: 'Susu', location: 'Semampir', image: '🥛' },
  { id: 24, name: 'Susu Kental Manis', price: 12000, unit: '/kaleng', trend: 'up', change: 3.0, category: 'Susu', location: 'Ngipik', image: '🥛' },
  
  // Ikan
  { id: 25, name: 'Ikan Kembung', price: 40000, unit: '/kg', trend: 'up', change: 3.0, category: 'Ikan', location: 'Bantul', image: '🐟' },
  { id: 26, name: 'Ikan Asin', price: 75000, unit: '/kg', trend: 'stable', change: 0, category: 'Ikan', location: 'Niten', image: '🐟' },
  
  // Sayuran
  { id: 27, name: 'Sawi Hijau', price: 10000, unit: '/kg', trend: 'stable', change: 0, category: 'Sayuran', location: 'Janten', image: '🥬' },
  { id: 28, name: 'Wortel', price: 15000, unit: '/kg', trend: 'down', change: 2.0, category: 'Sayuran', location: 'Bendosari', image: '🥕' },
  
  // Buah
  { id: 29, name: 'Pisang Ambon', price: 15000, unit: '/kg', trend: 'down', change: 2.0, category: 'Buah', location: 'Barongan', image: '🍌' },
  { id: 30, name: 'Jeruk Lokal', price: 20000, unit: '/kg', trend: 'up', change: 4.0, category: 'Buah', location: 'Sangkeh', image: '🍊' },
  
  // Lainnya
  { id: 31, name: 'Tempe', price: 8000, unit: '/papan', trend: 'stable', change: 0, category: 'Lainnya', location: 'Imogiri', image: '🫘' },
  { id: 32, name: 'Tahu', price: 6000, unit: '/potong', trend: 'up', change: 1.5, category: 'Lainnya', location: 'Angkrulsari', image: '🧈' }
];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <span className="text-2xl">↑</span>;
      case 'down':
        return <span className="text-2xl">↓</span>;
      default:
        return <span className="text-2xl">→</span>;
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up':
        return 'text-red-500';
      case 'down':
        return 'text-green-500';
      default:
        return 'text-blue-500';
    }
  };

  const formatPrice = (price) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriceFilter = priceFilter === 'Semua' || 
      (priceFilter === 'Harga Naik' && product.trend === 'up') ||
      (priceFilter === 'Harga Turun' && product.trend === 'down') ||
      (priceFilter === 'Harga Stabil' && product.trend === 'stable');
    const matchesMarketFilter = marketFilter === 'Semua' || product.location === marketFilter;
    
    return matchesCategory && matchesSearch && matchesPriceFilter && matchesMarketFilter;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Harga Pangan</h1>
        <p className="text-gray-600 text-lg">Pantau harga bahan pangan terkini di sekitar Anda</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          <span>Yogyakarta, Indonesia</span>
          <span className="ml-4">Update terakhir: {new Date().toLocaleDateString('id-ID')}</span>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Kategori:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-green-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Status Harga:</h3>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
              >
                {priceFilters.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </div>

            {/* Market Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Tempat Belanja:</h3>
              <select
                value={marketFilter}
                onChange={(e) => setMarketFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
              >
                {marketFilters.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="text-center mb-4">
              <div className="text-6xl mb-3">{product.image}</div>
              <h3 className="font-semibold text-gray-800 text-xl">{product.name}</h3>
              <p className="text-lg text-gray-500 mb-2">{product.location}</p>
            </div>

            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-gray-800 mb-1">
                {formatPrice(product.price)}
                <span className="text-lg font-normal text-gray-600">{product.unit}</span>
              </div>
            </div>

            <div className={`flex items-center justify-center gap-2 ${getTrendColor(product.trend)} text-2xl`}>
              {getTrendIcon(product.trend)}
              <span className="font-medium text-lg">
                {product.change > 0 ? `${product.change}%` : 'Stabil'}
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-lg text-gray-500">
                <span>Kategori:</span>
                <span className="font-medium">{product.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Products Found */}
      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Tidak ada produk yang ditemukan</h3>
          <p className="text-gray-600">Coba ubah filter pencarian Anda</p>
        </div>
      )}

      {/* Footer Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Informasi Harga Pangan</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Data harga pangan diambil dari berbagai sumber terpercaya termasuk pasar tradisional, 
            supermarket, dan toko modern. Harga dapat berubah sewaktu-waktu tergantung kondisi pasar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HargaPangan; 