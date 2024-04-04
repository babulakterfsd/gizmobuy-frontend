import {
  RemoveWishedProductFromLocalState,
  setWishedProductsInLocalState,
  useWishedProducts,
} from '@/redux/features/wishListSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { TProduct } from '@/types/commonTypes';
import { useState } from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoHeart } from 'react-icons/io5';
import { PiEyeLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import headphoneImage from '../../assets/images/headphone.png';
import CountDown from './CountDown';

interface BestDealsProps {
  products: TProduct[];
}

const BestDeals: React.FC<BestDealsProps> = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  let bestDealProducts: TProduct[] = products?.slice(32, 41);
  const targetDate = new Date('2024-07-27T23:59:59');

  const dispatch = useAppDispatch();
  const wishList = useAppSelector(useWishedProducts);
  const isHighlightedProductInWishList = wishList.find(
    (item) => item?._id === bestDealProducts[0]?._id
  );

  const wishListHandler = (product: TProduct) => {
    // check if product is already in wishlist
    const isProductInWishList = wishList.find(
      (item) => item?._id === product?._id
    );

    if (isProductInWishList) {
      dispatch(RemoveWishedProductFromLocalState(product));
      toast.success('Product removed from wishlist', {
        position: 'top-right',
        duration: 1500,
        icon: '🤔',
      });
    }
    if (!isProductInWishList) {
      dispatch(setWishedProductsInLocalState(product));
      toast.success('Product added in the wishlist!', {
        position: 'top-right',
        duration: 1500,
        icon: '😍',
      });
    }
  };

  return (
    <div className="mt-14 lg:mt-20">
      <div className="header flex items-center mb-6">
        <h2 className="text-custom-black font-semibold text-xl md:text-2xl mr-10">
          Best Deals
        </h2>
        <div className="items-center space-x-2 hidden md:flex">
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
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* big product */}
        <div className="col-span-1 md:hidden lg:block lg:col-span-2 border border-gray-100 px-10 lg:px-3 py-4">
          <img
            src={bestDealProducts[0]?.displayImage}
            alt={bestDealProducts[0]?.title}
            className="w-full h-40 object-contain"
          />
          <div className="flex items-center space-x-1 mt-6 mb-1">
            <FaStar className="text-yellow text-xs" />
            <FaStar className="text-yellow text-xs" />
            <FaStar className="text-yellow text-xs" />
            <FaStar className="text-yellow text-xs" />
            <FaStar className="text-yellow text-xs" />
            <span className="text-graish text-xs">(5)</span>
          </div>
          <h4 className="text-custom-black mb-4">
            {bestDealProducts[0]?.title}
          </h4>
          <h5 className="text-bluish font-semibold text-md mt-2 mb-4">
            {`$${bestDealProducts[0]?.price}`}
          </h5>
          <h5 className="text-graish text-sm mt-2 mb-2">
            {bestDealProducts[0]?.description?.slice(0, 100)}
          </h5>
          <div className="flex items-center space-x-2  lg:justify-around mt-4">
            <button
              className="bg-orange rounded-sm text-white py-2 text-lg px-3"
              onClick={() => wishListHandler(bestDealProducts[0])}
            >
              {isHighlightedProductInWishList ? <IoHeart /> : <CiHeart />}
            </button>
            <button className="bg-orange rounded-sm text-white py-2 text-sm px-3">
              Add to cart
            </button>
            <Link to={`/product/${bestDealProducts[0]?._id}`}>
              <button className="bg-orange rounded-sm text-white py-2 text-lg px-3">
                <PiEyeLight />
              </button>
            </Link>
          </div>
        </div>
        {/* small products */}
        <div className="col-span-1 md:col-span-12 lg:col-span-10 grid grid-cols-2 md:grid-cols-12">
          {bestDealProducts?.slice(1, 9)?.map((product: TProduct) => {
            const isProductInWishList = wishList.find(
              (item) => item?._id === product?._id
            );
            return (
              <div
                key={product?._id}
                className="col-span-1 md:col-span-3 border border-gray-100 py-2 px-4 relative"
                onMouseEnter={() => setHoveredProduct(product?._id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {hoveredProduct === product?._id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-5">
                    <div className="absolute inset-0 bg-custom-black opacity-75"></div>
                    <div className="z-10 relative flex items-center justify-center w-full h-full">
                      <button
                        className="bg-orange text-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold"
                        onClick={() => wishListHandler(product)}
                      >
                        {isProductInWishList ? <IoHeart /> : <CiHeart />}
                      </button>
                      <button className="bg-orange text-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold mx-3">
                        <CiShoppingCart />
                      </button>
                      <Link to={`/product/${product._id}`}>
                        <button className="bg-orange text-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold">
                          <PiEyeLight />
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
                <img
                  src={
                    product?.displayImage
                      ? product?.displayImage
                      : headphoneImage
                  }
                  alt="product"
                  className="w-full h-40 object-contain"
                />
                <h5 className="mt-5 text-sm">{`${product?.title}`}</h5>
                <p className="text-bluish font-semibold text-md">{`$${product?.price}`}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
