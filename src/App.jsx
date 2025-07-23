import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TableHarga from "./pages/TableHarga";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/table-harga" element={<TableHarga />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
