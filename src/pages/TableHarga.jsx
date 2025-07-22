import React, { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, MapPin, Calendar, Filter } from "lucide-react";
import ayamKampung from "../assets/bahan-pokok/ayamKampung.png";
import { MdDelete } from "react-icons/md";

const tanggalRange = [
	"2025-07-14",
	"2025-07-15",
	"2025-07-16",
	"2025-07-17",
	"2025-07-18",
	"2025-07-19",
	"2025-07-20",
	"2025-07-21",
];

const dataBarang = [
	{
		nama: "Beras Premium",
		image: ayamKampung,
		alamatPasar: "Pasar Pijenan, Sleman",
		harga: [
			"13000",
			"13000",
			"13000",
			"13500",
			"13500",
			"13500",
			null,
			"13500",
		],
	},
	{
		nama: "Beras Medium",
		image: ayamKampung,
		alamatPasar: "Pasar Beringharjo, Yogyakarta",
		harga: [
			"12000",
			"12500",
			"12500",
			"13000",
			"13000",
			"13000",
			null,
			"13000",
		],
	},
	{
		nama: "Gula Pasir Curah",
		image: ayamKampung,
		alamatPasar: "Pasar Pijenan, Sleman",
		harga: [
			"17000",
			"17000",
			"12500",
			"17000",
			"17000",
			"17000",
			null,
			"17000",
		],
	},
	{
		nama: "Minyak Goreng Kemasan Premium",
		image: ayamKampung,
		alamatPasar: "Pasar Klitikan, Bantul",
		harga: [
			"21000",
			"21000",
			"21000",
			"21000",
			"21000",
			"21000",
			null,
			"21000",
		],
	},
	{
		nama: "Minyak goreng sederhana/minyakkita",
		image: ayamKampung,
		alamatPasar: "Pasar Beringharjo, Yogyakarta",
		harga: [
			"17000",
			"17000",
			"17000",
			"17000",
			"17000",
			"17000",
			null,
			"17000",
		],
	},
	{
		nama: "Terigu Segitiga Biru",
		image: ayamKampung,
		alamatPasar: "Pasar Pijenan, Sleman",
		harga: [
			"12000",
			"12000",
			"12000",
			"12000",
			"12000",
			"12000",
			null,
			"12000",
		],
	},
	{
		nama: "Daging Sapi Kualitas 1",
		image: ayamKampung,
		alamatPasar: "Pasar Klitikan, Bantul",
		harga: [
			"135000",
			"135000",
			"135000",
			"135000",
			"135000",
			null,
			null,
			"135000",
		],
	},
	{
		nama: "Daging Sapi Kualitas 2",
		image: ayamKampung,
		alamatPasar: "Pasar Beringharjo, Yogyakarta",
		harga: [null, null, null, null, null, null, null, null],
	},
	{
		nama: "Ayam Ras/Boiler",
		image: ayamKampung,
		alamatPasar: "Pasar Pijenan, Sleman",
		harga: [
			"30000",
			"30000",
			"30000",
			"30000",
			"30000",
			"30000",
			null,
			"30000",
		],
	},
];

