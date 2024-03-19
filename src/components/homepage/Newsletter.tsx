import { useState } from 'react';
import amazon from '../../assets/images/Frame.png';
import google from '../../assets/images/google-2015 1.png';
import philips from '../../assets/images/philips 1.png';
import samsung from '../../assets/images/samsung-4 1.png';
import toshiba from '../../assets/images/toshiba-1 1.png';

const Newsletter = () => {
  const [emailToBeSubscribed, setEmailToBeSubscribed] = useState('');

  const handleEmailSubscription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailToBeSubscribed('');
  };

  return (
    <div className="mt-12 bg-bluish pt-16 pb-10 flex justify-center items-center flex-col">
      <h4 className="text-3xl font-semibold text-white">
        Subscribe to our newsletter
      </h4>
      <p className="text-gray-400 text-sm w-1/3 text-center my-3">
        Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero
        et cursus. Donec non quam urna. Quisque vitae porta ipsum.
      </p>
      <div className="mt-4">
        <form className="relative" onSubmit={handleEmailSubscription}>
          <input
            type="email"
            className="bg-white py-4 px-3 rounded-sm w-full md:w-96 lg:w-[500px] focus:outline-none focus:border-none text-black relative"
            placeholder="e.g. babulakterfsd@gmail.com"
            required
            value={emailToBeSubscribed}
            onChange={(e) => setEmailToBeSubscribed(e.target.value)}
          />
          <button
            type="submit"
            className="bg-deep-yellow text-white absolute right-0 py-4  px-5 rounded font-bold"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="h-[.1px] w-1/4 bg-[#2878ae] mt-8"></div>
      <div className="flex justify-between items-center space-x-8">
        <img src={amazon} alt="Amazon" className="w-16 h-auto object-cover" />
        <img src={google} alt="Google" className="w-16 h-auto object-cover" />
        <img src={philips} alt="Philips" className="w-16 h-auto object-cover" />
        <img src={samsung} alt="Samsung" className="w-16 h-auto object-cover" />
        <img src={toshiba} alt="Toshiba" className="w-16 h-auto object-cover" />
      </div>
    </div>
  );
};

export default Newsletter;
