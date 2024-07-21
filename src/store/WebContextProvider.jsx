import { useReducer, useRef } from "react";
import {WebContext} from "./WebContext";

import reducer from "./ReducerFunction";



const WebContextProvider = ({ children }) => {

    const initialState = {
        rooms: [],
    };


    const [state, dispatch] = useReducer(reducer, initialState);


    const CreateRoomModal = useRef()

    return (
        <WebContext.Provider value={{ state, dispatch, CreateRoomModalRef : CreateRoomModal}}>
            {children}
        </WebContext.Provider>
    );
};


export default WebContextProvider