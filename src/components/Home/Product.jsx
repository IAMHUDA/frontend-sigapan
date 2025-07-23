import React, { useState } from "react";

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

const categories = [
  "Semua",
  "Beras",
  "Minyak",
  "Bumbu Masak",
  "Daging",
  "Sayuran",
  "Susu",
  "Kacang",
  "Olahan",
  "Ikan",
  "Buah",
];
const priceConditions = ["Harga Naik", "Harga Turun", "Harga Tetap"];

const itemsList = [
  { name: "Beras Premium", category: "Beras" },
  { name: "Beras Medium", category: "Beras" },
  { name: "Beras Bulog", category: "Beras" },

  { name: "Minyak Goreng Kemasan Premium", category: "Minyak" },
  { name: "Minyak goreng sederhana/minyakkita", category: "Minyak" },
  { name: "Minyak goreng curah", category: "Minyak" },

  { name: "Gula Pasir Curah", category: "Bumbu Masak" },
  { name: "Terigu Segitiga Biru", category: "Bumbu Masak" },
  { name: "Garam Yodium Bata", category: "Bumbu Masak" },
  { name: "Garam Yodium Halus", category: "Bumbu Masak" },

  { name: "Daging Sapi Kualitas 1", category: "Daging" },
  { name: "Daging Sapi Kualitas 2", category: "Daging" },
  { name: "Ayam Ras/Boiler", category: "Daging" },
  { name: "Daging Ayam Kampung", category: "Daging" },
  { name: "Telur Ayam Negeri", category: "Daging" },
  { name: "Telur Ayam Kampung", category: "Daging" },

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

  { name: "kacang kedelai Impor", category: "Kacang" },
  { name: "Kacang Kedelai Lokal", category: "Kacang" },
  { name: "Kacang Tanah", category: "Kacang" },
  { name: "Kacang Hijau", category: "Kacang" },

  { name: "Mie Instan Rebus Setara Indomie", category: "Olahan" },
  { name: "Ketela Pohon", category: "Olahan" },
  { name: "Jagung Pipil Kering", category: "Olahan" },
  { name: "Tempe", category: "Olahan" },
  { name: "Tahu mentah putih", category: "Olahan" },

  { name: "Ikan Asin Teri", category: "Ikan" },
  { name: "Ikan Kembung", category: "Ikan" },
  { name: "Udang ukuran sedang", category: "Ikan" },

  { name: "Pisang Ambon", category: "Buah" },
  { name: "Jeruk lokal", category: "Buah" },
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

const allData = itemsList.map((item, index) => ({
  id: index,
  name: item.name,
  category: item.category,
  price: 10000 + index * 1000,
  image: imageMap[item.name],
  change: index % 3 === 0 ? "up" : index % 3 === 1 ? "down" : "same",
  percent: index % 3 === 0 ? "2.00%" : index % 3 === 1 ? "1.50%" : "0.00%",
}));

const ProductCard = ({ item }) => (
  <div className="bg-white shadow rounded-lg p-4 text-center">
    <img src={item.image} alt={item.name} className="object-contain h-24 mx-auto mb-2" />
    <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
    <p className="text-sm font-bold text-gray-800">Rp {item.price.toLocaleString()} /Kg</p>
    <div className="text-xs mt-1">
      <span
        className={
          item.change === "up"
            ? "text-red-500"
            : item.change === "down"
            ? "text-green-500"
            : "text-blue-500"
        }
      >
        {item.change !== "same" ? item.percent : "—"}
      </span>
    </div>
  </div>
);

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [priceFilter, setPriceFilter] = useState("");
  const [page, setPage] = useState(1);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const filteredData = allData.filter((item) => {
    const matchCategory = activeCategory === "Semua" || item.category === activeCategory;
    const matchPrice =
      !priceFilter ||
      (priceFilter === "Harga Naik" && item.change === "up") ||
      (priceFilter === "Harga Turun" && item.change === "down") ||
      (priceFilter === "Harga Tetap" && item.change === "same");
    return matchCategory && matchPrice;
  });

  const totalPages = Math.ceil(filteredData.length / 12);
  const paginatedData = filteredData.slice((page - 1) * 12, page * 12);

  const handlePriceFilterChange = (value) => {
    setPriceFilter(value);
    setPage(1);
    setIsFilterDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-2">Daftar Harga Bahan Pokok</h2>
      <p className="text-center text-gray-500 mb-6">Pantau pergerakan harga semua bahan pokok secara real-time</p>

      {/* Category Filter Buttons */}
      <div className="flex gap-2 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setPage(1);
              setIsFilterDropdownOpen(false); // Close dropdown on category change
            }}
            className={`px-3 py-1 rounded-full text-sm flex-shrink-0 transition-all duration-150 ${
              activeCategory === cat
                ? "bg-green-300 text-green-900 font-semibold"
                : "text-gray-600 hover:underline"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filter and Legend Section */}
      <div className="relative flex justify-between items-center mb-6 flex-wrap gap-2">
        {/* Toggle Button for Filter Dropdown (visible on small screens, desktop will use direct select) */}
        <button
          onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
          className="px-3 py-1 border rounded text-sm text-gray-700 bg-white hover:bg-gray-100 flex items-center gap-1 md:hidden w-full justify-between" // Added w-full and justify-between
        >
          {priceFilter || "Kondisi Harga"} {/* Display selected value or default text */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transform transition-transform ${isFilterDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Custom Filter Dropdown (for mobile) */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-lg z-10 p-2 md:hidden ${isFilterDropdownOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-1">
            <button
              className={`text-left px-3 py-2 text-sm w-full rounded-md ${!priceFilter ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50'}`}
              onClick={() => handlePriceFilterChange("")}
            >
              Kondisi Harga (Semua)
            </button>
            {priceConditions.map((cond, idx) => (
              <button
                key={idx}
                className={`text-left px-3 py-2 text-sm w-full rounded-md ${priceFilter === cond ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50'}`}
                onClick={() => handlePriceFilterChange(cond)}
              >
                {cond}
              </button>
            ))}
          </div>
        </div>

        {/* Original Select Dropdown (for desktop) */}
        <select
          className="hidden md:block border rounded px-3 py-1 text-sm" // Hidden on mobile, block on desktop
          value={priceFilter}
          onChange={(e) => handlePriceFilterChange(e.target.value)}
        >
          <option value="">Kondisi Harga</option>
          {priceConditions.map((cond, idx) => (
            <option key={idx} value={cond}>
              {cond}
            </option>
          ))}
        </select>

        {/* Legend (Visible on all screens, but adjusted for small screen layout) */}
        <div className="flex gap-2 sm:gap-4 text-xs items-center text-gray-500 mt-2 md:mt-0 flex-wrap justify-center md:justify-end flex-1 md:flex-none"> {/* Added flex-1 and md:flex-none for better wrapping on small screens */}
          <div className="flex items-center gap-1">
            <span className="text-red-500">▲</span>
            <span>Harga Naik</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-green-500">▼</span>
            <span>Harga Turun</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-blue-500">—</span>
            <span>Harga Tetap</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
        {paginatedData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-44">
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
    </div>
  );
};

export default ProductGrid;