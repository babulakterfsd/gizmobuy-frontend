import { useCurrentUser } from '@/redux/features/authSlice';
import { usePaymentCalculation } from '@/redux/features/paymentSlice';
import { useShoppingCartProducts } from '@/redux/features/shoppingCartSlice';
import { useAppSelector } from '@/redux/hook';
import { TCurrentUser } from '@/types/commonTypes';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Checkout = () => {
  const { id } = useParams<{ id: string }>();
  const currentUser = useAppSelector(useCurrentUser) as TCurrentUser;
  const shoppingCartProducts = useAppSelector(useShoppingCartProducts);
  const payments = useAppSelector(usePaymentCalculation);

  console.log('payments', payments);

  if (id !== currentUser._id || shoppingCartProducts.length === 0) {
    return <NotFound />;
  }

  return (
    <div>
      <h4>This is the checkout page</h4>
    </div>
  );
};

export default Checkout;
