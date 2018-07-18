import reducer from '../../src/app/reducers/wishlistReducer';
import articlesArrayMock from '../mocks/articlesArrayMock.json';
import articleMock from '../mocks/articleMock.json';
import removedByIdArrayMock from '../mocks/removedByIdArrayMock.json';
import addedArrayMock from '../mocks/addedArrayMock.json';

describe('Wishlist Reducer', () => {

    test('Initial state', () => {
        const action = { type: 'dummy_action' };
        const initialState = { articlesList: [] };
        expect(reducer(undefined, action)).toEqual(initialState);
    });

    test('Returns correct state for GET_WISHLIST_FULFILLED', () => {
        const action = { type: "GET_WISHLIST_FULFILLED", payload: articlesArrayMock };
        const expectedState = { articlesList: articlesArrayMock };
        expect(reducer({ articlesList: articlesArrayMock}, action)).toEqual(expectedState);
    });

    test('Returns correct state for ADD_TO_WISHLIST_FULFILLED', () => {
        const action = { type: "ADD_TO_WISHLIST_FULFILLED", payload: articleMock };
        const expectedState = { articlesList: addedArrayMock };
        expect(reducer({ articlesList: articlesArrayMock}, action)).toEqual(expectedState);
    });

    test('Returns correct state for REMOVE_FROM_WISHLIST_FULFILLED', () => {
        const action = { type: "REMOVE_FROM_WISHLIST_FULFILLED", payload: "bHR0cHM6Ly93d3cuYWRpZGFzLmNvLnVrL3VsdHJhYm9vc3Qtc2hvZXMvQkI2MTY2Lmh0bWw=" };
        const expectedState = { articlesList: removedByIdArrayMock};
        expect(reducer({ articlesList: articlesArrayMock}, action)).toEqual(expectedState);
    });
});