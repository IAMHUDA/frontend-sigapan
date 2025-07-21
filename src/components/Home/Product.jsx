import React, { useState } from "react";

import berasPremium from "../../assets/berasPremium.png";
import berasMedium from "../../assets/bMedium.png";
import gulaPasirCurah from "../../assets/gulaCurah.png";
import minyakPremium from "../../assets/minyakPremium.png";
import minyakSederhana from "../../assets/minyakSederhana.png";
import teriguSegitigaBiru from "../../assets/tepung.png";
import dagingSapi1 from "../../assets/Daging1.png";
import dagingSapi2 from "../../assets/Daging2.png";
import ayamRas from "../../assets/ayamRas.png";
import ayamKampung from "../../assets/ayamKampung.png";
import telurAyamNegeri from "../../assets/TelorNegri.png";
import telurAyamKampung from "../../assets/TelorKmpung.png";
import cabeMerahKeriting from "../../assets/CKeriting.png";
import cabeMerahBesar from "../../assets/CMBesar.png";
import cabeRawitMerah from "../../assets/CRMerah.png";
import cabeRawitHijau from "../../assets/CRHijau.png";
import bawangMerah from "../../assets/bMerah.png";
import bawangPutihSinco from "../../assets/bPutihHonan.png";
import bawangPutihKating from "../../assets/bPutihKating.png";
import susuDancow from "../../assets/SusuBubuk.png";
import susuBendera from "../../assets/sKntlManis.png";
import susuIndomilk from "../../assets/indomilk.png";
import garamBata from "../../assets/garamBata.png";
import garamHalus from "../../assets/garamHalus.png";
import kedelaiImpor from "../../assets/kedelaiImport.png";
import kedelaiLokal from "../../assets/kedelaiLokal.png";
import kacangTanah from "../../assets/KTanah.png";
import kacangHijau from "../../assets/KHijau.png";
import mieInstan from "../../assets/mie.png";
import ikanAsinTeri from "../../assets/iTeri.png";
import ikanKembung from "../../assets/iKembung.png";
import ketelaPohon from "../../assets/KetelaPohon.png";
import jagungPipil from "../../assets/Jagung.png";
import tomat from "../../assets/tomat.png";
import kol from "../../assets/kobis.png";
import minyakCurah from "../../assets/MinyakCurah.png";
import udangSedang from "../../assets/udang.png";
import tempe from "../../assets/tempe.png";
import tahuPutih from "../../assets/tahu.png";
import pisangAmbon from "../../assets/PisangAmbon.png";
import jerukLokal from "../../assets/JerukP.png";
import berasBulog from "../../assets/Bulog.png";
import bawangBombay from "../../assets/bBombay.png";
import sawiHijau from "../../assets/SawiHijau.png";
import kentang from "../../assets/Kentang.png";


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

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-2">Daftar Harga Bahan Pokok</h2>
      <p className="text-center text-gray-500 mb-6">Pantau pergerakan harga semua bahan pokok secara real-time</p>

      <div className="flex gap-2 mb-4 overflow-x-auto whitespace-nowrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setPage(1);
            }}
            className={`px-3 py-1 rounded-full text-sm transition-all duration-150 ${
              activeCategory === cat
                ? "bg-green-300 text-green-900 font-semibold"
                : "text-gray-600 hover:underline"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6">
        <select
          className="border rounded px-3 py-1 text-sm"
          value={priceFilter}
          onChange={(e) => {
            setPriceFilter(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Kondisi Harga</option>
          {priceConditions.map((cond, idx) => (
            <option key={idx} value={cond}>
              {cond}
            </option>
          ))}
        </select>
        <div className="flex gap-4 text-xs items-center text-gray-500">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
        {paginatedData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-center space-x-2">
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