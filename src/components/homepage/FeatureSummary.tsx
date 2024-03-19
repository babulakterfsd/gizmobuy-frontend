import card from '../../assets/images/CreditCard.png';
import support from '../../assets/images/Headphones.png';
import packaging from '../../assets/images/Package.png';
import trophy from '../../assets/images/Trophy.svg';

const FeatureSummary = () => {
  return (
    <>
      {/* feature 1 */}
      <div className="flex space-x-4">
        <img
          src={packaging}
          alt="packaging"
          className="object-contain w-10 h-10 col-span-6"
        />
        <div className="col-span-6">
          <h2 className="text-sm font-semibold text-black uppercase">
            Faster Delivery
          </h2>
          <p className="text-sm  text-graish font-thin">Delivery in 24/4</p>
        </div>
      </div>
      {/* feature 2 */}
      <div className="flex space-x-4">
        <img
          src={trophy}
          alt="packaging"
          className="object-contain w-10 h-10 col-span-6"
        />
        <div className="col-span-6">
          <h2 className="text-sm font-semibold text-black uppercase">
            24 hours return
          </h2>
          <p className="text-sm  text-graish font-thin">
            100% money back guarantee
          </p>
        </div>
      </div>
      {/* feature 3 */}
      <div className="flex space-x-4">
        <img
          src={card}
          alt="packaging"
          className="object-contain w-10 h-10 col-span-6"
        />
        <div className="col-span-6">
          <h2 className="text-sm font-semibold text-black uppercase">
            Secure Payment
          </h2>
          <p className="text-sm  text-graish font-thin">Your money is safe</p>
        </div>
      </div>
      {/* feature 4 */}
      <div className="flex space-x-4">
        <img
          src={support}
          alt="packaging"
          className="object-contain w-10 h-10 col-span-6"
        />
        <div className="col-span-6">
          <h2 className="text-sm font-semibold text-black uppercase">
            Support 24/7
          </h2>
          <p className="text-sm  text-graish font-thin">
            Live contact / message
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureSummary;
