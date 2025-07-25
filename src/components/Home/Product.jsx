import { useState, useRef, useEffect } from "react";
import { ArrowRightLeft, Download, Calendar } from "lucide-react";
import berasPremium from "../../assets/bahan pokok/berasPremium.png";
import berasMedium from "../../assets/bahan pokok/bMedium.png";
import gulaPasirCurah from "../../assets/bahan pokok/gulaCurah.png";
import minyakPremium from "../../assets/bahan pokok/minyakPremium.png";
import minyakSederhana from "../../assets/bahan pokok/minyakSederhana.png";
import teriguSegitigaBiru from "../../assets/bahan pokok/tepung.png";
import dagingSapi1 from "../../assets/bahan pokok/Daging1.png";
import dagingSapi2 from "../../assets/bahan pokok/Daging2.png";
import ayamRas from "../../assets/bahan pokok/ayamRas.png";
import ayamKampung from "../../assets/bahan pokok/ayamKampung.png";
import telurAyamNegeri from "../../assets/bahan pokok/TelorNegri.png";
import telurAyamKampung from "../../assets/bahan pokok/TelorKmpung.png";
import cabeMerahKeriting from "../../assets/bahan pokok/CKeriting.png";
import cabeMerahBesar from "../../assets/bahan pokok/CMBesar.png";
import cabeRawitMerah from "../../assets/bahan pokok/CRMerah.png";
import cabeRawitHijau from "../../assets/bahan pokok/CRHijau.png";
import bawangMerah from "../../assets/bahan pokok/bMerah.png";
import bawangPutihSinco from "../../assets/bahan pokok/bPutihHonan.png";
import bawangPutihKating from "../../assets/bahan pokok/bPutihKating.png";
import susuDancow from "../../assets/bahan pokok/SusuBubuk.png";
import susuBendera from "../../assets/bahan pokok/sKntlManis.png";
import susuIndomilk from "../../assets/bahan pokok/indomilk.png";
import garamBata from "../../assets/bahan pokok/garamBata.png";
import garamHalus from "../../assets/bahan pokok/garamHalus.png";
import kedelaiImpor from "../../assets/bahan pokok/kedelaiImport.png";
import kedelaiLokal from "../../assets/bahan pokok/kedelaiLokal.png";
import kacangTanah from "../../assets/bahan pokok/KTanah.png";
import kacangHijau from "../../assets/bahan pokok/KHijau.png";
import mieInstan from "../../assets/bahan pokok/mie.png";
import ikanAsinTeri from "../../assets/bahan pokok/iTeri.png";
import ikanKembung from "../../assets/bahan pokok/iKembung.png";
import ketelaPohon from "../../assets/bahan pokok/KetelaPohon.png";
import jagungPipil from "../../assets/bahan pokok/Jagung.png";
import tomat from "../../assets/bahan pokok/tomat.png";
import kol from "../../assets/bahan pokok/kobis.png";
import minyakCurah from "../../assets/bahan pokok/MinyakCurah.png";
import udangSedang from "../../assets/bahan pokok/udang.png";
import tempe from "../../assets/bahan pokok/tempe.png";
import tahuPutih from "../../assets/bahan pokok/tahu.png";
import pisangAmbon from "../../assets/bahan pokok/PisangAmbon.png";
import jerukLokal from "../../assets/bahan pokok/JerukP.png";
import berasBulog from "../../assets/bahan pokok/Bulog.png";
import bawangBombay from "../../assets/bahan pokok/bBombay.png";
import sawiHijau from "../../assets/bahan pokok/SawiHijau.png";
import kentang from "../../assets/bahan pokok/Kentang.png";

const pasarNames = [
  "Pasar Niten",
  "Pasar Janten",
  "Pasar Barongan",
  "Pasar Bantul",
  "Pasar Imogiri",
  "Pasar Piyungan",
  "Pasar Angkruksari",
  "Pasar Turi",
  "Pasar Gumulan",
  "Pasar Pijenan",
  "Pasar Mangiran",
  "Pasar Pleret",
  "Pasar Pundong",
  "Pasar Unggas Bantul",
  "Pasar Hewan Imogiri",
];

