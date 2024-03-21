import Loader from '@/components/common/Loader';
import BestDeals from '@/components/homepage/BestDeals';
import CarouselSideProducts from '@/components/homepage/CarouselSideProducts';
import Collections from '@/components/homepage/Collections';
import FeatureSummary from '@/components/homepage/FeatureSummary';
import Macbook from '@/components/homepage/Macbook';
import NewArrivals from '@/components/homepage/NewArrivals';
import Newsletter from '@/components/homepage/Newsletter';
import Carousel from '@/components/homepage/ProductCarousel';
import SamsungS22 from '@/components/homepage/SamsungS22';
import ShopCategories from '@/components/homepage/ShopCategories';
import ScrollToTop from '@/components/ui/ToTop';
import { useGetProductsQuery } from '@/redux/api/productApi';

const Home = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  let products = data?.data?.data;

  if (isLoading) return <Loader />;

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
        <FeatureSummary />
        {/* best deals */}
        <BestDeals products={products} />
        {/* shop categories */}
        <ShopCategories />
        <Macbook />
        {/* new arrivals */}
        <NewArrivals products={products} />
        <SamsungS22 />
        <Collections products={products} />
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