export default function TableHarga() {
	const [currentPage, setCurrentPage] = useState(1);
	const [sortBy, setSortBy] = useState("");
	const [sortOrder, setSortOrder] = useState("asc");
	const [filterPasar, setFilterPasar] = useState("");
	const [filterKomoditas, setFilterKomoditas] = useState("");
	const [dateStart, setDateStart] = useState("");
	const [dateEnd, setDateEnd] = useState("");
	const itemsPerPage = 5;

	const uniqueMarkets = [
		...new Set(dataBarang.map((item) => item.alamatPasar)),
	];
	const uniqueKomoditas = [
		...new Set(dataBarang.map((item) => item.nama)),
	].sort();

	const minDate = tanggalRange[0];
	const maxDate = tanggalRange[tanggalRange.length - 1];

	const getDateIndex = (dateString) => {
		return tanggalRange.findIndex((date) => date === dateString);
	};

	const getDateRangeIndices = () => {
		if (!dateStart && !dateEnd) return [];

		const startIndex = dateStart ? getDateIndex(dateStart) : 0;
		const endIndex = dateEnd ? getDateIndex(dateEnd) : tanggalRange.length - 1;

		if (startIndex === -1 || endIndex === -1) return [];

		const start = Math.min(startIndex, endIndex);
		const end = Math.max(startIndex, endIndex);

		const indices = [];
		for (let i = start; i <= end; i++) {
			indices.push(i);
		}
		return indices;
	};

	const highlightedDateIndices = getDateRangeIndices();

	const sortedAndFilteredData = useMemo(() => {
		let filtered = [...dataBarang];

		if (filterPasar) {
			filtered = filtered.filter((item) => item.alamatPasar === filterPasar);
		}

		if (filterKomoditas) {
			filtered = filtered.filter((item) => item.nama === filterKomoditas);
		}

		if (sortBy) {
			filtered.sort((a, b) => {
				let aValue, bValue;

				if (sortBy === "nama") {
					aValue = a.nama;
					bValue = b.nama;
				} else if (sortBy === "pasar") {
					aValue = a.alamatPasar;
					bValue = b.alamatPasar;
				} else if (sortBy.startsWith("tanggal-")) {
					const dateIndex = parseInt(sortBy.split("-")[1]);
					aValue = parseInt(a.harga[dateIndex]) || 0;
					bValue = parseInt(b.harga[dateIndex]) || 0;
				}

				if (typeof aValue === "string") {
					return sortOrder === "asc"
						? aValue.localeCompare(bValue)
						: bValue.localeCompare(aValue);
				} else {
					return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
				}
			});
		}

		return filtered;
	}, [sortBy, sortOrder, filterPasar, filterKomoditas]);

	const totalPages = Math.ceil(sortedAndFilteredData.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentData = sortedAndFilteredData.slice(startIndex, endIndex);

	const handleSort = (field) => {
		if (sortBy === field) {
			setSortOrder(sortOrder === "asc" ? "desc" : "asc");
		} else {
			setSortBy(field);
			setSortOrder("asc");
		}
		setCurrentPage(1);
	};

	const handleNext = () => {
		if (currentPage < totalPages) setCurrentPage(currentPage + 1);
	};

	const handlePrev = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	const handleDateStartChange = (e) => {
		const selectedDate = e.target.value;
		setDateStart(selectedDate);
	};

	const handleDateEndChange = (e) => {
		const selectedDate = e.target.value;
		setDateEnd(selectedDate);
	};

	const resetFilters = () => {
		setSortBy("");
		setSortOrder("asc");
		setFilterPasar("");
		setFilterKomoditas("");
		setDateStart("");
		setDateEnd("");
		setCurrentPage(1);
	};

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("id-ID", {
			day: "2-digit",
			month: "short",
		});
	};

	const SortIcon = ({ field }) => {
		if (sortBy !== field)
			return <ChevronDown className="w-4 h-4 text-gray-400" />;
		return sortOrder === "asc" ? (
			<ChevronUp className="w-4 h-4 text-white" />
		) : (
			<ChevronDown className="w-4 h-4 text-white" />
		);
	};

	return (
		<div className="max-w-7xl mt-7 mx-auto p-6 min-h-screen bg-gray-50">
			<div className="bg-white rounded-xl shadow-lg p-6 mb-6">
				<h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
					Daftar Harga Bahan Pokok
				</h1>

				<div className="mb-6 space-y-4">
					<div className="flex flex-wrap gap-4 items-end">
						<div className="flex-1 min-w-[200px]">
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Filter berdasarkan Pasar
							</label>
							<div className="relative">
								<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
								<select
									value={filterPasar}
									onChange={(e) => {
										setFilterPasar(e.target.value);
										setCurrentPage(1);
									}}
									className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white appearance-none">
									<option value="">Semua Pasar</option>
									{uniqueMarkets.map((pasar, index) => (
										<option key={index} value={pasar}>
											{pasar}
										</option>
									))}
								</select>
								<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
							</div>
						</div>

						<div className="flex-1 min-w-[200px]">
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Filter berdasarkan Komoditas
							</label>
							<div className="relative">
								<Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
								<select
									value={filterKomoditas}
									onChange={(e) => {
										setFilterKomoditas(e.target.value);
										setCurrentPage(1);
									}}
									className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white appearance-none">
									<option value="">Semua Komoditas</option>
									{uniqueKomoditas.map((komoditas, index) => (
										<option key={index} value={komoditas}>
											{komoditas}
										</option>
									))}
								</select>
								<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
							</div>
						</div>

						<div className="flex-1 min-w-[150px]">
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Select date start
							</label>
							<div className="relative">
								<Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
								<input
									type="date"
									value={dateStart}
									onChange={handleDateStartChange}
									min={minDate}
									max={maxDate}
									className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
									placeholder="Select date start"
								/>
							</div>
							{dateStart && getDateIndex(dateStart) === -1 && (
								<p className="text-xs text-red-500 mt-1">
									Tanggal tidak tersedia dalam data
								</p>
							)}
						</div>

						<div className="flex-1 min-w-[150px]">
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Select date end
							</label>
							<div className="relative">
								<Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
								<input
									type="date"
									value={dateEnd}
									onChange={handleDateEndChange}
									min={dateStart || minDate}
									max={maxDate}
									className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
									placeholder="Select date end"
								/>
							</div>
							{dateEnd && getDateIndex(dateEnd) === -1 && (
								<p className="text-xs text-red-500 mt-1">
									Tanggal tidak tersedia dalam data
								</p>
							)}
						</div>
					</div>

					{(sortBy ||
						filterPasar ||
						filterKomoditas ||
						dateStart ||
						dateEnd) && (
						<div className="flex justify-between text-sm text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-100">
							<div className="flex flex-wrap gap-2 items-center">
								{sortBy && (
									<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-1">
										Diurutkan:{" "}
										{sortBy === "nama"
											? "Nama"
											: sortBy === "pasar"
											? "Pasar"
											: `Harga ${formatDate(
													tanggalRange[parseInt(sortBy.split("-")[1])]
											  )}`}
										({sortOrder === "asc" ? "Asc" : "Desc"})
										<button
											onClick={() => setSortBy("")}
											className="ml-1 text-blue-600 hover:text-blue-800">
											×
										</button>
									</span>
								)}
								{filterPasar && (
									<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center gap-1">
										Pasar: {filterPasar}
										<button
											onClick={() => setFilterPasar("")}
											className="ml-1 text-green-600 hover:text-green-800">
											×
										</button>
									</span>
								)}
								{filterKomoditas && (
									<span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full flex items-center gap-1">
										Komoditas: {filterKomoditas}
										<button
											onClick={() => setFilterKomoditas("")}
											className="ml-1 text-yellow-600 hover:text-yellow-800">
											×
										</button>
									</span>
								)}
								{(dateStart || dateEnd) && (
									<span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center gap-1">
										Rentang Tanggal: {dateStart ? formatDate(dateStart) : "..."}{" "}
										- {dateEnd ? formatDate(dateEnd) : "..."}
										<button
											onClick={() => {
												setDateStart("");
												setDateEnd("");
											}}
											className="ml-1 text-purple-600 hover:text-purple-800">
											×
										</button>
									</span>
								)}
							</div>
							<button
								onClick={resetFilters}
								className="text-2xl text-red-600 hover:text-red-800 transition-colors">
								<MdDelete />
							</button>
						</div>
					)}
				</div>

				<div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
					<table className="bg-white text-sm w-full border-collapse">
						<thead className="bg-green-700 text-white">
							<tr>
								<th className="px-6 py-4 text-left font-semibold sticky left-0 z-30 bg-green-700">
									<button
										onClick={() => handleSort("nama")}
										className="flex items-center gap-2 hover:bg-green-600 rounded px-2 py-1 transition">
										Komoditas
										<SortIcon field="nama" />
									</button>
								</th>
								{tanggalRange.map((tanggal, index) => (
									<th
										key={index}
										className={`px-4 py-4 text-center font-semibold whitespace-nowrap relative transition-all duration-200 ${
											highlightedDateIndices.includes(index)
												? "bg-yellow-500 text-gray-900"
												: "bg-green-700 text-white"
										} ${
											index === tanggalRange.length - 1 ? "rounded-tr-xl" : ""
										}`}>
										<button
											onClick={() => handleSort(`tanggal-${index}`)}
											className="flex items-center justify-center gap-1 w-full hover:bg-opacity-80 rounded px-2 py-1 transition">
											<div className="flex flex-col">
												<span>{formatDate(tanggal)}</span>
												<span className="text-xs opacity-75">
													{tanggal.split("-")[0]}
												</span>
											</div>
											<SortIcon field={`tanggal-${index}`} />
										</button>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{currentData.map((item, i) => (
								<tr
									key={i}
									className="group border-b border-gray-200 last:border-b-0 transition-all duration-200 ease-in-out hover:bg-green-50">
									<td className="px-6 py-4 text-gray-800 sticky left-0 bg-white group-hover:bg-green-50 z-10 transition-all duration-200">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
												<img
													src={item.image}
													alt={item.nama}
													className="w-full h-full object-cover"
												/>
											</div>
											<div className="flex flex-col gap-1 min-w-0">
												<div className="font-semibold text-sm text-gray-800 leading-tight">
													{item.nama}
												</div>
												<div className="text-xs text-gray-500 flex gap-1 items-center">
													<MapPin className="w-3 h-3 flex-shrink-0" />
													<span className="truncate">{item.alamatPasar}</span>
												</div>
											</div>
										</div>
									</td>
									{item.harga.map((harga, j) => (
										<td
											key={j}
											className={`px-4 py-4 text-center text-gray-700 font-medium transition-all duration-200 ${
												highlightedDateIndices.includes(j)
													? "bg-yellow-100"
													: "group-hover:bg-green-50"
											}`}>
											{harga ? (
												<span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-lg">
													Rp{harga.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
												</span>
											) : (
												<span className="text-gray-400 italic">-</span>
											)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="flex justify-between items-center mt-6">
					<div className="text-sm text-gray-600">
						Menampilkan {startIndex + 1}-
						{Math.min(endIndex, sortedAndFilteredData.length)} dari{" "}
						{sortedAndFilteredData.length} item
					</div>
					<div className="flex items-center gap-2">
						<button
							onClick={handlePrev}
							disabled={currentPage === 1}
							className={`px-4 py-2 rounded-lg font-medium transition ${
								currentPage === 1
									? "bg-gray-200 text-gray-400 cursor-not-allowed"
									: "bg-green-600 hover:bg-green-700 text-white"
							}`}>
							← Previous
						</button>
						<span className="text-sm text-gray-600 px-3">
							{currentPage} / {totalPages}
						</span>
						<button
							onClick={handleNext}
							disabled={currentPage === totalPages}
							className={`px-4 py-2 rounded-lg font-medium transition ${
								currentPage === totalPages
									? "bg-gray-200 text-gray-400 cursor-not-allowed"
									: "bg-green-600 hover:bg-green-700 text-white"
							}`}>
							Next →
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
