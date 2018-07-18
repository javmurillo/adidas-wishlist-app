import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

//Logger for Development
import { createLogger } from 'redux-logger'

import home from "./reducers/articlesReducer";
import wishlist from "./reducers/wishlistReducer";
import isFetching from "./reducers/isFetchingReducer";
import errorMessage from "./reducers/errorMessageReducer";
import sortParam from "./reducers/sortReducer";

export default createStore(
    combineReducers({
        home,
        wishlist,
        isFetching,
        errorMessage,
        sortParam
    }),
    {},
    applyMiddleware(thunk, promise())
);