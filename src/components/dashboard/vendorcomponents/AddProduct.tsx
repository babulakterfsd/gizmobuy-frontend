'use client';

import CheckRoleAndLogout from '@/hooks/CheckRoleAndLogout';
import { useGetProfileQuery } from '@/redux/api/authApi';

const AddProduct = () => {
  CheckRoleAndLogout('vendor');

  const { data: profileData, isLoading } = useGetProfileQuery(undefined);
  const userProfileFromDb = profileData?.data;

  return (
    <div>
      <h3 className="text-center mt-10 lg:mt-14 text-2xl">Add New Product</h3>
      <p className="text-center lg:mt-2 md:text-md lg:w-2/3 lg:mx-auto">
        Welcome, {userProfileFromDb?.name}! Here you can add a new product to
        your store. Please fill in the details below. Make sure to provide
        accurate information. You can always edit the product later.
      </p>
    </div>
  );
};

export default AddProduct;
