import { TProduct } from '@/types/commonTypes';
import { useState } from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PiEyeLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import headphoneImage from '../../assets/images/headphone.png';
import CountDown from './CountDown';

interface BestDealsProps {
  products: TProduct[];
}

const BestDeals: React.FC<BestDealsProps> = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  let bestDealProducts: TProduct[] = products?.slice(29, 38);
  const targetDate = new Date('2024-06-27T23:59:59');

  return (
    <div className="mt-14 lg:mt-20">
      <div className="header flex items-center mb-6">
        <h2 className="text-black font-semibold text-2xl mr-10">Best Deals</h2>
        <div className="flex items-center space-x-2">
          <span>Deals ends in </span>
          <CountDown targetDate={targetDate} />
        </div>
        <Link to="/shop" className="ml-auto">
          <button className=" text-bluish flex items-center gap-x-1 text-sm">
            <span className="text-bluish">Browse All Products </span>
            <span>
              {' '}
              <FaArrowRightLong />{' '}
            </span>
          </button>
        </Link>
      </div>
      {/* product cards */}
      <div className="grid grid-cols-12">
        {/* big product */}
        <div className="col-span-2 border border-gray-100 px-3 py-4">
          <img
            src={bestDealProducts[0]?.displayImage}
            alt={bestDealProducts[0]?.title}
            className="w-full h-40 object-cover"
          />
          <div className="flex items-center space-x-1 mt-6 mb-1">
            <FaStar className="text-yellow text-xs" />
            <FaStar className="text-yellow text-xs" />
            <FaStar className="text-yellow text-xs" />
            <FaStar className="text-yellow text-xs" />
            <FaStar className="text-yellow text-xs" />
            <span className="text-graish text-xs">(5)</span>
          </div>
          <h4 className="text-black mb-4">{bestDealProducts[0]?.title}</h4>
          <h5 className="text-bluish font-semibold text-md mt-2 mb-4">
            {`$${bestDealProducts[0]?.price}`}
          </h5>
          <h5 className="text-graish text-sm mt-2 mb-2">
            {bestDealProducts[0]?.description?.slice(0, 100)}
          </h5>
          <div className="flex items-center space-x-1 justify-around mt-4">
            <button className="bg-orange rounded-sm text-white py-2 text-lg px-3">
              <CiHeart />
            </button>
            <button className="bg-orange rounded-sm text-white py-2 text-sm px-3">
              Add to cart
            </button>
            <button className="bg-orange rounded-sm text-white py-2 text-lg px-3">
              <PiEyeLight />
            </button>
          </div>
        </div>
        {/* small products */}
        <div className="col-span-10 grid grid-cols-12">
          {bestDealProducts?.slice(1, 9)?.map((product: TProduct) => (
            <div
              key={product?._id}
              className="col-span-3 border border-gray-100 py-2 px-4 relative"
              onMouseEnter={() => setHoveredProduct(product?._id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {hoveredProduct === product?._id && (
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-5">
                  <div className="absolute inset-0 bg-black opacity-75"></div>
                  <div className="z-10 relative flex items-center justify-center w-full h-full">
                    <button className="bg-orange text-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold">
                      <CiHeart />
                    </button>
                    <button className="bg-orange text-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold mx-3">
                      <CiShoppingCart />
                    </button>
                    <button className="bg-orange text-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold">
                      <PiEyeLight />
                    </button>
                  </div>
                </div>
              )}
              <img
                src={
                  product?.displayImage ? product?.displayImage : headphoneImage
                }
                alt="product"
                className="w-full h-40 object-cover"
              />
              <h5 className="mt-5 text-sm">{`${product?.title}`}</h5>
              <p className="text-bluish font-semibold text-md">{`$${product?.price}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
