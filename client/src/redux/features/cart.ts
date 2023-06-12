import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}

const calculateTotalPrice = (items: CartItem[]) => {
  return items.reduce((total, item) => total + item.price, 0);
};

const loadCartState = (): CartState => {
  const storedItems = localStorage.getItem("cartItems");
  const storedTotalItems = localStorage.getItem("totalItems");

  if (storedItems && storedTotalItems) {
    const items: CartItem[] = JSON.parse(storedItems);
    const totalItems: number = parseInt(storedTotalItems);
    const totalPrice: number = calculateTotalPrice(items);

    return {
      items,
      totalItems,
      totalPrice,
    };
  }

  return {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  };
};

const initialState: CartState = loadCartState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      state.items.push(item);
      state.totalItems += 1;
      state.totalPrice = calculateTotalPrice(state.items);

      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("totalItems", state.totalItems.toString());
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const removedItem = state.items.find(item => item.id === itemId);
      if (removedItem) {
        state.totalPrice -= removedItem.price;
        state.items = state.items.filter(item => item.id !== itemId);
        state.totalItems -= 1;

        localStorage.setItem("cartItems", JSON.stringify(state.items));
        localStorage.setItem("totalItems", state.totalItems.toString());
      }
    },
    clearCart: state => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;

      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("totalItems", state.totalItems.toString());
    },
    updateCartItemPrice: (
      state,
      action: PayloadAction<{ id: string; price: number }>
    ) => {
      const { id, price } = action.payload;
      const cartItem = state.items.find(item => item.id === id);

      if (cartItem) {
        state.totalPrice -= cartItem.price;
        cartItem.price = price;
        state.totalPrice += price;

        localStorage.setItem("cartItems", JSON.stringify(state.items));
        localStorage.setItem("totalItems", state.totalItems.toString());
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartItemPrice } =
  cartSlice.actions;

export default cartSlice.reducer;
