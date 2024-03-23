import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const [showTopbar, setShowTopbar] = useState(true);

  const handleShowTopbar = () => {
    setShowTopbar(!showTopbar);
  };

  if (!showTopbar) return null;

  return (
    <div className="bg-custom-black">
      <div className="main-container flex justify-between items-center text-white h-16">
        <div className="flex gap-x-2">
          <p className="bg-yellow text-custom-black px-2 py-1 -rotate-6 rounded font-semibold">
            Black
          </p>
          <span>Friday</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <span>Up to</span>{' '}
          <span className="text-4xl text-deep-yellow font-semibold">50%</span>{' '}
          <span>OFF</span>
        </div>
        <div>
          <Link to="/shop">
            <button className="bg-deep-yellow py-2.5 px-6 rounded text-custom-black font-semibold flex items-center gap-x-2">
              Shop Now <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <div className="absolute right-3">
          <button className="bg-gray p-1" onClick={handleShowTopbar}>
            <RxCross2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
