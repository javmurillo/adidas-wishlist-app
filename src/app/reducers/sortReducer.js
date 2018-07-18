const sortReducer = (state = "BY_REVIEWS", action) => {
    switch (action.type) {
        case "BY_REVIEWS":
            return "BY_REVIEWS";
        case "BY_PRICE":
            return "BY_PRICE";
    }
    return state;
};

export default sortReducer;