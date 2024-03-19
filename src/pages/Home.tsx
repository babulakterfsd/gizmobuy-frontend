import CarouselSideProducts from '@/components/homepage/CarouselSideProducts';
import FeatureSummary from '@/components/homepage/FeatureSummary';
import Newsletter from '@/components/homepage/Newsletter';
import Carousel from '@/components/homepage/ProductCarousel';
import ScrollToTop from '@/components/ui/ToTop';

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <div className="main-container min-h-screen">
        <div className="banner grid grid-cols-12 gap-x-4">
          {/* carousel */}
          <div className="col-span-12 lg:col-span-8 bg-offwhite rounded-md">
            <Carousel />
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-4">
            <CarouselSideProducts />
          </div>
        </div>
        {/* features */}
        <div className="mt-6 border border-gray-300 rounded-md w-full h-20 flex justify-around items-center">
          <FeatureSummary />
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
