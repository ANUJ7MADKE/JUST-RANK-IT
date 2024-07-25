import { configureStore } from "@reduxjs/toolkit"
import showCreateRoomModalSlice from "./showCreateRoomModalSlice"
import handleRoomSlice from "./handleRoomSlice"


const store = configureStore({
  reducer: {showCreateRoomModal: showCreateRoomModalSlice.reducer,
    handleRoom: handleRoomSlice.reducer,
  }
})

export default store