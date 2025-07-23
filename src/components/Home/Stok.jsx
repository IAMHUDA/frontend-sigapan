import { useState, useEffect } from 'react';
import { ClipboardList, CalendarDays, Info } from 'lucide-react';
import berasPremium from "../../assets/bahan-pokok/berasPremium.png";
import berasMedium from "../../assets/bahan-pokok/bMedium.png";
import gulaPasirCurah from "../../assets/bahan-pokok/gulaCurah.png";
import minyakPremium from "../../assets/bahan-pokok/minyakPremium.png";
import minyakSederhana from "../../assets/bahan-pokok/minyakSederhana.png";
import teriguSegitigaBiru from "../../assets/bahan-pokok/tepung.png";
import dagingSapi1 from "../../assets/bahan-pokok/Daging1.png";
import dagingSapi2 from "../../assets/bahan-pokok/Daging2.png";
import ayamRas from "../../assets/bahan-pokok/ayamRas.png";
import ayamKampung from "../../assets/bahan-pokok/ayamKampung.png";
import telurAyamNegeri from "../../assets/bahan-pokok/TelorNegri.png";
import telurAyamKampung from "../../assets/bahan-pokok/TelorKmpung.png";
import cabeMerahKeriting from "../../assets/bahan-pokok/CKeriting.png";
import cabeMerahBesar from "../../assets/bahan-pokok/CMBesar.png";
import cabeRawitMerah from "../../assets/bahan-pokok/CRMerah.png";
import cabeRawitHijau from "../../assets/bahan-pokok/CRHijau.png";
import bawangMerah from "../../assets/bahan-pokok/bMerah.png";
import bawangPutihSinco from "../../assets/bahan-pokok/bPutihHonan.png";
import bawangPutihKating from "../../assets/bahan-pokok/bPutihKating.png";
import susuDancow from "../../assets/bahan-pokok/SusuBubuk.png";
import susuBendera from "../../assets/bahan-pokok/sKntlManis.png";
import susuIndomilk from "../../assets/bahan-pokok/indomilk.png";
import garamBata from "../../assets/bahan-pokok/garamBata.png";
import garamHalus from "../../assets/bahan-pokok/garamHalus.png";
import kedelaiImpor from "../../assets/bahan-pokok/kedelaiImport.png";
import kedelaiLokal from "../../assets/bahan-pokok/kedelaiLokal.png";
import kacangTanah from "../../assets/bahan-pokok/KTanah.png";
import kacangHijau from "../../assets/bahan-pokok/KHijau.png";
import mieInstan from "../../assets/bahan-pokok/mie.png";
import ikanAsinTeri from "../../assets/bahan-pokok/iTeri.png";
import ikanKembung from "../../assets/bahan-pokok/iKembung.png";
import ketelaPohon from "../../assets/bahan-pokok/KetelaPohon.png";
import jagungPipil from "../../assets/bahan-pokok/Jagung.png";
import tomat from "../../assets/bahan-pokok/tomat.png";
import kol from "../../assets/bahan-pokok/kobis.png";
import minyakCurah from "../../assets/bahan-pokok/MinyakCurah.png";
import udangSedang from "../../assets/bahan-pokok/udang.png";
import tempe from "../../assets/bahan-pokok/tempe.png";
import tahuPutih from "../../assets/bahan-pokok/tahu.png";
import pisangAmbon from "../../assets/bahan-pokok/PisangAmbon.png";
import jerukLokal from "../../assets/bahan-pokok/JerukP.png";
import berasBulog from "../../assets/bahan-pokok/Bulog.png";
import bawangBombay from "../../assets/bahan-pokok/bBombay.png";
import sawiHijau from "../../assets/bahan-pokok/SawiHijau.png";
import kentang from "../../assets/bahan-pokok/Kentang.png";

