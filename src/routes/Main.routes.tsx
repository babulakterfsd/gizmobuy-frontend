import AboutUs from '@/pages/AboutUs';
import Blog from '@/pages/Blog';
import Faq from '@/pages/Faq';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import ProductCompare from '@/pages/ProductCompare';
import Shop from '@/pages/Shop';
import Signup from '@/pages/Signup';
import Support from '@/pages/Support';
import TermsAndConditions from '@/pages/TermsAndConditions';

export const mainRoutePaths = [
  { index: true, element: <Home /> },
  { path: 'about-us', element: <AboutUs /> },
  { path: 'blog', element: <Blog /> },
  { path: 'faq', element: <Faq /> },
  { path: 'compare-product', element: <ProductCompare /> },
  { path: 'shop', element: <Shop /> },
  { path: 'support', element: <Support /> },
  { path: 'terms-and-conditions', element: <TermsAndConditions /> },
  { path: 'login', element: <Login /> },
  { path: 'signup', element: <Signup /> },
];
