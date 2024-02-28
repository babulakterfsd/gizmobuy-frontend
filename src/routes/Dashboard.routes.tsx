import Profile from '@/components/dashboard/Profile';
import NotFound from '@/pages/NotFound';

export const dashboardRoutePaths = [
  { index: true, element: <Profile /> },
  { path: '*', element: <NotFound /> },
];
