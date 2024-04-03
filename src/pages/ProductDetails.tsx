import Loader from '@/components/common/Loader';
import ScrollToTop from '@/components/ui/ToTop';
import { useGetSingleProductQuery } from '@/redux/api/productApi';
import { TProductWithVendorDetails } from '@/types/commonTypes';
import { useState } from 'react';
import { BsCart2, BsHeart } from 'react-icons/bs';
import { FaFacebook, FaStar, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import paymentmethods from '../assets/images/Payment Method.png';
import NotFound from './NotFound';

const ProductDetails = () => {
  const [buyQuantity, setBuyQuantity] = useState<number>(1);
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleProductQuery(id);
  const product: TProductWithVendorDetails = data?.data;

  if (isLoading)
    return (
      <div>
        <ScrollToTop />
        <Loader />
      </div>
    );

  if (isError) {
    return <NotFound />;
  }

  return (
    <div>
      <ScrollToTop />
      <div className="main-container mt-8 grid grid-cols-1 md:grid-cols-12 md:gap-x-12 gap-y-6 md:gap-y-0">
        <div className="col-span-12 md:col-span-6">
          <div className="border border-gray-200 rounded p-6">
            <img
              src={product?.displayImage}
              alt={product?.title}
              className="w-full h-96 object-contain"
            />
          </div>
          {/* add to wishlist and share */}
          <div className="flex justify-between items-center mt-6">
            <div>
              <button className=" text-gray-600 flex space-x-3 items-center hover:text-orange-400 transition-all duration-300">
                <BsHeart /> <span>Add to Wishlist</span>
              </button>
            </div>
            <div className="flex items-center space-x-2 pr-24">
              <span className="text-gray-500">share product: </span>{' '}
              <div className="flex items-center space-x-3">
                <FaFacebook className="text-blue-600 cursor-pointer" />
                <FaTwitter className="text-blue-400 cursor-pointer" />
                <FaWhatsapp className="text-green-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 border-gray-200">
          <div className="pb-8 border-b">
            {/* user feedback */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1 items-center">
                <FaStar className="text-orange" />
                <FaStar className="text-orange" />
                <FaStar className="text-orange" />
                <FaStar className="text-orange" />
                <FaStar className="text-orange" />
              </div>
              <p className="text-custom-black text-sm font-semibold">{`${4.7} Star Rating`}</p>
              <p className="text-gray-500 text-sm font-semibold">{`(${21741} User Feedback)`}</p>
            </div>
            <h3 className="text-custom-black text-2xl mt-1">
              {product?.title}
            </h3>
            <div className="flex justify-between items-center mt-5 pr-24">
              <div>
                <span className="text-gray-500">brand: </span>{' '}
                <span className="font-semibold text-sm">{product?.brand}</span>
              </div>
              <div>
                <span className="text-gray-500">availability: </span>{' '}
                <span className="text-green-600 font-semibold text-sm">
                  {product?.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 pr-24">
              <div>
                <span className="text-gray-500">category: </span>{' '}
                <span className="font-semibold text-sm">
                  {product?.category}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Seller: </span>{' '}
                <span className="font-semibold text-sm">
                  {product?.vendor?.name}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <span className="text-gray-500">release date: </span>{' '}
                <span className="font-semibold text-sm">
                  {product?.releaseDate}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-6 mt-6">
              <h5 className="text-2xl font-bold text-bluish ">{`$${product?.price}`}</h5>
              <button className="bg-deep-yellow py-1 px-4 rounded text-gray-700 font-semibold flex items-center gap-x-1 md:gap-x-2">
                {`${product?.runningDiscount}%  OFF`}
              </button>
            </div>
          </div>
          <div className="mt-6">
            <p>{`${product?.description.slice(0, 400)}...`}</p>
            <div className="flex justify-between items-center mt-2">
              <div>
                <span className="text-gray-500">in stock: </span>{' '}
                <span className="font-semibold text-sm text-green-600">
                  {product?.stock}
                </span>
              </div>
            </div>
          </div>
          {/* action buttons */}
          <div className="flex justify-start items-center space-x-4 mt-12">
            {/* quantity control */}
            <div className="flex justify-around items-center border border-gray-200 py-2 px-2 w-28 rounded-md">
              <button
                onClick={() =>
                  buyQuantity > 1 ? setBuyQuantity(buyQuantity - 1) : null
                }
                className="font-medium"
              >
                -
              </button>
              <span className="text-gray-600 font-semibold">{buyQuantity}</span>
              <button
                onClick={() => setBuyQuantity(buyQuantity + 1)}
                className="font-medium"
              >
                +
              </button>
            </div>
            <div>
              <button className="bg-orange py-2 px-4 md:w-72 rounded text-white font-semibold flex items-center justify-center space-x-4">
                <BsCart2 /> <span>Add to Cart</span>
              </button>
            </div>
            <div>
              <button className="border border-orange-400 py-2 px-4 rounded text-white font-semibold text-orange hover:bg-orange-400 hover:text-white transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
          {/* 100% safe checkout cards */}
          <div className="mt-12 border border-gray-200 rounded py-5 px-6">
            <p className="text-sm text-custom-black font-semibold mb-2">
              100% Guarantee Safe Checkout
            </p>
            <img
              src={paymentmethods}
              alt="payment methods"
              className="h-4 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
