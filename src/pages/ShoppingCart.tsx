import { useCurrentUser } from '@/redux/features/authSlice';
import { useShoppingCartProducts } from '@/redux/features/shoppingCartSlice';
import { useAppSelector } from '@/redux/hook';
import { TCurrentUser } from '@/types/commonTypes';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const ShoppingCart = () => {
  const { id } = useParams<{ id: string }>();
  const currentUser = useAppSelector(useCurrentUser) as TCurrentUser;

  if (id !== currentUser._id) {
    return <NotFound />;
  }

  const shoppingCartProducts = useAppSelector(useShoppingCartProducts);

  return (
    <div className="main-container">
      <p>This is shopping cart page</p>
    </div>
  );
};

export default ShoppingCart;