import {
  TAuthInitialState,
  TShoppingCartInitialState,
  TWishListInitialState,
} from '../types/commonTypes';

export const authInitialState: TAuthInitialState = {
  user: null,
  token: null,
};

export const wishListInitialState: TWishListInitialState = {
  wishedProducts: [],
};

export const shoppingCartInitialState: TShoppingCartInitialState = {
  cartProducts: [],
};
