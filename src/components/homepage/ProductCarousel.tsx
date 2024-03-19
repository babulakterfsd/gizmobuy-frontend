import { TProduct } from '@/types/commonTypes';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../../utils/demoDataForHome';

const Carousel = () => {
  const navigate = useNavigate();
  const products = sliderData;
  SwiperCore.use([Autoplay]);

  return (
    <div className="productslider col-span-12 lg:col-span-6 flex justify-center pl-2.5 pr-1  md:px-0 md:mx-0 my-4 md:my-0 overflow-hidden">
      <div className="swipercontainer w-full lg:w-4/5">
        <Swiper
          scrollbar
          navigation
          direction="horizontal"
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
        >
          {products?.map((product: TProduct) => (
            <SwiperSlide
              key={product?._id}
              className="grid grid-cols-12 gap-x-4 items-start py-5"
            >
              <div className="col-span-6 mt-12">
                <h4 className="text-bluish font-semibold mb-1 text-sm">{`- ${product?.intro}`}</h4>
                <h2 className="text-4xl font-bold mb-4 text-custom-black">
                  {product?.title}
                </h2>
                <p className="text-graish leading-5">
                  {product?.description.slice(0, 150)}
                </p>
                <div className="mt-6">
                  <button
                    className="bg-orange py-2.5 px-6 rounded text-white font-semibold flex items-center gap-x-2 hover:bg-orange-500"
                    onClick={() => navigate('/shop')}
                  >
                    Shop Now <FaArrowRightLong />
                  </button>
                </div>
              </div>
              <div className="col-span-4 flex justify-center mt-12">
                <img
                  src={product?.displayImage}
                  alt={product?.title}
                  className="object-cover scale-125 mx-auto inlin-block"
                />
              </div>
              <div className="col-span-2">
                <div className="h-16 w-16 p-6 rounded-full bg-deep-bluish flex justify-center items-center ml-8">
                  <p className="text-white font-bold">{`$${product?.price}`}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
