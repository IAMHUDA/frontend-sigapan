import { useState, useRef, useEffect } from "react";
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

const categories = [
  "Semua",
  ...Array.from(new Set(itemsList.map((item) => item.category))).sort(),
];

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
  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group hover:border-emerald-200 transform hover:-translate-y-0.5">
    {/* Product Image Section */}
    <div className="bg-white px-3 py-4 flex justify-center items-center h-36 sm:h-40 overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Product Details Section */}
    <div className="px-3 pb-3 pt-2 text-center flex flex-col justify-between flex-grow">
      <h3 className="text-sm font-semibold text-gray-800 mb-1 leading-tight line-clamp-2">
        {item.name}
      </h3>

      <p className="text-emerald-700 text-xl font-bold mb-2">
        Rp {item.price.toLocaleString("id-ID")}{" "}
        <span className="text-xs text-gray-500 font-medium">/Kg</span>
      </p>

      {/* Price Change Indicator */}
      <div className="text-xs font-medium flex justify-center gap-1.5">
        {item.change === "up" && (
          <span className="bg-red-50 text-red-600 px-2.5 py-1 rounded-full flex items-center gap-1 border border-red-200">
            <svg
              className="w-3 h-3 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4l-8 8h6v8h4v-8h6l-8-8z"></path>
            </svg>
            {item.percent}
          </span>
        )}
        {item.change === "down" && (
          <span className="bg-green-50 text-green-600 px-2.5 py-1 rounded-full flex items-center gap-1 border border-green-200">
            <svg
              className="w-3 h-3 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 20l8-8h-6V4h-4v8H4l8 8z"></path>
            </svg>
            {item.percent}
          </span>
        )}
        {item.change === "same" && (
          <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full flex items-center gap-1 border border-blue-200">
            <svg
              className="w-3 h-3 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 11h14v2H5z"></path>
            </svg>
            {item.percent}
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
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
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
      No: index + 1,
      Komoditas: item.name,
      Kategori: item.category,
      "Nama Pasar": item.marketName,
      Status: item.status,
      Stok: item.stock,
      "Harga (Rp)": item.price.toLocaleString(),
    }));

    // Create CSV content
    const headers = Object.keys(dataToExport[0]);
    const csvContent = [
      headers.join(","),
      ...dataToExport.map((row) =>
        headers.map((header) => `"${row[header]}"`).join(",")
      ),
    ].join("\n");

    // Create and download file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `Data_Stok_Pasar_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
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

    const matchPrice =
      showTableView ||
      !priceFilter ||
      (priceFilter === "Harga Naik" && item.change === "up") ||
      (priceFilter === "Harga Turun" && item.change === "down") ||
      (priceFilter === "Harga Tetap" && item.change === "same");

    const matchMarket = !marketFilter || item.marketName === marketFilter; // simplified as market filter only applies to table view and 'Semua Pasar' sets it to empty string

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-gray-50 min-h-screen">
      {/* Header with gradient background */}
      <div className="rounded-3xl p-6 sm:p-10 mb-8 sm:mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50 to-white opacity-50 pointer-events-none"></div>
        <div className="relative z-10 text-center">
          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-emerald-700 bg-emerald-100 rounded-full mb-3 shadow-sm transform hover:scale-105 transition duration-300 ease-in-out">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            UPDATE TERKINI
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3 leading-tight drop-shadow-sm">
            <span className="text-green-700">Harga Pangan</span> Pokok Bantul
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Pantau ketersediaan stok dan perubahan harga terkini di pasar
            tradisional Bantul.
          </p>
        </div>
      </div>

      {/* Control Panel */}
      <div className="rounded-xl p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-center w-full sm:w-auto">
            {/* Dynamic Filter Dropdown */}
            <div className="relative w-full sm:w-48" ref={dropdownRef}>
              <button
                type="button"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white text-left flex items-center justify-between shadow-sm hover:border-green-500 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="truncate">{getCurrentFilterValue()}</span>
                <svg
                  className="w-4 h-4 text-gray-500 ml-2 transform transition-transform duration-200"
                  style={{
                    transform: isDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-20 mt-1 w-full sm:w-48 max-h-64 overflow-y-auto rounded-lg bg-white shadow-xl border border-gray-200">
                  <ul className="py-1 text-sm text-gray-700">
                    {getCurrentFilterOptions().map((option) => {
                      const isActive = showTableView
                        ? marketFilter ===
                          (option === "Semua Pasar" ? "" : option)
                        : activeCategory === option;

                      return (
                        <li
                          key={option}
                          onClick={() => handleFilterChange(option)}
                          className={`px-4 py-2 cursor-pointer hover:bg-green-50 transition-colors ${
                            isActive
                              ? "bg-green-100 text-green-700 font-medium"
                              : ""
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
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg shadow-md text-sm flex items-center justify-center gap-2 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                ></path>
              </svg>
              {showTableView ? "Mode Harga" : "Mode Stok"}
            </button>

            {/* Export Excel Button */}
            {showTableView && (
              <button
                onClick={exportToExcel}
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-lg shadow-md text-sm flex items-center justify-center gap-2 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l3-3m-3 3l-3-3m-3 8h14c2.209 0 4-1.791 4-4V7c0-2.209-1.791-4-4-4H7c-2.209 0-4 1.791-4 4v7c0 2.209 1.791 4 4 4z"
                  ></path>
                </svg>
                Export Data
              </button>
            )}
          </div>

          {/* Date Display */}
          {showTableView && (
            <div className="flex items-center gap-2 text-sm text-gray-700 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 w-full sm:w-auto justify-center mt-3 sm:mt-0">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span className="font-medium">Update: {getCurrentDate()}</span>
            </div>
          )}

          {/* Price Filter */}
          {!showTableView && (
            <div className="flex flex-wrap justify-center sm:justify-end gap-2 text-sm mt-3 sm:mt-0 w-full sm:w-auto">
              {["Semua", "Harga Naik", "Harga Turun", "Harga Tetap"].map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setPriceFilter(filter === "Semua" ? "" : filter);
                      setPage(1);
                    }}
                    className={`px-3 py-1 rounded-lg flex items-center gap-1 transition ${
                      (filter === "Semua" && !priceFilter) ||
                      priceFilter === filter
                        ? getFilterStyle(filter, true)
                        : getFilterStyle(filter, false)
                    }`}
                  >
                    {filter === "Harga Naik" && (
                      <svg
                        className="w-4 h-4 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 4l-8 8h6v8h4v-8h6l-8-8z"></path>
                      </svg>
                    )}
                    {filter === "Harga Turun" && (
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 20l8-8h-6V4h-4v8H4l8 8z"></path>
                      </svg>
                    )}
                    {filter === "Harga Tetap" && (
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 11h14v2H5z"></path>
                      </svg>
                    )}
                    {filter}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      {!showTableView ? (
        // Grid View
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 mb-8">
          {paginatedData.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        // Table View
        <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden mb-8">
          <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-white">
            <h3 className="text-lg font-bold text-gray-800">Data Stok Pasar</h3>
            <p className="text-sm text-gray-600">
              {marketFilter
                ? `Menampilkan data dari ${marketFilter}`
                : "Menampilkan data dari semua pasar"}
              {" - Total "}
              <span className="font-bold text-green-700">
                {filteredData.length}
              </span>{" "}
              komoditas
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white uppercase text-xs">
                <tr>
                  <th className="p-3 text-center w-10 sm:w-12">#</th>
                  <th className="p-3 text-left min-w-[120px]">Komoditas</th>
                  <th className="p-3 text-left min-w-[20px]">Pasar</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-right">Stok</th>
                  {/* Added pr-4 for right padding in the header */}
                  <th className="p-3 text-right pr-4">Harga</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-green-50 transition-colors"
                  >
                    <td className="p-3 text-center text-gray-500 font-medium">
                      {(page - 1) * 12 + index + 1}
                    </td>
                    <td className="p-3 font-semibold text-gray-800">
                      {item.name}
                    </td>
                    <td className="p-3 text-gray-700">{item.marketName}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          item.status === "Tersedia"
                            ? "text-green-700 bg-green-100"
                            : "text-amber-700 bg-amber-100"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 text-right font-semibold text-gray-700 whitespace-nowrap">
                      {item.stock}
                    </td>
                    {/* Added pr-4 for right padding in the data cell */}
                    <td className="p-3 pr-4 text-right font-bold text-green-700 whitespace-nowrap">
                      Rp {item.price.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-6 sm:p-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-gray-300 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 sm:h-16 sm:w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">
              Data tidak ditemukan
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              Tidak ada data yang sesuai dengan filter yang Anda pilih
            </p>
            <button
              onClick={() => {
                setActiveCategory("Semua");
                setPriceFilter("");
                setMarketFilter("");
                setPage(1);
              }}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium transition-colors"
            >
              Reset Filter
            </button>
          </div>
        </div>
      )}

      {/* Pagination */}
      {filteredData.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white transition"
            disabled={page === 1}
          >
            {"< Sebelumnya"}
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => {
              // Logic to show a limited number of pagination buttons,
              // with "..." for skipped pages.
              if (
                totalPages <= 5 || // Show all if 5 or less pages
                i === 0 || // Always show first page
                i === totalPages - 1 || // Always show last page
                Math.abs(page - (i + 1)) <= 1 // Show current, prev, and next page
              ) {
                return (
                  <button
                    key={i + 1}
                    onClick={() => setPage(i + 1)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 border rounded-lg text-sm font-medium transition ${
                      page === i + 1
                        ? "bg-green-600 border-green-600 text-white"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              }
              // Add ellipsis if not showing the page and not already added
              if (
                (i === 1 && page > 3 && totalPages > 5) ||
                (i === totalPages - 2 &&
                  page < totalPages - 2 &&
                  totalPages > 5)
              ) {
                return (
                  <span
                    key={i + 1}
                    className="px-3 py-1.5 sm:py-2 text-gray-50"
                  >
                    ...
                  </span>
                );
              }
              return null;
            }).filter(Boolean)}{" "}
            {/* Filter out nulls from the array */}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white transition"
            disabled={page === totalPages}
          >
            {"Selanjutnya >"}
          </button>
        </div>
      )}
    </div>
  );
};

// Helper function for filter button styles
function getFilterStyle(filter, isActive) {
  const base = "border font-medium";
  if (!isActive)
    return `${base} border-gray-300 text-gray-600 hover:bg-gray-50`;

  switch (filter) {
    case "Harga Naik":
      return `${base} border-red-300 bg-red-100 text-red-700 hover:bg-red-50`;
    case "Harga Turun":
      return `${base} border-green-300 bg-green-100 text-green-700 hover:bg-green-50`;
    case "Harga Tetap":
      return `${base} border-blue-300 bg-blue-100 text-blue-700 hover:bg-blue-50`;
    default:
      return `${base} border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-50`;
  }
}

export default ProductGrid;
