import { TProduct } from '@/types/commonTypes';
import { useState } from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { PiEyeLight } from 'react-icons/pi';

interface CollectionsProps {
  products: TProduct[];
}

const Collections: React.FC<CollectionsProps> = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const newArrival: TProduct[] = [products[0], products[1], products[2]];
  const bestSellers: TProduct[] = [products[3], products[4], products[5]];
  const topRated: TProduct[] = [products[6], products[7], products[8]];
  const flashSaleToday: TProduct[] = [products[9], products[10], products[11]];

  return (
    <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:px-12 gap-x-6 gap-y-10">
      {/* flash sale today */}
      <div className="cols-span-12 md:col-span-6 lg:col-span-3">
        <h4 className="text-custom-black font-semibold leading-6 mb-4 uppercase">
          Flash Sale Today
        </h4>
        <div className="flex flex-col space-y-4">
          {flashSaleToday?.map((product: TProduct) => (
            <div
              key={product?._id}
              className="flex flex-row space-x-6 py-3 px-6 items-center border border-gray-100 relative"
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
                src={product?.displayImage}
                alt={product?.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h6 className="text-custom-black text-sm font-semibold">
                  {product?.title}
                </h6>
                <p className="text-bluish text-sm">{`$${product?.price}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* best sellers */}
      <div className="cols-span-12 md:col-span-6 lg:col-span-3">
        <h4 className="text-custom-black font-semibold leading-6 mb-4 uppercase">
          Best Sellers
        </h4>
        <div className="flex flex-col space-y-4">
          {bestSellers?.map((product: TProduct) => (
            <div
              key={product?._id}
              className="flex flex-row space-x-6 py-3 px-6 items-center border border-gray-100 relative"
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
                src={product?.displayImage}
                alt={product?.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h6 className="text-custom-black text-sm font-semibold">
                  {product?.title}
                </h6>
                <p className="text-bluish text-sm">{`$${product?.price}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* top rated */}
      <div className="cols-span-12 md:col-span-6 lg:col-span-3">
        <h4 className="text-custom-black font-semibold leading-6 mb-4 uppercase">
          Top Rated
        </h4>
        <div className="flex flex-col space-y-4">
          {topRated?.map((product: TProduct) => (
            <div
              key={product?._id}
              className="flex flex-row space-x-6 py-3 px-6 items-center border border-gray-100 relative"
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
                src={product?.displayImage}
                alt={product?.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h6 className="text-custom-black text-sm font-semibold">
                  {product?.title}
                </h6>
                <p className="text-bluish text-sm">{`$${product?.price}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* new arrival */}
      <div className="cols-span-12 md:col-span-6 lg:col-span-3">
        <h4 className="text-custom-black font-semibold leading-6 mb-4 uppercase">
          New Arrival
        </h4>
        <div className="flex flex-col space-y-4">
          {newArrival?.map((product: TProduct) => (
            <div
              key={product?._id}
              className="flex flex-row space-x-6 py-3 px-6 items-center border border-gray-100 relative"
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
                src={product?.displayImage}
                alt={product?.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h6 className="text-custom-black text-sm font-semibold">
                  {product?.title}
                </h6>
                <p className="text-bluish text-sm">{`$${product?.price}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
