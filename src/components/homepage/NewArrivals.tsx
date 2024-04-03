import { TProduct } from '@/types/commonTypes';
import { useState } from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PiEyeLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import headphoneImage from '../../assets/images/headphone.png';

interface NewArrivalProps {
  products: TProduct[];
}

const NewArrivals: React.FC<NewArrivalProps> = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  let newArrivalProducts: TProduct[] = products?.slice(0, 9);

  return (
    <div className="mt-14 lg:mt-20">
      <div className="header flex items-center mb-6">
        <h2 className="text-custom-black font-semibold text-xl md:text-2xl mr-10">
          New Arrivals
        </h2>
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
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* small products */}
        <div className="col-span-12 md:col-span-12 lg:col-span-10 grid grid-cols-2 md:grid-cols-4">
          {newArrivalProducts?.slice(1, 9)?.map((product: TProduct) => (
            <div
              key={product?._id}
              className="border border-gray-100 py-2 px-4 relative"
              onMouseEnter={() => setHoveredProduct(product?._id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {hoveredProduct === product?._id && (
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-5">
                  <div className="absolute inset-0 bg-custom-black opacity-75"></div>
                  <div className="z-10 relative flex items-center justify-center w-full h-full">
                    <button className="bg-orange text-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold">
                      <CiHeart />
                    </button>
                    <button className="bg-orange text-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold mx-3">
                      <CiShoppingCart />
                    </button>
                    <Link to={`/product/${product?._id}`}>
                      <button className="bg-orange text-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold">
                        <PiEyeLight />
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              <img
                src={
                  product?.displayImage ? product?.displayImage : headphoneImage
                }
                alt="product"
                className="w-full h-40 object-contain"
              />
              <h5 className="mt-5 text-sm">{`${product?.title}`}</h5>
              <p className="text-bluish font-semibold text-md">{`$${product?.price}`}</p>
            </div>
          ))}
        </div>
        {/* big product */}
        <div className="cols-span-12 md:hidden lg:block lg:col-span-2 border border-gray-100 py-4 lg:bg-yellow-300 px-10 lg:px-3">
          <h3 className="text-center font-semibold text-sm mb-2">
            Buy today's hot deal <br /> with the best price in the market
          </h3>
          <img
            src={newArrivalProducts[0]?.displayImage}
            alt={newArrivalProducts[0]?.title}
            className="w-full h-40 object-contain"
          />
          <div className="flex items-center space-x-1 mt-6 mb-1">
            <FaStar className="text-orange text-xs" />
            <FaStar className="text-orange text-xs" />
            <FaStar className="text-orange text-xs" />
            <FaStar className="text-orange text-xs" />
            <FaStar className="text-orange text-xs" />
            <span className="text-graish text-xs">(5)</span>
          </div>
          <h4 className="text-custom-black mb-4 text-xl">
            {newArrivalProducts[0]?.title}
          </h4>
          <h5 className="text-bluish font-semibold text-md mt-2 mb-4">
            {`$${newArrivalProducts[0]?.price}`}
          </h5>
          <h5 className="text-graish text-sm mt-2 mb-2">
            {newArrivalProducts[0]?.description?.slice(0, 100)}
          </h5>
          <div className="flex items-center space-x-2  lg:justify-around mt-4">
            <button className="bg-orange rounded-sm text-white py-2 text-lg px-3">
              <CiHeart />
            </button>
            <button className="bg-orange rounded-sm text-white py-2 text-sm px-3">
              Add to cart
            </button>
            <Link to={`/product/${newArrivalProducts[0]?._id}`}>
              <button className="bg-orange rounded-sm text-white py-2 text-lg px-3">
                <PiEyeLight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