const pasarOptions = ["Semua Pasar", ...pasarNames];

const itemsList = [
  { name: "Beras Premium", category: "Beras" },
  { name: "Beras Medium", category: "Beras" },
  { name: "Beras Bulog", category: "Beras" },

  { name: "Minyak Goreng Kemasan Premium", category: "Minyak" },
  { name: "Minyak goreng sederhana/minyakkita", category: "Minyak" },
  { name: "Minyak goreng curah", category: "Minyak" },

  { name: "Gula Pasir Curah", category: "Gula & Tepung" },
  { name: "Terigu Segitiga Biru", category: "Gula & Tepung" },
  { name: "Garam Yodium Bata", category: "Gula & Tepung" },
  { name: "Garam Yodium Halus", category: "Gula & Tepung" },

  { name: "Daging Sapi Kualitas 1", category: "Daging & Telur" },
  { name: "Daging Sapi Kualitas 2", category: "Daging & Telur" },
  { name: "Ayam Ras/Boiler", category: "Daging & Telur" },
  { name: "Daging Ayam Kampung", category: "Daging & Telur" },
  { name: "Telur Ayam Negeri", category: "Daging & Telur" },
  { name: "Telur Ayam Kampung", category: "Daging & Telur" },

  { name: "Cabe Merah Keriting", category: "Sayuran" },
  { name: "Cabe Merah Besar", category: "Sayuran" },
  { name: "Cabe Rawit Merah", category: "Sayuran" },
  { name: "Cabe Rawit Hijau", category: "Sayuran" },
  { name: "Bawang Merah", category: "Sayuran" },
  { name: "Bawang Putih Honan (Sinco)", category: "Sayuran" },
  { name: "Bawang Putih Kating", category: "Sayuran" },
  { name: "Tomat", category: "Sayuran" },
  { name: "Kol/Kobis", category: "Sayuran" },
  { name: "Sawi Hijau", category: "Sayuran" },
  { name: "Kentang", category: "Sayuran" },
  { name: "Bawang Bombay", category: "Sayuran" },

  { name: "Susu bubuk Setara Dancow Rasa Vanila", category: "Susu" },
  { name: "Susu Kental Manis Bendera", category: "Susu" },
  { name: "Susu Kental Manis Indomilk", category: "Susu" },

  { name: "kacang kedelai Impor", category: "Kacang-kacangan" },
  { name: "Kacang Kedelai Lokal", category: "Kacang-kacangan" },
  { name: "Kacang Tanah", category: "Kacang-kacangan" },
  { name: "Kacang Hijau", category: "Kacang-kacangan" },

  { name: "Mie Instan Rebus Setara Indomie", category: "Makanan Pokok" },
  { name: "Ketela Pohon", category: "Makanan Pokok" },
  { name: "Jagung Pipil Kering", category: "Makanan Pokok" },
  { name: "Tempe", category: "Makanan Pokok" },
  { name: "Tahu mentah putih", category: "Makanan Pokok" },

  { name: "Ikan Asin Teri", category: "Ikan & Seafood" },
  { name: "Ikan Kembung", category: "Ikan & Seafood" },
  { name: "Udang ukuran sedang", category: "Ikan & Seafood" },

  { name: "Pisang Ambon", category: "Buah-buahan" },
  { name: "Jeruk lokal", category: "Buah-buahan" },
];

