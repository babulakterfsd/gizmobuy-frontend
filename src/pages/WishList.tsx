import { useCurrentUser } from '@/redux/features/authSlice';
import { useWishedProducts } from '@/redux/features/wishListSlice';
import { useAppSelector } from '@/redux/hook';
import { TCurrentUser } from '@/types/commonTypes';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const WishList = () => {
  const { id } = useParams<{ id: string }>();
  const currentUser = useAppSelector(useCurrentUser) as TCurrentUser;
  const wishedProducts = useAppSelector(useWishedProducts);

  if (id !== currentUser._id) {
    return <NotFound />;
  }

  return (
    <div className="main-container">
      <p>This is the wishlist page</p>
    </div>
  );
};

export default WishList;
