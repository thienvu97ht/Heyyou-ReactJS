import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "api/cartApi";
import StorageKeys from "constants/storage-keys";

export const getProductsInCart = createAsyncThunk(
  "cart/getProductsInCart",
  async (payload) => {
    const data = await cartApi.getProductsInCart(payload);

    localStorage.setItem(StorageKeys.CART, JSON.stringify(data));
    return data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: JSON.parse(localStorage.getItem(StorageKeys.CART)) || [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart(true);
    },

    hideMiniCart(state) {
      state.showMiniCart(false);
    },

    clearCart(state, action) {
      // clear local storage
      localStorage.removeItem(StorageKeys.CART);

      state.cartItems = [];
    },
  },

  extraReducers: {
    [getProductsInCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, clearCart } = actions;
export default reducer;