const imageMap = {
  "Beras Premium": berasPremium,
  "Beras Medium": berasMedium,
  "Gula Pasir Curah": gulaPasirCurah,
  "Minyak Goreng Kemasan Premium": minyakPremium,
  "Minyak goreng sederhana/minyakkita": minyakSederhana,
  "Terigu Segitiga Biru": teriguSegitigaBiru,
  "Daging Sapi Kualitas 1": dagingSapi1,
  "Daging Sapi Kualitas 2": dagingSapi2,
  "Ayam Ras/Boiler": ayamRas,
  "Daging Ayam Kampung": ayamKampung,
  "Telur Ayam Negeri": telurAyamNegeri,
  "Telur Ayam Kampung": telurAyamKampung,
  "Cabe Merah Keriting": cabeMerahKeriting,
  "Cabe Merah Besar": cabeMerahBesar,
  "Cabe Rawit Merah": cabeRawitMerah,
  "Cabe Rawit Hijau": cabeRawitHijau,
  "Bawang Merah": bawangMerah,
  "Bawang Putih Honan (Sinco)": bawangPutihSinco,
  "Bawang Putih Kating": bawangPutihKating,
  "Susu bubuk Setara Dancow Rasa Vanila": susuDancow,
  "Susu Kental Manis Bendera": susuBendera,
  "Susu Kental Manis Indomilk": susuIndomilk,
  "Garam Yodium Bata": garamBata,
  "Garam Yodium Halus": garamHalus,
  "kacang kedelai Impor": kedelaiImpor,
  "Kacang Kedelai Lokal": kedelaiLokal,
  "Kacang Tanah": kacangTanah,
  "Kacang Hijau": kacangHijau,
  "Mie Instan Rebus Setara Indomie": mieInstan,
  "Ikan Asin Teri": ikanAsinTeri,
  "Ikan Kembung": ikanKembung,
  "Ketela Pohon": ketelaPohon,
  "Jagung Pipil Kering": jagungPipil,
  Tomat: tomat,
  "Kol/Kobis": kol,
  "Minyak goreng curah": minyakCurah,
  "Udang ukuran sedang": udangSedang,
  Tempe: tempe,
  "Tahu mentah putih": tahuPutih,
  "Pisang Ambon": pisangAmbon,
  "Jeruk lokal": jerukLokal,
  "Beras Bulog": berasBulog,
  "Bawang Bombay": bawangBombay,
  "Sawi Hijau": sawiHijau,
  Kentang: kentang,
};

const categories = ["Semua", ...Array.from(new Set(itemsList.map(item => item.category))).sort()];


const allData = itemsList.map((item, index) => {
  const randomPasar = pasarNames[Math.floor(Math.random() * pasarNames.length)];

  return {
    id: index,
    name: item.name,
    category: item.category,
    price: 10000 + index * 1000,
    image: imageMap[item.name],
    change: index % 3 === 0 ? "up" : index % 3 === 1 ? "down" : "same",
    percent: index % 3 === 0 ? "2.00%" : index % 3 === 1 ? "1.50%" : "0.00%",
    stock: `${Math.floor(Math.random() * 1000) + 100} Kg`,
    status: index % 4 === 0 ? "Terbatas" : "Tersedia",
    marketName: randomPasar,
  };
});


