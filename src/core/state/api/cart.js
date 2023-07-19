import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    duplicateItem: (state, action) => {
      const itemId = action.payload;
      const itemToDuplicate = state.items.find((item) => item.id === itemId);
      if (itemToDuplicate) {
        state.items.push(itemToDuplicate);
      }
    },
  },
});

export const { addItem, deleteItem, duplicateItem } = cartSlice.actions;

export default cartSlice.reducer;
