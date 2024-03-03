import Loader from '@/components/common/Loader';
import CheckRoleAndLogout from '@/hooks/CheckRoleAndLogout';
import { useGetProfileQuery } from '@/redux/api/authApi';

const MyOrders = () => {
  CheckRoleAndLogout('customer');

  const { data: profileData, isLoading } = useGetProfileQuery(undefined);
  const userProfileFromDb = profileData?.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col gap-y-3 justify-center items-center ">
      <h1>{`All your orders are here, ${userProfileFromDb?.name}`}</h1>
      <p>{`Your role is ${userProfileFromDb?.role}`}</p>
    </div>
  );
};

export default MyOrders;
