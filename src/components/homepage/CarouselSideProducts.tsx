import { samsungWatch4, sonyHeadphone } from '@/utils/demoDataForHome';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const CarouselSideProducts = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* banner  for product 1*/}
      <div className="product-1 bg-black rounded-md flex space-x-1 px-3 py-5">
        <div className="col-span-6 mt-12">
          <h4 className="text-yellow font-semibold mb-1 text-sm">
            summer sells
          </h4>
          <h2 className="text-2xl font-bold mb-4 text-white">
            {sonyHeadphone?.title}
          </h2>

          <div className="mt-4">
            <button
              className="bg-orange py-2 px-4 text-sm rounded text-white font-semibold flex items-center gap-x-2 hover:bg-orange-500"
              onClick={() => navigate('/shop')}
            >
              Shop Now <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="col-span-6">
          <img
            src={sonyHeadphone?.displayImage}
            alt={sonyHeadphone?.title}
            className="object-contain w-44 h-44 "
          />
        </div>
      </div>
      {/* banner  for product 2*/}
      <div className="product-2 bg-offwhite rounded-md flex space-x-8 px-3 py-5">
        <div className="col-span-6">
          <img
            src={samsungWatch4?.displayImage}
            alt={samsungWatch4?.title}
            className="object-contain w-44 h-44 "
          />
        </div>
        <div className="col-span-6 mt-6">
          <h2 className="text-2xl font-bold mb-4 text-black">
            {samsungWatch4?.title}
          </h2>

          <div className="mt-4">
            <button
              className="bg-orange py-2 px-4 text-sm rounded text-white font-semibold flex items-center gap-x-2 hover:bg-orange-500"
              onClick={() => navigate('/shop')}
            >
              Shop Now <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselSideProducts;
