const isFetchingReducer = (state = false, action) => {
    switch (action.type) {
        case "REQUEST_ARTICLES":
            return true;
        case "GET_WISHLIST_FULFILLED":
            return false;
        case "GET_ARTICLES_FULFILLED":
            return false;
        //Avoiding the loading icon to get stuck handling *_REJECTED actions
        case "GET_WISHLIST_REJECTED":
            return false;
        case "GET_ARTICLES_REJECTED":
            return false;
    }
    return state;
};

export default isFetchingReducer;