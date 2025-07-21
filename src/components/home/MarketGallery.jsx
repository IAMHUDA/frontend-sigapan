import { useState } from 'react';
import { MapPin, Clock, Users, X } from 'lucide-react';
import Pniten from '../../assets/pasar/pasar-niten.jpg';
import Pjanten from '../../assets/pasar/pasar-janten.jpg';
import Pbarongan from '../../assets/pasar/pasar-barongan.jpg';


const MarketGallery = () => {
  const [selectedMarket, setSelectedMarket] = useState(null);

  // Sample market data
  const markets = [
    {
      id: 1,
      name: 'Pasar Niten',
      subName: 'Pasar Niten',
      address: 'JL Works Ambientsteownig Gamping, Kalupolson Stenna, Dianeth Ishimawa, Yogyasaka 55254 Indonesia',
      stats: [
        { name: 'Pedagang', value: '1.007' },
        { name: 'Lei', value: '1.97' },
        { name: 'Kies', value: '1.95' },
        { name: 'Kantar', value: '1.1' },
        { name: 'MCK', value: '1.2' },
        { name: 'Rongo', value: '1.30' },
        { name: 'TFS', value: '1.1' }
      ],
      image: Pniten,
      category: 'Tradisional'
    },
    {
      id: 2,
      name: 'Pasar Janten',
      subName: 'Pasar Janten',
      description: 'Konsult is a light and elegant business template for freelancers, coaches and consultants. With a strong focus on clean aesthetics it serves as the perfect foundation for showcasing your business.',
      image: Pjanten,
      category: 'Tradisional'
    },
    {
      id: 3,
      name: 'Pasar Barongan',
      subName: 'Pasar Barongan',
      description: 'All articles about technology and business solutions for modern markets.',
      image: Pbarongan,
      category: 'Tradisional'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Pasar Tradisional</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {markets.map((market) => (
          <div 
            key={market.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedMarket(market)}
          >
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img 
                src={market.image} 
                alt={market.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{market.name}</h2>
                  <p className="text-gray-600">{market.subName}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {market.category}
                </span>
              </div>
              <div className="mt-4 flex items-center text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Yogyakarta</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Beautiful Popup Alert */}
      {selectedMarket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src={selectedMarket.image} 
                  alt={selectedMarket.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <button 
                onClick={() => setSelectedMarket(null)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedMarket.name}</h1>
                  <h2 className="text-xl text-gray-600 mt-1">{selectedMarket.subName}</h2>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {selectedMarket.category}
                </span>
              </div>
              
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-gray-500" />
                  <p className="text-gray-700">{selectedMarket.address || 'Jl. Pasar Tradisional, Yogyakarta'}</p>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 flex-shrink-0 text-gray-500" />
                  <p className="text-gray-700">Buka: 06.00 - 17.00 WIB (Setiap Hari)</p>
                </div>
                
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 flex-shrink-0 text-gray-500" />
                  <p className="text-gray-700">500+ Pedagang</p>
                </div>
              </div>
              
              {selectedMarket.stats && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Statistik Pasar</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {selectedMarket.stats.map((stat, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-500 text-sm">{stat.name}</p>
                        <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedMarket.description && (
                <div className="prose max-w-none text-gray-700">
                  <p>{selectedMarket.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketGallery;