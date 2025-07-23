import Carousel from '../components/home/Carousel';
import HargaPangan from '../components/home/HargaPangan';
import MarketGallery from '../components/home/MarketGallery';
import StokBahanPokok from '../components/home/StokBahanPokok';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="w-full h-[80vh] min-h-[500px] relative">
        <Carousel />
      </section>

      {/* Harga Pangan Section */}
      <section id='harga-pangan' className="w-full py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <HargaPangan/>
        </div>
      </section>

      {/* Stok Bahan Pokok Section */}
      <section id='stok-bahanpokok' className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <StokBahanPokok/>
        </div>
      </section>

      <section id='pasar' className='w-full py-12 md:py-16 bg-gray-50'>
        <MarketGallery/>
      </section>

    </div>
  );
};

export default Home;