const ProductCard = ({ item }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
    <div className="bg-gray-50 px-4 py-6 flex justify-center items-center">
      <img
        src={item.image}
        alt={item.name}
        className="max-h-full max-w-full object-contain"
      />
    </div>

    <div className="px-4 pb-4 pt-2 text-center flex flex-col justify-between flex-grow">
      <h3 className="text-sm font-semibold text-gray-800 mb-1 leading-tight line-clamp-2">
        {item.name}
      </h3>

      <p className="text-green-700 text-base font-bold mb-2">
        Rp {item.price.toLocaleString()}{" "}
        <span className="text-xs text-gray-500 font-medium">/Kg</span>
      </p>

      <div className="text-xs font-medium flex justify-center gap-1.5">
        {item.change === "up" && (
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full flex items-center gap-1">
            ▲ {item.percent}
          </span>
        )}
        {item.change === "down" && (
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full flex items-center gap-1">
            ▼ {item.percent}
          </span>
        )}
        {item.change === "same" && (
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full flex items-center gap-1">
            — {item.percent}
          </span>
        )}
      </div>
    </div>
  </div>
);

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [priceFilter, setPriceFilter] = useState("");
  const [marketFilter, setMarketFilter] = useState("");
  const [page, setPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showTableView, setShowTableView] = useState(false);
  const dropdownRef = useRef(null);

  // Get current date
  const getCurrentDate = () => {
    const now = new Date();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    return `${dayName}, ${date} ${month} ${year}`;
  };

  // Export to Excel function
  const exportToExcel = () => {
    const dataToExport = filteredData.map((item, index) => ({
      'No': index + 1,
      'Komoditas': item.name,
      'Kategori': item.category,
      'Nama Pasar': item.marketName,
      'Status': item.status,
      'Stok': item.stock,
      'Harga (Rp)': item.price.toLocaleString()
    }));

    // Create CSV content
    const headers = Object.keys(dataToExport[0]);
    const csvContent = [
      headers.join(','),
      ...dataToExport.map(row => 
        headers.map(header => `"${row[header]}"`).join(',')
      )
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `Data_Stok_Pasar_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const filteredData = allData.filter((item) => {
    const matchCategory =
      activeCategory === "Semua" || item.category === activeCategory;
    
    const matchPrice = showTableView || !priceFilter ||
      (priceFilter === "Harga Naik" && item.change === "up") ||
      (priceFilter === "Harga Turun" && item.change === "down") ||
      (priceFilter === "Harga Tetap" && item.change === "same");
    
    const matchMarket = !showTableView || !marketFilter || item.marketName === marketFilter;
    
    return matchCategory && matchPrice && matchMarket;
  });

  const totalPages = Math.ceil(filteredData.length / 12);
  const paginatedData = filteredData.slice((page - 1) * 12, page * 12);

  const getCurrentFilterOptions = () => {
    if (showTableView) {
      return pasarOptions;
    } else {
      return categories;
    }
  };

  const getCurrentFilterValue = () => {
    if (showTableView) {
      return marketFilter || "Semua Pasar";
    } else {
      return activeCategory;
    }
  };

  const handleFilterChange = (value) => {
    if (showTableView) {
      setMarketFilter(value === "Semua Pasar" ? "" : value);
    } else {
      setActiveCategory(value);
    }
    setIsDropdownOpen(false);
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-inter">
      <h2 className="text-2xl font-bold text-center mb-2">
        Daftar Harga Bahan Pokok
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Pantau pergerakan harga semua bahan pokok secara real-time
      </p>

      <div className="flex flex-wrap gap-4 sm:justify-between items-start mb-6 mt-4">
        <div className="flex flex-wrap gap-4 items-start">
          {/* Dynamic Filter Dropdown */}
          <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            <button
              type="button"
              className="w-full sm:w-48 border border-gray-300 rounded px-3 py-2 text-sm bg-white text-left flex items-center justify-between shadow-sm hover:border-gray-400"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen ? "true" : "false"}
            >
              {getCurrentFilterValue()}
              <svg
                className="ml-2 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute z-20 mt-2 w-full sm:w-48 max-h-64 overflow-y-auto rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <ul className="py-1 text-sm text-gray-800 divide-y divide-gray-100">
                  {getCurrentFilterOptions().map((option) => {
                    const isActive = showTableView 
                      ? (marketFilter === (option === "Semua Pasar" ? "" : option))
                      : (activeCategory === option);
                    
                    return (
                      <li
                        key={option}
                        onClick={() => handleFilterChange(option)}
                        className={`block px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                          isActive ? "bg-green-100 font-semibold" : ""
                        }`}
                      >
                        {option}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => {
              setShowTableView(!showTableView);
              setPriceFilter("");
              setMarketFilter("");
              setActiveCategory("Semua");
              setPage(1);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md w-fit text-sm flex items-center gap-2 transition-all duration-150"
          >
            <ArrowRightLeft size={16} />
            {showTableView ? "Lihat Harga" : "Lihat Stok"}
          </button>

          {/* Export Excel Button - Only show in table view */}
          {showTableView && (
            <button
              onClick={exportToExcel}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md w-fit text-sm flex items-center gap-2 transition-all duration-150"
            >
              <Download size={16} />
              Export Excel
            </button>
          )}
        </div>

        {/* Date Display - Only show in table view */}
        {showTableView && (
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
            <Calendar size={16} />
            <span>Diperbarui: {getCurrentDate()}</span>
          </div>
        )}

        {/* Price Filter - Only show in grid view */}
        {!showTableView && (
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 text-sm text-gray-600">
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setPriceFilter("");
                setPage(1);
              }}
              className={`flex items-center gap-1 px-3 py-1 rounded-full hover:bg-gray-100 cursor-pointer transition ${
                !priceFilter ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              <span className="text-gray-600">⟳</span>
              <span>Semua</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setPriceFilter("Harga Naik");
                setPage(1);
              }}
              className={`flex items-center gap-1 px-3 py-1 rounded-full hover:bg-red-100 cursor-pointer transition ${
                priceFilter === "Harga Naik" ? "bg-red-200 font-semibold" : ""
              }`}
            >
              <span className="text-red-500">▲</span>
              <span>Harga Naik</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setPriceFilter("Harga Turun");
                setPage(1);
              }}
              className={`flex items-center gap-1 px-3 py-1 rounded-full hover:bg-green-100 cursor-pointer transition ${
                priceFilter === "Harga Turun" ? "bg-green-200 font-semibold" : ""
              }`}
            >
              <span className="text-green-500">▼</span>
              <span>Harga Turun</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setPriceFilter("Harga Tetap");
                setPage(1);
              }}
              className={`flex items-center gap-1 px-3 py-1 rounded-full hover:bg-blue-100 cursor-pointer transition ${
                priceFilter === "Harga Tetap" ? "bg-blue-200 font-semibold" : ""
              }`}
            >
              <span className="text-blue-500">—</span>
              <span>Harga Tetap</span>
            </div>
          </div>
        )}
      </div>

      {/* Conditional Rendering */}
      {!showTableView ? (
        // Grid View - Price Display
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {paginatedData.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        // Table View - Stock Display
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-md mb-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Data Stok Pasar</h3>
            <p className="text-sm text-gray-600">
              {marketFilter ? `Menampilkan data dari ${marketFilter}` : "Menampilkan data dari semua pasar"}
              {" - Total: "}
              <span className="font-semibold">{filteredData.length}</span> item
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm border-collapse">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="p-3 text-center">#</th>
                  <th className="p-3 text-left">Komoditas</th>
                  <th className="p-3 text-center">Nama Pasar</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-center">Stok</th>
                  <th className="p-3 text-center">Harga</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-t border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-3 text-center">
                      {(page - 1) * 12 + index + 1}
                    </td>
                    <td className="p-3 font-medium text-gray-800">
                      {item.name}
                    </td>
                    <td className="p-3 text-center text-gray-700">
                      {item.marketName}
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          item.status === "Tersedia"
                            ? "text-green-600 bg-green-100"
                            : "text-yellow-600 bg-yellow-100"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 text-center font-medium text-gray-800">
                      {item.stock}
                    </td>
                    <td className="p-3 text-center font-medium text-green-700">
                      Rp {item.price.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* No data message */}
      {filteredData.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">Tidak ada data yang sesuai dengan filter yang dipilih</p>
        </div>
      )}

      {/* Pagination */}
      {filteredData.length > 0 && (
        <div className="flex justify-center space-x-2 mt-15">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border rounded text-sm hover:bg-gray-50 disabled:opacity-50"
            disabled={page === 1}
          >
            {"<"}
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border rounded text-sm ${
                page === i + 1 ? "bg-green-500 text-white" : "hover:bg-gray-50"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 border rounded text-sm hover:bg-gray-50 disabled:opacity-50"
            disabled={page === totalPages}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};


export default ProductGrid;