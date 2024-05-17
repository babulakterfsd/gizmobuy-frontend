import AdminOverview from '@/components/dashboard/admincomponents/AdminOverview';
import AdminProfile from '@/components/dashboard/admincomponents/AdminProfile';
import ManageVendors from '@/components/dashboard/admincomponents/ManageVendors';
import ManageCustomers from '@/components/dashboard/admincomponents/MangeCustomers';
import SellsReport from '@/components/dashboard/admincomponents/SellsReport';
import BuyHistory from '@/components/dashboard/customercomponents/BuyHistory';
import CustomerOverview from '@/components/dashboard/customercomponents/CustomerOverview';
import CustomerProfile from '@/components/dashboard/customercomponents/CustomerProfile';
import MyOrders from '@/components/dashboard/customercomponents/MyOrders';
import VendorManageOrders from '@/components/dashboard/vendorcomponents/ManageOrders';
import VendorManageProducts from '@/components/dashboard/vendorcomponents/ManageProducts';
import VendorsSellsReport from '@/components/dashboard/vendorcomponents/SellsReport';
import VendorOverview from '@/components/dashboard/vendorcomponents/VendorOverview';
import VendorProfile from '@/components/dashboard/vendorcomponents/VendorProfile';
import NotFound from '@/pages/NotFound';

export const dashboardRoutePaths = [
  { index: true, element: <NotFound /> },
  {
    /* admin routes */
  },
  { path: 'admin/profile', element: <AdminProfile /> },
  { path: 'admin/overview', element: <AdminOverview /> },
  { path: 'admin/manage-vendors', element: <ManageVendors /> },
  { path: 'admin/manage-customers', element: <ManageCustomers /> },
  { path: 'admin/sells-report', element: <SellsReport /> },
  {
    /* vendor routes */
  },
  { path: 'vendor/profile', element: <VendorProfile /> },
  { path: 'vendor/overview', element: <VendorOverview /> },
  { path: 'vendor/manage-products', element: <VendorManageProducts /> },
  { path: 'vendor/manage-orders', element: <VendorManageOrders /> },
  { path: 'vendor/sells-report', element: <VendorsSellsReport /> },
  {
    /* customer routes */
  },
  { path: 'customer/profile', element: <CustomerProfile /> },
  { path: 'customer/overview', element: <CustomerOverview /> },
  { path: 'customer/manage-orders', element: <MyOrders /> },
  { path: 'customer/buy-history', element: <BuyHistory /> },
  { path: '*', element: <NotFound /> },
];
