const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_ROOMS":
            return {
                ...state,
                rooms: action.payload
            };
        default:
            return state;
    }
};


export default reducer