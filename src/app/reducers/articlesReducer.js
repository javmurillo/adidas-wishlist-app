const articlesReducer = (state = {
    articlesList: []
}, action) => {
    switch (action.type) {
        case "GET_ARTICLES_FULFILLED": {
            if (!action.meta.sortParam) {
                state = {
                    ...state,
                    articlesList: action.payload
                };
                return state;
            }
            switch (action.meta.sortParam) {
                case 'BY_PRICE':
                    state = {
                        ...state,
                        articlesList: action.payload.slice().sort(function (a, b) {
                            let aPrice = (a.salePrice) ? a.salePrice : a.standardPrice;
                            let bPrice = (b.salePrice) ? b.salePrice : b.standardPrice;
                            aPrice = Number(aPrice.replace(/[^0-9\.-]+/g, ""));
                            bPrice = Number(bPrice.replace(/[^0-9\.-]+/g, ""));
                            return bPrice - aPrice;
                        })
                    };
                    break;
                case 'BY_REVIEWS':
                    state = {
                        ...state,
                        articlesList: action.payload.slice().sort(function (a, b) {
                            return b.reviews - a.reviews;
                        })
                    };
                    break;
            }
            return state;
        }
        case 'SORT_ARTICLES': {
            switch (action.payload) {
                case 'BY_PRICE':
                    state = {
                        ...state,
                        articlesList: state.articlesList.slice().sort(function(a, b) {
                            let aPrice = (a.salePrice) ? a.salePrice : a.standardPrice;
                            let bPrice = (b.salePrice) ? b.salePrice : b.standardPrice;
                            aPrice = Number(aPrice.replace(/[^0-9\.-]+/g,""));
                            bPrice = Number(bPrice.replace(/[^0-9\.-]+/g,""));
                            return bPrice - aPrice;
                        })
                    };
                    break;
                case 'BY_REVIEWS':
                    state = {
                        ...state,
                        articlesList: state.articlesList.slice().sort(function(a, b) {
                            return b.reviews - a.reviews;
                        })
                    };
                    break;
            }
        }
    }

    return state;
};

export default articlesReducer;