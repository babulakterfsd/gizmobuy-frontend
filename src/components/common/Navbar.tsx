import {
  setUserInLocalState,
  useCurrentToken,
  useCurrentUser,
} from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { TCurrentUser } from '@/types/commonTypes';
import { useEffect } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart2, BsHeart } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRightLong, FaLinkedinIn } from 'react-icons/fa6';
import { IoIosInformationCircleOutline, IoLogoGithub } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io5';
import {
  PiArrowBendDoubleUpRightThin,
  PiHeadphonesThin,
  PiPhoneDisconnectThin,
} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-white.png';

const Navbar = () => {
  const currentUser = useAppSelector(useCurrentUser) as TCurrentUser;

  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('https://gizmobuy-backend.vercel.app/api/auth/verify-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data: any) => {
        if (data?.data !== true) {
          dispatch(setUserInLocalState({ user: null, token: null }));
        }
      });
  }, [token]);

  return (
    <div className="navbar">
      <div className="bg-bluish text-white">
        <div className="main-container">
          {/* welcome */}
          <div className="flex flex-col md:flex-row gap-y-2 justify-between items-center py-3">
            <h1 className="text-white text-sm">
              {` ${
                currentUser?.name
                  ? `Welcome to GizmoBuy, ${currentUser?.name}`
                  : 'Welcome to GizmoBuy ecommerce store.'
              }`}
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
            <Link className="flex gap-x-1 lg:gap-x-2 items-center w-24" to="/">
              <img
                src={logo}
                alt="GizmoBuy"
                className="w-6 lg:w-10 h-6 lg:h-10 object-cover"
              />
              <span className="font-bold text-xl md:text-2xl lg:text-2xl">
                GizmoBuy
              </span>
            </Link>
            {/* menubar */}
            <div className="hidden md:block md:ml-20 lg:ml-0">
              <ul className="flex space-x-5 items-center justify-center">
                <Link to="/shop">
                  <li className="text-white cursor-pointer hover:text-yellow-500 transition-all duration-300 hover:transition-all text-base">
                    Shop
                  </li>
                </Link>
                <Link to="/about-us">
                  <li className="text-white cursor-pointer hover:text-yellow-500 transition-all duration-300 hover:transition-all text-base">
                    About Us
                  </li>
                </Link>
                <Link to="/support">
                  <li className="text-white cursor-pointer hover:text-yellow-500 transition-all duration-300 hover:transition-all text-base">
                    Support
                  </li>
                </Link>
              </ul>
            </div>
            {/* items */}
            <div className="flex justify-center space-x-5 items-center">
              <span className="text-xl md:text-2xl text-white cursor-pointer">
                <BsCart2 />
              </span>
              <span className="text-base md:text-xl mt-1 text-white cursor-pointer">
                <BsHeart />
              </span>
              <Link
                to={
                  token ? `/dashboard/${currentUser?.role}/overview` : '/login'
                }
              >
                <span className="text-xl md:text-2xl text-white cursor-pointer">
                  <AiOutlineUser />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 shadow-sm mb-6 hidden lg:block">
        <div className="main-container items-center hidden lg:flex">
          {/* shop button*/}
          <div className="">
            <Link to="/shop">
              <button className="text-white bg-offwhite hover:bg-[#e8ebec] focus:outline-none rounded-sm text-sm px-5 py-4 text-center items-center text-gray flex space-x-2">
                <span className="font-semibold">Shop Now</span>{' '}
                <FaArrowRightLong />
              </button>
            </Link>
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
          <div className="phone flex items-center space-x-1 ml-auto">
            <PiPhoneDisconnectThin />
            <span className="text-pure-gray text-sm">+880-1740-020464</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
