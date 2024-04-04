import { TAuthInitialState, TWishListInitialState } from '../types/commonTypes';

export const authInitialState: TAuthInitialState = {
  user: null,
  token: null,
};

export const wishListInitialState: TWishListInitialState = {
  wishedProducts: [],
};
