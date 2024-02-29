import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { CiHeart, CiLocationOn } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { IoIosInformationCircleOutline, IoLogoGithub } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io5';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { PiArrowBendDoubleUpRightThin, PiHeadphonesThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-white.png';

const Navbar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showCategory, setShowCategory] = useState(false);

  const handleSearchEverything = (e: any) => {
    e.preventDefault();
    setSearchKeyword('');
  };

  return (
    <div className="navbar">
      <div className="bg-bluish text-white">
        <div className="main-container">
          {/* welcome */}
          <div className="flex justify-between items-center py-3">
            <h1 className="text-white text-sm">
              Welcome to GizmoBuy ecommerce store.
            </h1>
            <div className="text-sm flex gap-x-2 items-center">
              <span className="mr-3">Follow us: </span>
              <a href="https://facebook.com/babulakterfsd2" target="_blank">
                <IoLogoFacebook />
              </a>
              <a href="https://linkedin.com/in/babulakterfsd" target="_blank">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/babulakterfsd" target="_blank">
                <IoLogoGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#1488a2]"></div>
        {/* navbar */}
        <div className="bg-bluish py-5">
          <div className="main-container flex justify-between items-center">
            {/* logo */}
            <Link className="flex gap-x-2 items-center w-24" to="/">
              <img
                src={logo}
                alt="GizmoBuy"
                className="w-12 h-12 object-cover"
              />
              <span className="font-bold text-3xl">GizmoBuy</span>
            </Link>
            {/* searchbar */}
            <div>
              <form className="relative" onSubmit={handleSearchEverything}>
                <input
                  type="search"
                  className="bg-white py-2 px-3 rounded-sm w-full md:w-96 lg:w-[500px] focus:outline-none focus:border-none text-black relative"
                  placeholder="e.g. iphone 13, samsung galaxy s21 ultra, etc."
                  required
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-gray-200 absolute right-0 py-3  px-5 rounded text-gray-400"
                >
                  <FaSearch />
                </button>
              </form>
            </div>
            {/* items */}
            <div className="flex justify-center space-x-5 items-center">
              <span className="text-2xl text-white cursor-pointer">
                <BsCart2 />
              </span>
              <span className="text-2xl text-white cursor-pointer">
                <CiHeart />
              </span>
              <span className="text-2xl text-white cursor-pointer">
                <AiOutlineUser />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* categories */}
      <div className="categories py-4 shadow-sm mb-6">
        <div className="main-container flex items-center">
          {/* product types menu */}
          <div>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-offwhite hover:bg-[#e8ebec] focus:outline-none rounded-sm text-sm px-5 py-4 text-center inline-flex items-center text-gray font-bold"
              type="button"
              onClick={() => setShowCategory(!showCategory)}
            >
              All Categories
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-50 mt-2 bg-white divide-y divide-gray-100 rounded-sm shadow-lg w-48 absolute ${
                showCategory ? 'block' : 'hidden'
              }`}
            >
              <ul
                className="py-2 text-sm text-gray-700"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    to="/shop"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setShowCategory(false)}
                  >
                    Desktop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setShowCategory(false)}
                  >
                    Laptop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setShowCategory(false)}
                  >
                    SmartPhone
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setShowCategory(false)}
                  >
                    Watch
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setShowCategory(false)}
                  >
                    Headphone
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setShowCategory(false)}
                  >
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setShowCategory(false)}
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* process */}
          <div className="flex space-x-5 items-center lg:ml-10">
            <div className="flex space-x-1 items-center">
              <CiLocationOn className="text-xl" />
              <p className="text-sm text-pure-gray">Track Order</p>
            </div>
            <div className="flex space-x-1 items-center">
              <PiArrowBendDoubleUpRightThin className="text-xl" />
              <p className="text-sm text-pure-gray">Compare</p>
            </div>
            <div className="flex space-x-1 items-center">
              <PiHeadphonesThin className="text-xl" />
              <p className="text-sm text-pure-gray">Customer Support</p>
            </div>
            <div className="flex space-x-1 items-center">
              <IoIosInformationCircleOutline className="text-xl" />
              <p className="text-sm text-pure-gray">Need Help</p>
            </div>
          </div>
          {/* phone */}
          <div className="phone flex items-center space-x-2 ml-auto">
            <LiaPhoneVolumeSolid />
            <span className="text-pure-gray text-sm">+88-01740-020464</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
