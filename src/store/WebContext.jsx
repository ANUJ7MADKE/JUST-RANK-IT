import { createContext } from "react";

export const WebContext = createContext({
    state : {},
    dispatch : ()=>{},
    CreateRoomModalRef : ''
});


