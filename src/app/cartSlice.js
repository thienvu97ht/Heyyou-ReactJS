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

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (payload, thunkAPI) => {
    const { cartItems } = thunkAPI.getState().cart;

    const index = cartItems.findIndex((x) => x.id === payload.id);

    if (index >= 0) {
      // San pham da co trong gio hang

      const newItem = {
        ...payload,
        quantity: payload.quantity + cartItems[index].quantity,
      };

      const data = await cartApi.updateCart(newItem);
      localStorage.setItem(StorageKeys.CART, JSON.stringify(data));
      return data;
    } else {
      // San pham chua co trong gio hang

      const data = await cartApi.addToCart(payload);
      localStorage.setItem(StorageKeys.CART, JSON.stringify(data));
      return data;
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (payload) => {
    const data = await cartApi.removeCartItem(payload);

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

    [addToCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
    },

    [removeCartItem.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, clearCart } = actions;
export default reducer;
