import { createSlice } from '@reduxjs/toolkit';

const showCreateRoomModalSlice = createSlice({
  name: "showCreateRoomModal",
  initialState: { isOpen: false },
  reducers: {
    closeModal(state) {
      state.isOpen = false;
    },
    openModal(state) {
      state.isOpen = true;
    }
  }
});

export const showCreateRoomModalActions = showCreateRoomModalSlice.actions;

export default showCreateRoomModalSlice;
