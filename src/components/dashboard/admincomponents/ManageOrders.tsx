'use client';

import Loader from '@/components/common/Loader';
import CheckRoleAndLogout from '@/hooks/CheckRoleAndLogout';
import { useGetProfileQuery } from '@/redux/api/authApi';
import {
  useGetAllOrdersForAdminHistoryQuery,
  useUpdateOrderStatusMutation,
} from '@/redux/api/orderApi';
import { useEffect, useState } from 'react';

const ManageOrders = () => {
  CheckRoleAndLogout('admin');

  const [customersEmail, setCustomersEmail] = useState<string>('');

  const { data: profileData, isLoading } = useGetProfileQuery(undefined);
  const userProfileFromDb = profileData?.data;

  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  /* pagination */
  const [page, setPage] = useState<string>('1');
  const limit = '10';
  const handlePageChange = (page: number) => {
    setPage(page.toString());
  };

  /* query */
  const allFilters = {
    page: page,
    limit: limit,
    customersEmail: customersEmail,
  };

  const createQueryString = (obj: any) => {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(
        encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
      );
    }
    return keyValuePairs.join('&');
  };

  let queryParams = createQueryString(allFilters);

  useEffect(() => {
    queryParams = createQueryString({
      page,
      limit,
      customersEmail,
    });
  }, [page, limit, customersEmail]);

  const { data: orders, isLoading: isAllOrdersLoading } =
    useGetAllOrdersForAdminHistoryQuery(queryParams, {
      refetchOnMountOrArgChange: true,
    });
  const allOrders = orders?.data;

  console.log('allOrders', allOrders);

  const totalItems = allOrders?.orders?.length || 0;
  const totalPages = Math.ceil(Number(totalItems) / Number(limit));

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
