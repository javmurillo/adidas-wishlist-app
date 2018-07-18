const wishlistReducer = (state = {
    articlesList: []
}, action) => {
    switch (action.type) {
        case "GET_WISHLIST_FULFILLED":
            state = {
                ...state,
                articlesList: action.payload
            };
            break;
        case "ADD_TO_WISHLIST_FULFILLED":
            state = {
                ...state,
                articlesList: [...state.articlesList, action.payload]
            };
            break;
        case "REMOVE_FROM_WISHLIST_FULFILLED":
            state = {
                ...state,
                articlesList: state.articlesList.filter(article => article._id !== action.payload)
            };
            break;
        case "CLEAR_WISHLIST_FULFILLED":
            state = {
                ...state,
                articlesList: []
            };
            break;
    }
    return state;
};

export default wishlistReducer;