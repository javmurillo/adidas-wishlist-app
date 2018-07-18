import reducer from '../../src/app/reducers/errorMessageReducer';
import * as actions from '../../src/app/actions/articlesActions';

describe('Articles Reducer', () => {

    test('Initial state', () => {
        const action = { type: 'dummy_action' };
        const initialState = null;
        expect(reducer(undefined, action)).toEqual(initialState);
    });

    test('Returns correct state for GET_ARTICLES_REJECTED', () => {
        const action = { type: "GET_ARTICLES_REJECTED", payload: []};
        const expectedState = [];
        expect(reducer(undefined, action)).toEqual(expectedState);
    });

    test('Returns correct state for GET_WISHLIST_REJECTED', () => {
        const action = { type: "GET_WISHLIST_REJECTED", payload: {method: "GET /api/wishlist", title:"Internal server error.",
                message: "The Wishlist could not be returned.", errorClass: "alert-danger", error: 'error'} };
        expect(reducer(undefined, action)).toEqual(action.payload);
    });

    test('Returns correct state for REMOVE_FROM_WISHLIST_REJECTED', () => {
        const action = { type: "REMOVE_FROM_WISHLIST_REJECTED", payload: {method: "DELETE /api/wishlist/:id", title:"Internal server error.",
                message: "Article with ID: 1 could not be deleted.", errorClass: "alert-danger", error: "error"} };
        expect(reducer(undefined, action)).toEqual(action.payload);
    });

    test('Returns correct state for CLEAR_WISHLIST_REJECTED', () => {
        const action = { type: "CLEAR_WISHLIST_REJECTED", payload: {method: "DELETE /api/wishlist", title:"Internal server error.",
                message: "The Wishlist could not be deleted", errorClass: "alert-danger", error: "error"} };
        expect(reducer(undefined, action)).toEqual(action.payload);
    });

    test('Returns correct state for ADD_TO_WISHLIST_REJECTED', () => {
        const action = { type: "ADD_TO_WISHLIST_REJECTED", payload: {method: "POST /api/wishlist", title:"Internal server error.",
                message: "The article could not be added to the Wishlist", errorClass: "alert-danger", error: "error"} };
        expect(reducer(undefined, action)).toEqual(action.payload);
    });

});