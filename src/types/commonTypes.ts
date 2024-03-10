export type TUser = {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  isBlocked: boolean;
  isEmailVerified: boolean;
  lastTwoPasswords?: string[];
  profileImage?: string;
};

export type TAuthInitialState = {
  user: object | null;
  token: string | null;
};

export type TCurrentUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isBlocked: boolean;
};

export type TProduct = {
  _id: string;
  title: string;
  price: number;
  stock: number;
  reviews: string[];
  brand: string;
  category: string;
  photos: string[];
  displayImage: string;
  description: string;
  vendor: string;
  runningDiscount: number;
  releaseDate: string;
};

export type TOrder = {
  _id: string;
  productID: string;
  orderedBy: string;
  vendorID: string;
  productTitle: string;
  quantity: number;
  shippingAddress: string;
  billingAddress: string;
  billingInfo: string;
  orderStatus: string;
  discountGiven: number;
  appliedCoupon: string;
  totalBill: number;
};

export type TCoupon = {
  _id: string;
  code: string;
  discountPercentage: number;
  validTill: string;
};

export type TReview = {
  _id: string;
  productID: string;
  reviewBy: string;
  rating: number;
  comment: string;
  vendorsReply: string;
};

export type TTimeframeForOrderHistory =
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly';

export type TProductFilters = {
  minPrice: number;
  maxPrice: number;
  brand: string;
  vendor: string;
  category: string;
  releaseDate: string;
};

export type TProductSort = {
  sortBy: string;
  sortOrder: string;
};

export type TProductCategories =
  | 'desktop'
  | 'laptop'
  | 'smartphone'
  | 'watch'
  | 'headphone'
  | 'fashion'
  | 'accessories';
