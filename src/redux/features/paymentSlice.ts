import { createSlice } from '@reduxjs/toolkit';
import { paymentInitialState } from '../initialStates';
import { RootState } from '../store';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: paymentInitialState,
  reducers: {
    CalculateAmountToBePaid: (state, action) => {
      state.cartProducts = action.payload.cartProducts;
      state.appliedCoupon = action.payload.appliedCoupon;
      state.discount = action.payload.discount;
      state.totalToBePaid = action.payload.totalToBePaid;
    },
  },
});

export const { CalculateAmountToBePaid } = paymentSlice.actions;
export default paymentSlice.reducer;

export const usePaymentCalculation = (state: RootState) => state.payment;
