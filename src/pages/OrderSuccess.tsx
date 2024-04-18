import { useCurrentUser } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { TCurrentUser } from '@/types/commonTypes';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const OrderSuccess = () => {
  const { id } = useParams<{ id: string }>();
  const currentUser = useAppSelector(useCurrentUser) as TCurrentUser;
  const dispatch = useAppDispatch();

  if (id !== currentUser._id) {
    return <NotFound />;
  }

  return (
    <div>
      <h2>Your order has been placed successfully</h2>
    </div>
  );
};

export default OrderSuccess;
