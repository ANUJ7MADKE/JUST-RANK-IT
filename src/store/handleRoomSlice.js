import { createSlice } from "@reduxjs/toolkit";

const handleRoomSlice = createSlice({
  name : "handleRoom",
  initialState : {rooms : []},
  reducers : {
    updateRoom(state,action){
      state.rooms = action.payload
    }
  }
})

export const handleRoomSliceActions = handleRoomSlice.actions

export default handleRoomSlice