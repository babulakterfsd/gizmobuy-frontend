import Loader from '@/components/common/Loader';
import CheckRoleAndLogout from '@/hooks/CheckRoleAndLogout';
import { useGetProfileQuery } from '@/redux/api/authApi';
import { useUpdateOrderStatusMutation } from '@/redux/api/orderApi';

const ManageOrders = () => {
  CheckRoleAndLogout('admin');

  const { data: profileData, isLoading } = useGetProfileQuery(undefined);
  const userProfileFromDb = profileData?.data;

  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="main-container pb-8">
      <h3 className="text-center mt-10 lg:mt-14 text-xl mb-3 lg:text-2xl">
        Manage Orders
      </h3>
      <p className="text-center lg:mt-2 md:text-md lg:w-2/3 lg:mx-auto">
        Welcome, {userProfileFromDb?.name}! You can manage your orders here. You
        can view and update the status of your orders. Orders can't be canceled
        once they are placed.
      </p>
    </div>
  );
};

export default ManageOrders;
