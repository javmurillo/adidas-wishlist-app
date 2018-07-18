const errorMessageReducer = (state = null, action) => {
    switch (action.type) {
        case "GET_ARTICLES_REJECTED":
            return action.payload;
        case "GET_WISHLIST_REJECTED":
            return action.payload;
        case "REMOVE_FROM_WISHLIST_REJECTED":
            return action.payload;
        case "CLEAR_WISHLIST_REJECTED":
            return action.payload;
        case "ADD_TO_WISHLIST_REJECTED":
            return action.payload;
    }
    return null;
};

export default errorMessageReducer;