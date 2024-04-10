import { useCurrentUser } from '@/redux/features/authSlice';
import { useAppSelector } from '@/redux/hook';
import { TCurrentUser } from '@/types/commonTypes';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Checkout = () => {
  const { id } = useParams<{ id: string }>();
  const currentUser = useAppSelector(useCurrentUser) as TCurrentUser;
  if (id !== currentUser._id) {
    return <NotFound />;
  }

  return (
    <div>
      <h4>This is the checkout page</h4>
    </div>
  );
};

export default Checkout;