const Stok = () => {
  const [selectedMarket, setSelectedMarket] = useState('Pasar Pijenan');

  // Map commodity names to their respective imported image paths
  const commodityImageMap = {
    'kentang': kentang,
    'sawiHijau': sawiHijau,
    'bawangBombay': bawangBombay,
    'berasBulog': berasBulog,
    'jerukLokal': jerukLokal,
    'pisangAmbon': pisangAmbon,
    'tahuPutih': tahuPutih,
    // Add more mappings for other commodities if you expand stockData
  };

  const [stockData, setStockData] = useState([]);

useEffect(() => {
  fetch('http://127.0.0.1:8000/api/harga-bapok')
    .then((res) => res.json())
    .then((data) => {
      const transformed = data.map((item) => {
        const namaKomoditas = item.bahan_pokok.nama;
        const harga = `Rp ${parseInt(item.harga).toLocaleString('id-ID')}/${item.bahan_pokok.satuan.toLowerCase()}`;
        const stock = `${parseInt(item.stok).toLocaleString('id-ID')} ${item.bahan_pokok.satuan}`;
        
        return {
          category: namaKomoditas,
          types: '-', // kamu bisa ganti kalau punya detail jenis
          status: 'Tersedia', // atau logika penentu status
          stock: stock,
          price: harga,
          imageKey: 'berasBulog', // sementara hardcode atau mapping dari nama
          statusColor: 'text-green-600' // atau tentukan dari stok
        };
      });

      setStockData(transformed);
    })
    .catch((err) => console.error('Error fetching stock data:', err));
}, []);



  // const stockData = [
  //   {
  //     category: 'Beras',
  //     types: 'Premium & Medium',
  //     status: 'Tersedia',
  //     stock: '2,450 Ton',
  //     price: 'Rp 12,500/kg',
  //     // Use the key that matches commodityImageMap
  //     imageKey: 'tahuPutih',
  //     statusColor: 'text-green-600'
  //   },
  //   {
  //     category: 'Gula Pasir',
  //     types: 'Kristal Putih',
  //     status: 'Terbatas',
  //     stock: '890 Ton',
  //     price: 'Rp 14,200/kg',
  //     imageKey: 'pisangAmbon',
  //     statusColor: 'text-yellow-600'
  //   },
  //   {
  //     category: 'Minyak Goreng',
  //     types: 'Kemasan & Curah',
  //     status: 'Tersedia',
  //     stock: '1,230 Ton',
  //     price: 'Rp 16,800/liter',
  //     imageKey: 'berasBulog',
  //     statusColor: 'text-green-600'
  //   },
  //   {
  //     category: 'Telur Ayam',
  //     types: 'Segar',
  //     status: 'Tersedia',
  //     stock: '45,600 kg',
  //     price: 'Rp 28,500/kg',
  //     imageKey: 'jerukLokal',
  //     statusColor: 'text-green-600'
  //   },
  //   {
  //     category: 'Daging Sapi',
  //     types: 'Segar & Rendah Lemak',
  //     status: 'Tersedia',
  //     stock: '12,400 kg',
  //     price: 'Rp 135,000/kg',
  //     imageKey: 'bawangBombay',
  //     statusColor: 'text-green-600'
  //   },
  //   {
  //     category: 'Cabai Merah',
  //     types: 'Keriting & Besar',
  //     status: 'Tersedia',
  //     stock: '8,750 kg',
  //     price: 'Rp 45,000/kg',
  //     imageKey: 'sawiHijau',
  //     statusColor: 'text-green-600'
  //   },
  //   {
  //     category: 'Tepung Terigu',
  //     types: 'Segitiga Biru',
  //     status: 'Tersedia',
  //     stock: '1,230 Ton',
  //     price: 'Rp 16,800/kg',
  //     imageKey: 'kentang',
  //     statusColor: 'text-green-600'
  //   }
  // ];

  const formattedDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      {/* Asumsi Anda memiliki gambar tekstur seperti 'wood-texture.png' atau 'leaf-pattern.png' */}
<div className="mb-8 p-4 md:p-6 bg-cover bg-center rounded-lg shadow-sm border border-green-200 flex items-start gap-4"
     style={{ backgroundImage: `url('../../assets/120.jpg')` }}> {/* Ganti dengan path gambar Anda */}
  {/* Overlay untuk keterbacaan teks */}
  <div className="absolute inset-0 bg-black/10 rounded-lg"></div> {/* Transparan overlay untuk teks */}

  {/* Garis vertikal */}
  <div className="relative z-10 border-l-4 border-green-600 h-full"></div> {/* Tambahkan relative z-10 */}
  
  <div className="relative z-10"> {/* Tambahkan relative z-10 agar teks di atas overlay */}
    <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md flex items-center gap-2"> {/* Teks putih dengan shadow agar terbaca di atas gambar */}
      <ClipboardList className="text-green-300" size={28} /> {/* Ikon warna hijau terang */}
      Stok Bahan Pokok Hari Ini
    </h1>
    <p className="text-base text-green-100 mt-1 drop-shadow-sm"> {/* Teks subjudul hijau sangat terang */}
      Informasi terkini ketersediaan & harga bahan pokok di Kabupaten Bantul
    </p>
  </div>
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
                  {/* Changed from <span> to <img> */}
                  {item.imageKey && commodityImageMap[item.imageKey] ? (
                    <img
                      src={commodityImageMap[item.imageKey]}
                      alt={item.category}
                      className="w-20 h-20 object-contain" // Adjust size as needed
                    />
                  ) : (
                    // Fallback if image not found (optional, can be empty or a default icon)
                    <Info size={24} className="text-gray-400" />
                  )}
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

export default Stok;