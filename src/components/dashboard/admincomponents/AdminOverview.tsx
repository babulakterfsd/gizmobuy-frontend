import Loader from '@/components/common/Loader';
import CheckRoleAndLogout from '@/hooks/CheckRoleAndLogout';
import { useGetAdminOverviewMetaDataQuery } from '@/redux/api/authApi';

const AdminOverview = () => {
  CheckRoleAndLogout('admin');

  const { data: overViewData, isLoading: isOverViewDataLoading } =
    useGetAdminOverviewMetaDataQuery(undefined);

  if (isOverViewDataLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h3 className="text-center mt-10 lg:mt-14 text-2xl">Admin Overview</h3>
      <p className="text-center lg:mt-2 md:text-md lg:w-2/3 lg:mx-auto">
        In this section, you can see your sites total customers, total orders,
        total vendors, revenue, and more. To see details, you need to visit the
        relevant route. In this overview page, only summaries are shown.
      </p>
      <div className="mt-16 md:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 px-6 pb-8 lg:pb-16">
        {/* users */}
        <div className="py-4 px-3 flex justify-center items-center flex-col shadow bg-gray-100 rounded">
          <h3 className="gradientTitle tracking-wider text-5xl font-bold">
            {overViewData?.data?.totalUsers < 10
              ? `0${overViewData?.data?.totalUsers}`
              : overViewData?.data?.totalUsers}
          </h3>
          <p className="text-lg font-semibold text-gray-400 mt-1.5">
            Total Users
          </p>
        </div>
        {/* admins */}
        <div className="py-4 px-3 flex justify-center items-center flex-col shadow bg-gray-100 rounded">
          <h3 className="gradientTitle tracking-wider text-5xl font-bold">
            {overViewData?.data?.totalAdmin < 10
              ? `0${overViewData?.data?.totalAdmin}`
              : overViewData?.data?.totalAdmin}
          </h3>
          <p className="text-lg font-semibold text-gray-400 mt-1.5">
            Total Admin
          </p>
        </div>
        {/* vendors */}
        <div className="py-4 px-3 flex justify-center items-center flex-col shadow bg-gray-100 rounded">
          <h3 className="gradientTitle tracking-wider text-5xl font-bold">
            {overViewData?.data?.totalVendor < 10
              ? `0${overViewData?.data?.totalVendor}`
              : overViewData?.data?.totalVendor}
          </h3>
          <p className="text-lg font-semibold text-gray-400 mt-1.5">
            Total vendor
          </p>
        </div>
        {/* customers */}
        <div className="py-4 px-3 flex justify-center items-center flex-col shadow bg-gray-100 rounded">
          <h3 className="gradientTitle tracking-wider text-5xl font-bold">
            {overViewData?.data?.totalCustomer < 10
              ? `0${overViewData?.data?.totalCustomer}`
              : overViewData?.data?.totalCustomer}
          </h3>
          <p className="text-lg font-semibold text-gray-400 mt-1.5">
            Total Customer
          </p>
        </div>
        {/* products */}
        <div className="py-4 px-3 flex justify-center items-center flex-col shadow bg-gray-100 rounded">
          <h3 className="gradientTitle tracking-wider text-5xl font-bold">
            {overViewData?.data?.totalProduct < 10
              ? `0${overViewData?.data?.totalProduct}`
              : overViewData?.data?.totalProduct}
          </h3>
          <p className="text-lg font-semibold text-gray-400 mt-1.5">
            Total Product
          </p>
        </div>
        {/* orders */}
        <div className="py-4 px-3 flex justify-center items-center flex-col shadow bg-gray-100 rounded">
          <h3 className="gradientTitle tracking-wider text-5xl font-bold">
            {overViewData?.data?.totalOrders < 10
              ? `0${overViewData?.data?.totalOrders}`
              : overViewData?.data?.totalOrders}
          </h3>
          <p className="text-lg font-semibold text-gray-400 mt-1.5">
            Orders Completed
          </p>
        </div>
        {/* total sells */}
        <div className="py-4 px-3 flex justify-center items-center flex-col shadow bg-gray-100 rounded">
          <h3 className="gradientTitle tracking-wider text-3xl md:text-5xl font-bold">
            {overViewData?.data?.totalSellByAllVendors < 10
              ? `$0${overViewData?.data?.totalSellByAllVendors}`
              : `$${overViewData?.data?.totalSellByAllVendors}`}
          </h3>
          <p className="text-lg font-semibold text-gray-400 mt-1.5">
            Total Sells
          </p>
        </div>
        {/* gizmobuy profit */}
        <div className="py-4 px-3 flex justify-center items-center flex-col shadow bg-gray-100 rounded">
          <h3 className="gradientTitle tracking-wider text-3xl md:text-5xl font-bold">
            {overViewData?.data?.totalProfitOfGizmobuy < 10
              ? `0${overViewData?.data?.totalProfitOfGizmobuy}`
              : `$${overViewData?.data?.totalProfitOfGizmobuy}`}
          </h3>
          <p className="text-lg font-semibold text-gray-400 mt-1.5">
            Gizmobuy Profit
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
