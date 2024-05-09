import ScrollToTop from '@/components/ui/ToTop';
import { useCurrentUser } from '@/redux/features/authSlice';
import {
  ClearPaymentInfoAfterMakingOrder,
  usePaymentCalculation,
} from '@/redux/features/paymentSlice';
import {
  MakeShoppingCartEmpty,
  useShoppingCartProducts,
} from '@/redux/features/shoppingCartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { TCurrentUser, TPaymentProduct } from '@/types/commonTypes';
import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import NotFound from './NotFound';

const Checkout = () => {
  const [billingInfoName, setBillingInfoName] = useState('');
  const [billingInfoEmail, setBillingInfoEmail] = useState('');
  const [shippingInfoName, setShippingInfoName] = useState('');
  const [shippingInfoEmail, setShippingInfoEmail] = useState('');

  const { id } = useParams<{ id: string }>();
  const currentUser = useAppSelector(useCurrentUser) as TCurrentUser;
  const shoppingCartProducts = useAppSelector(useShoppingCartProducts);
  const payments = useAppSelector(usePaymentCalculation);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (
    id !== currentUser._id ||
    shoppingCartProducts.length === 0 ||
    payments?.cartProducts.length === 0
  ) {
    return <NotFound />;
  }

  const handlePayment = () => {
    toast.success('Your order has been placed successfully!', {
      position: 'top-right',
      duration: 3000,
      icon: '🚀',
    });

    dispatch(ClearPaymentInfoAfterMakingOrder());
    dispatch(MakeShoppingCartEmpty());

    navigate(`/${currentUser?._id}/order-success`);
  };

  return (
    <div>
      <ScrollToTop />
      <div className="main-container mt-12 md:mt-16 mb-8 lg:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 md:gap-x-2 lg:gap-x-6 ">
          <div className="col-span-12 md:col-span-7 lg:col-span-8 h-fit shadow rounded">
            <h4 className="text-custom-black font-semibold py-3 px-4 lg:px-6">
              Shopping Cart
            </h4>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-y-6">
            {/* order summary */}
            <div className="shadow rounded px-4">
              <h4 className="text-custom-black font-semibold py-3 px-4 lg:px-0">
                Order Summary
              </h4>
              {/* products */}
              <div className="flex flex-col gap-y-6 pb-5 lg:mt-2">
                {payments?.cartProducts.map((product: TPaymentProduct) => (
                  <div
                    key={product?.productId}
                    className="flex justify-between items-center"
                  >
                    <div className="flex gap-x-6 items-center">
                      <img
                        src={product?.productImage}
                        alt={product?.productTitle}
                        className="w-10 h-10 object-contain"
                      />
                      <div>
                        <h5 className="text-custom-black text-sm font-semibold">
                          {product?.productTitle.length > 60
                            ? `${product?.productTitle.slice(0, 150)}${'...'}`
                            : product?.productTitle}
                        </h5>
                        <p className="text-bluish text-sm">
                          {product.quantity} x ${product?.productPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* order summary details */}
              <div className="flex flex-col gap-y-3 pb-5">
                <div className="flex justify-between items-center px-4 lg:px-2 mt-2 pb-2">
                  <h5 className="text-sm text-pure-gray">Sub-total</h5>
                  <h5 className="text-sm text-custom-black font-semibold">{`$${payments?.subtotal.toFixed(
                    2
                  )}`}</h5>
                </div>
                <div className="flex justify-between items-center px-4 lg:px-2 mt-2 pb-2">
                  <h5 className="text-sm text-pure-gray">Shipping</h5>
                  <h5 className="text-sm text-custom-black font-semibold">
                    {`$0.00`}
                  </h5>
                </div>
                <div className="flex justify-between items-center px-4 lg:px-2 mt-2 pb-2">
                  <h5 className="text-sm text-pure-gray">Discount</h5>
                  <h5 className="text-sm text-custom-black font-semibold">
                    {`$${payments?.discount.toFixed(2)}`}
                  </h5>
                </div>
                <div className="flex justify-between items-center px-4 lg:px-2 mt-2 border-b border-gray-300 pb-5">
                  <h5 className="text-sm text-pure-gray">Tax</h5>
                  <h5 className="text-sm text-custom-black font-semibold">
                    {`$0.00`}
                  </h5>
                </div>
                <div className="flex justify-between items-center px-4 lg:px-2 mt-3">
                  <h5 className="text-sm text-pure-gray font-semibold">
                    Total
                  </h5>

                  <h5 className="text-sm text-custom-black font-semibold">
                    {`$${payments?.totalToBePaid.toFixed(2)}`}
                  </h5>
                </div>
                <button
                  className="bg-orange py-2 lg:py-2.5 px-3 lg:px-6 rounded text-white font-semibold flex items-center justify-center gap-x-2 hover:bg-orange-500 w-full mt-4 text-center text-nowrap"
                  onClick={() => handlePayment()}
                >
                  Place Order <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
