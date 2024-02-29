import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <div className="bg-black py-20">
      <div className="main-container text-white flex justify-between items-center">
        {/* logo */}
        <div>
          <Link className="flex gap-x-2 items-center w-24" to="/">
            <img src={logo} alt="GizmoBuy" className="w-8 h-8 object-cover" />
            <span className="font-bold text-xl">GizmoBuy</span>
          </Link>
          <div>
            <p className="text-offgray text-sm mt-6">Customer Support:</p>
            <p className="">+88-01740-020464</p>
          </div>
          <div className="my-6 text-sm text-offgray">
            Jinjirtala, Dhunat Pouroshava <br />
            Dhunat 5850, Bogura, Bangladesh
          </div>
          <div>babulakterfsd@gmail.com</div>
        </div>
        {/* top categories */}
        <div>top categoris</div>
        {/* quick links */}
        <div>quick links</div>
        {/* downlaod */}
        <div>downlaod app</div>
        {/* popular tags */}
        <div>popular tags</div>
      </div>
    </div>
  );
};

export default Footer;
