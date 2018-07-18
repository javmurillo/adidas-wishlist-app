import reducer from '../../src/app/reducers/articlesReducer';
import * as actions from '../../src/app/actions/articlesActions';
import articlesArrayMock from '../mocks/articlesArrayMock.json';
import byPriceArrayMock from '../mocks/byPriceArrayMock.json';
import byReviewsArrayMock from '../mocks/byReviewsArrayMock.json';

describe('Articles Reducer', () => {

    test('Initial state', () => {
        const action = { type: 'dummy_action' };
        const initialState = { articlesList: [] };
        expect(reducer(undefined, action)).toEqual(initialState);
    });

    test('Returns correct state for GET_ARTICLES_FULFILLED', () => {
        const action = { type: "GET_ARTICLES_FULFILLED", payload: articlesArrayMock, meta: {} };
        const expectedState = { articlesList: articlesArrayMock };
        expect(reducer(undefined, action)).toEqual(expectedState);
    });

    test('Returns correct state for GET_ARTICLES_FULFILLED sorted by price', () => {
        const action = { type: "GET_ARTICLES_FULFILLED", payload: articlesArrayMock, meta: { sortParam: "BY_PRICE"} };
        const expectedState = { articlesList: byPriceArrayMock };
        expect(reducer(undefined, action)).toEqual(expectedState);});

    test('Returns correct state for GET_ARTICLES_FULFILLED sorted by reviews', () => {
        const action = { type: "GET_ARTICLES_FULFILLED", payload: articlesArrayMock, meta: { sortParam: "BY_REVIEWS"} };
        const expectedState = { articlesList: byReviewsArrayMock };
        expect(reducer(undefined, action)).toEqual(expectedState);});

    test('Returns correct state for SORT_ARTICLES with BY_PRICE payload', () => {
        const action = { type: "SORT_ARTICLES", payload:  "BY_PRICE"};
        const expectedState = { articlesList: byPriceArrayMock };
        expect(reducer({ articlesList: articlesArrayMock }, action)).toEqual(expectedState);});

    test('Returns correct state for SORT_ARTICLES with BY_REVIEWS payload', () => {
         const action = { type: "SORT_ARTICLES", payload:  "BY_REVIEWS"};
         const expectedState = { articlesList: byReviewsArrayMock };
         expect(reducer({ articlesList: byPriceArrayMock }, action)).toEqual(expectedState);
     });
});