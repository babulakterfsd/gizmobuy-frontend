import { Link } from 'react-router-dom';
import androidapp from '../../assets/images/download-android.png';
import appleapp from '../../assets/images/download-apple.png';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <div className="bg-black pt-20 pb-4">
      <div className="main-container text-white flex justify-between items-start">
        {/* logo */}
        <div>
          <Link className="flex gap-x-2 items-center w-24" to="/">
            <img src={logo} alt="GizmoBuy" className="w-8 h-8 object-cover" />
            <span className="font-bold text-xl">GizmoBuy</span>
          </Link>
          <div>
            <p className="text-offgray text-sm mt-6">Customer Support:</p>
            <p className="">+880-1740-020464</p>
          </div>
          <div className="my-6 text-sm text-offgray">
            Jinjirtala, Dhunat Pouroshava <br />
            Dhunat 5850, Bogura, Bangladesh
          </div>
          <div>babulakterfsd@gmail.com</div>
        </div>
        {/* top categories */}
        <div>
          <p className="uppercase font-semibold mb-4">top categoris</p>
          <div className="links flex flex-col gap-y-3">
            <Link
              to="/shop"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              Desktop
            </Link>
            <Link
              to="/shop"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              Laptop
            </Link>
            <Link
              to="/shop"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              SmartPhone
            </Link>
            <Link
              to="/shop"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              Fashion
            </Link>
            <Link
              to="/shop"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              Accessories
            </Link>
            <Link
              to="/shop"
              className="text-yellow-200 font-semibold text-sm hover:text-[#77878F] hover:pl-1 hover:transition-all duration-300"
            >
              All Categories <span>&rarr;</span>
            </Link>
          </div>
        </div>
        {/* quick links */}
        <div>
          <p className="uppercase font-semibold mb-4">quick links</p>
          <div className="links flex flex-col gap-y-3">
            <Link
              to="/login"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/shop"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/about-us"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              to="/faq"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              FAQ
            </Link>
            <Link
              to="/support"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              Support
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-offgray font-semibold text-sm hover:text-yellow-200 hover:pl-1 hover:transition-all duration-300"
            >
              Terms & Policy
            </Link>
          </div>
        </div>
        {/* downlaod */}
        <div>
          <p className="uppercase font-semibold mb-4">download app</p>
          <div className="links flex flex-col gap-y-3">
            <a href="https://babulakter.com" target="_blank">
              <img
                src={appleapp}
                alt="Download Apple App"
                className="w-[90px] h-auto object-cover"
              />
            </a>
            <a href="https://babulakter.com" target="_blank">
              <img
                src={androidapp}
                alt="Download Android App"
                className="w-[90px] h-auto object-cover"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray mt-16"></div>
      <div className="flex gap-x-8 justify-center items-center mt-6">
        <p className="text-offgray text-[12px] font-semibold">
          All rights reserved by GizmoBuy &copy;2024
        </p>
        <p className="text-offgray text-[12px] font-semibold">|</p>
        <p className="text-offgray text-[12px] font-semibold">
          Developed with love by Babul Akter&trade;
        </p>
      </div>
    </div>
  );
};

export default Footer;
