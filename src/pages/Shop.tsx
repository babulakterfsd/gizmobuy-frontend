import ScrollToTop from '@/components/ui/ToTop';
import { useGetProductsQuery } from '@/redux/api/productApi';
import { TProduct } from '@/types/commonTypes';
import { useEffect, useState } from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from 'react-icons/fa';
import { PiEyeLight } from 'react-icons/pi';
import headphoneImage from '../assets/images/headphone.png';
import bannerWatch from '../assets/images/watchbanner.png';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterPriceFrom, setFilterPriceFrom] = useState<string>('');
  const [filterPriceTo, setFilterPriceTo] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [page, setPage] = useState<string>('1');
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const limit = '12';

  let allFilters = {
    page: page,
    limit: limit,
    sortBy: sortBy,
    sortOrder: sortOrder,
    category: selectedCategory,
    minPrice: filterPriceFrom,
    maxPrice: filterPriceTo,
    brand: selectedBrand,
    search: searchKeyword,
  };

  const createQueryString = (obj: any) => {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(
        encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
      );
    }
    return keyValuePairs.join('&');
  };

  let queryParams = createQueryString(allFilters);

  useEffect(() => {
    queryParams = createQueryString({
      page,
      limit,
      sortBy,
      sortOrder,
      category: selectedCategory,
      minPrice: filterPriceFrom,
      maxPrice: filterPriceTo,
      brand: selectedBrand,
    });
  }, [
    page,
    limit,
    sortBy,
    sortOrder,
    selectedCategory,
    filterPriceFrom,
    filterPriceTo,
    selectedBrand,
  ]);

  const resetAllFiter = () => {
    setPage('1');
    setSelectedCategory('all');
    setFilterPriceFrom('');
    setFilterPriceTo('');
    setSelectedBrand('');
    setSortBy('');
    setSearchKeyword('');
  };

  const { data, isLoading } = useGetProductsQuery(queryParams);
  let products = data?.data?.data;
  const totalItems = data?.data?.meta?.total;
  const totalPages = Math.ceil(Number(totalItems) / Number(limit));

  const handlePageChange = (page: number) => {
    setPage(page.toString());
  };

  const handleSort = (e: any) => {
    if (sortOrder == 'default') {
      setSortBy('');
      setSortOrder('');
    } else {
      setSortBy('price');
      setSortOrder(e);
    }
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setPage('1');
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setPage('1');
  };

  const handleMinPriceChange = (e: any) => {
    setFilterPriceFrom(e);
    setTimeout(() => {
      setPage('1');
    }, 1000);
  };

  const handleMaxPriceChange = (e: any) => {
    setFilterPriceTo(e);
    setTimeout(() => {
      setPage('1');
    }, 1000);
  };

  const handleSearchEverything = (e: any) => {
    setSearchKeyword(e);
    setSelectedCategory('all');
    setFilterPriceFrom('');
    setFilterPriceTo('');
    setSelectedBrand('');
    setSortBy('');
    setSortOrder('');
    setPage('1');
  };

  useEffect(() => {
    window.scrollTo({ top: 110, behavior: 'smooth' });

    if (sortOrder === 'default') {
      setSortBy('');
      setSortOrder('');
    }
  }, [page, sortOrder]);

  return (
    <div>
      <ScrollToTop />
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-6 lg:mt-10 mb-16">
          {/* shop sidebar */}
          <div className="col-span-12 md:col-span-3 w-full h-full">
            {/* product category filter */}
            <h3 className="text-black font-semibold mb-4">Category</h3>
            <form className="flex gap-y-2 flex-col">
              <div className="flex items-center">
                <input
                  id="all"
                  type="radio"
                  value={selectedCategory}
                  name="category"
                  className="w-4 h-4 focus:outline-none border-none cursor-pointer"
                  onChange={() => handleCategoryChange('all')}
                  checked={selectedCategory === 'all'}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-graish"
                >
                  All
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="desktop"
                  type="radio"
                  value={selectedCategory}
                  name="category"
                  className="w-4 h-4 focus:outline-none border-none cursor-pointer"
                  onChange={() => handleCategoryChange('desktop')}
                  checked={selectedCategory === 'desktop'}
                />
                <label
                  htmlFor="desktop"
                  className="ms-2 text-sm font-medium text-graish"
                >
                  Desktop
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="laptop"
                  type="radio"
                  value={selectedCategory}
                  name="category"
                  className="w-4 h-4 focus:outline-none border-none cursor-pointer"
                  onChange={() => handleCategoryChange('laptop')}
                  checked={selectedCategory === 'laptop'}
                />
                <label
                  htmlFor="laptop"
                  className="ms-2 text-sm font-medium text-graish"
                >
                  Laptop
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="smartphone"
                  type="radio"
                  value={selectedCategory}
                  name="category"
                  className="w-4 h-4 focus:outline-none border-none cursor-pointer"
                  onChange={() => handleCategoryChange('smartphone')}
                  checked={selectedCategory === 'smartphone'}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-graish"
                >
                  Smartphone
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="watch"
                  type="radio"
                  value={selectedCategory}
                  name="category"
                  className="w-4 h-4 focus:outline-none border-none cursor-pointer"
                  onChange={() => handleCategoryChange('watch')}
                  checked={selectedCategory === 'watch'}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-graish"
                >
                  Watch
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="headphone"
                  type="radio"
                  value={selectedCategory}
                  name="category"
                  className="w-4 h-4 focus:outline-none border-none cursor-pointer"
                  onChange={() => handleCategoryChange('headphone')}
                  checked={selectedCategory === 'headphone'}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-graish"
                >
                  Headphone
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="fashion"
                  type="radio"
                  value={selectedCategory}
                  name="category"
                  className="w-4 h-4 focus:outline-none border-none cursor-pointer"
                  onChange={() => handleCategoryChange('fashion')}
                  checked={selectedCategory === 'fashion'}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-graish"
                >
                  Fashion
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="accessories"
                  type="radio"
                  value={selectedCategory}
                  name="category"
                  className="w-4 h-4 focus:outline-none border-none cursor-pointer"
                  onChange={() => handleCategoryChange('accessories')}
                  checked={selectedCategory === 'accessories'}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-graish"
                >
                  Accessories
                </label>
              </div>
            </form>
            {/* price filter */}
            <h3 className="text-black font-semibold mt-8 mb-4">Price Range</h3>
            <div className="flex flex-col gap-y-3">
              <div className="w-2/3">
                <label
                  htmlFor="minPrice"
                  className="block mb-2 text-xs font-semibold "
                >
                  Min Price
                </label>

                <input
                  type="number"
                  name="minPrice"
                  id="minPrice"
                  className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 focus:outline-none"
                  placeholder="e.g. 5"
                  value={filterPriceFrom}
                  onChange={(e) => handleMinPriceChange(e.target.value)}
                />
              </div>
              <div className="w-2/3">
                <label
                  htmlFor="maxPrice"
                  className="block mb-2 text-xs font-semibold"
                >
                  Max Price
                </label>

                <input
                  type="number"
                  name="maxPrice"
                  id="maxPrice"
                  className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 border-gray-600  focus:outline-none"
                  placeholder="e.g. 100"
                  value={filterPriceTo}
                  onChange={(e) => handleMaxPriceChange(e.target.value)}
                />
              </div>
            </div>
            {/* brand filter */}
            <h3 className="text-black font-semibold mt-8 mb-4">
              Popular Brands
            </h3>
            <div className="flex gap-x-4 gap-y-3 flex-col">
              <div className="flex gap-x-4">
                <div className="flex items-center ">
                  <input
                    id="inline-radio"
                    type="radio"
                    className="w-3 h-3 focus:outline-none border-none cursor-pointer"
                    onChange={() => handleBrandChange('Apple')}
                    checked={selectedBrand.includes('Apple')}
                  />
                  <label
                    htmlFor="inline-radio"
                    className="ms-1.5 text-sm font-medium text-graish"
                  >
                    Apple
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="inline-radio"
                    type="radio"
                    className="w-3 h-3 focus:outline-none border-none cursor-pointer"
                    onChange={() => handleBrandChange('Microsoft')}
                    checked={selectedBrand.includes('Microsoft')}
                  />
                  <label
                    htmlFor="inline-radio"
                    className="ms-1.5 text-sm font-medium text-graish"
                  >
                    Microsoft
                  </label>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex items-center ">
                  <input
                    id="inline-radio"
                    type="radio"
                    className="w-3 h-3 focus:outline-none border-none cursor-pointer"
                    onChange={() => handleBrandChange('Dell')}
                    checked={selectedBrand.includes('Dell')}
                  />
                  <label
                    htmlFor="inline-radio"
                    className="ms-1.5 text-sm font-medium text-graish"
                  >
                    Dell
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="inline-radio"
                    type="radio"
                    className="w-3 h-3 focus:outline-none border-none cursor-pointer"
                    onChange={() => handleBrandChange('Nike')}
                    checked={selectedBrand.includes('Nike')}
                  />
                  <label
                    htmlFor="inline-radio"
                    className="ms-1.5 text-sm font-medium text-graish"
                  >
                    Nike
                  </label>
                </div>
              </div>
              <div className="flex items-center ">
                <input
                  id="inline-radio"
                  type="radio"
                  className="w-3 h-3 focus:outline-none border-none cursor-pointer"
                  onChange={() => handleBrandChange('Samsung')}
                  checked={selectedBrand.includes('Samsung')}
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-1.5 text-sm font-medium text-graish"
                >
                  Samsung
                </label>
              </div>
            </div>
            {/* banner ad */}
            <div className="border-2 border-orange-300 px-2 py-8 w-4/5 flex flex-col mt-8 justify-center items-center">
              <img
                src={bannerWatch}
                alt="banner"
                className="w-28 h-28 object-cover mb-3"
              />
              <h4 className="text-graish font-semibold mb-2">
                Apple Watch Series
              </h4>
              <div className="flex space-x-3 justify-center items-center">
                <span className="text-sm">Only for</span>
                <button className="bg-yellow text-black font-semibold text-center text-sm px-3 py-0.5">
                  $299
                </button>
              </div>
              <p className="text-black font-bold text-center my-8">
                Heavy On Features <br /> Light On Price
              </p>
              <button className="bg-yellow py-2 px-8 font-semibold text-center text-black flex items-center space-x-2">
                <span>Shop Now</span> <FaArrowRight />
              </button>
            </div>
          </div>
          {/* product list */}
          <div className="col-span-12 md:col-span-9 w-full h-full">
            {/* search and sort */}
            <div className="flex justify-between items-center flex-col md:flex-row">
              {/* search */}

              <input
                type="search"
                className="bg-offwhite py-2 px-3 rounded-sm w-full md:w-96 focus:outline-none focus:border-none text-black relative"
                placeholder="e.g. iphone 13, samsung galaxy s21 ultra, etc."
                required
                value={searchKeyword}
                onChange={(e) => handleSearchEverything(e.target.value)}
              />

              {/* sort */}
              <div>
                <label
                  htmlFor="sort"
                  className="text-sm font-medium mr-2 text-graish"
                >
                  Sort By
                </label>
                <select
                  name="sort"
                  id="sort"
                  className="bg-offwhite py-2 px-3 rounded-sm focus:outline-none focus:border-none text-graish text-sm"
                  value={sortOrder}
                  onChange={(e) => handleSort(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
              </div>
              {/* reset all filters */}
              <button
                onClick={resetAllFiter}
                className="bg-offwhite py-2 px-4 rounded-sm text-graish text-sm  mt-4 md:mt-0 font-semibold hover:bg-orange-400 hover:text-white"
              >
                Reset All Filters
              </button>
            </div>
            {/* active filters */}
            <div className="bg-offwhite my-6 py-1  px-4 w-full">
              <div className="flex items-center h-12">
                <p className="text-black font-semibold text-sm mr-2">
                  Active Filters:
                </p>
                <p className="mr-4 text-graish bg-white py-0 px-4 rounded">{`${
                  selectedCategory && selectedCategory !== 'all'
                    ? `Catgegory: ${selectedCategory}`
                    : ''
                }`}</p>

                <div className="flex space-x-2 bg-white py-0 px-4 rounded mr-2">
                  {`${selectedBrand ? `Brand: ${selectedBrand}` : ''}`}
                </div>
                {filterPriceFrom && (
                  <p className="mr-1 text-graish bg-white py-0 px-4 rounded text-sm">{`min $${filterPriceFrom}`}</p>
                )}
                {filterPriceTo && (
                  <p className="mr-4 text-graish bg-white py-0 px-4 rounded text-sm">{`max $${filterPriceTo}`}</p>
                )}

                <p className="text-black font-semibold text-sm ml-auto">{`Showing ${
                  products?.length
                } ${products?.length > 1 ? 'products' : 'product'}   `}</p>
              </div>
            </div>
            {/* product cards */}
            <div className="grid grid-cols-12 gap-x-6 gap-y-8">
              {isLoading ? (
                <div className="mt-16 col-span-12 flex justify-center">
                  <div className="animate-spin rounded-full h-16 lg:h-32 w-16 lg:w-32 border-t-2 border-b-2 border-red-300 mx-auto"></div>
                </div>
              ) : products?.length < 1 ? (
                <div className="mt-16 col-span-12">
                  <p className="text-xl lg:text-2xl text-orange font-semibold text-center">
                    No product found
                  </p>
                  <div className="text-center">
                    <button
                      className="bg-orange py-2 px-4 font-medium  text-white mt-4"
                      onClick={() => resetAllFiter()}
                    >
                      Reset All Filters
                    </button>
                  </div>
                </div>
              ) : (
                products.map((product: TProduct) => (
                  <div
                    key={product?._id}
                    className="col-span-3 shadow border-2 border-gray-300 py-2 px-4 relative rounded-md"
                    onMouseEnter={() => setHoveredProduct(product?._id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {hoveredProduct === product?._id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-opacity-5">
                        <div className="absolute inset-0 bg-black opacity-75 rounded-md"></div>
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
                        product?.displayImage
                          ? product?.displayImage
                          : headphoneImage
                      }
                      alt="product"
                      className="w-full h-40 object-cover"
                    />
                    {/* show star depending on rating */}
                    <div className="flex items-center space-x-1 mt-4">
                      <FaStar className="text-orange text-xs" />
                      <FaStar className="text-orange text-xs" />
                      <FaStar className="text-orange text-xs" />
                      <FaStar className="text-orange text-xs" />
                      <FaStar className="text-orange text-xs" />
                      <span className="text-graish text-xs">(5)</span>
                    </div>
                    <h5 className="mt-1 mb-1 text-sm">{`${product?.title}`}</h5>
                    <p className="text-bluish font-semibold text-md">{`$${product?.price}`}</p>
                  </div>
                ))
              )}
            </div>
            {/* pagination */}
            {isLoading || products?.length === 0 ? (
              <div></div>
            ) : (
              <div
                className={`flex justify-center items-center my-5 space-x-2 lg:space-x-4 ${
                  products?.length < 5 ? 'mt-[323px]' : 'mt-6 lg:mt-12'
                }`}
              >
                <button
                  className=" px-1.5 bg-orange rounded-full text-gray-700 h-8 w-8 hover:bg-orange-400 disabled:cursor-not-allowed disabled:hover:bg-gray-200"
                  onClick={() => handlePageChange(Number(page) - 1)}
                  disabled={Number(page) === 1}
                >
                  <FaChevronLeft className="text-white" />
                </button>
                {[...Array(Math.min(totalPages, 5)).keys()].map((index) => {
                  const pageNumber = Number(page) - 2 + index;
                  // Check if pageNumber is within valid range and greater than 0
                  if (pageNumber > 0 && pageNumber <= totalPages) {
                    return (
                      <button
                        key={pageNumber}
                        className={`mx-2 px-2 bg-gray-200 text-gray-700 rounded-full w-8 h-8 hover:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-200 ${
                          Number(page) === pageNumber
                            ? 'font-bold text-white bg-orange'
                            : ''
                        }`}
                        onClick={() => handlePageChange(pageNumber)}
                        disabled={Number(page) === pageNumber}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                  return null; // Render nothing for invalid pageNumber
                })}
                <button
                  className="px-2 w-8 h-8 bg-orange text-white rounded-full hover:bg-orange-400 disabled:cursor-not-allowed disabled:hover:bg-gray-200"
                  onClick={() => handlePageChange(Number(page) + 1)}
                  disabled={Number(page) === totalPages}
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
