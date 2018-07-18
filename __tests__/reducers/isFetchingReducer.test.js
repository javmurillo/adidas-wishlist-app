import reducer from '../../src/app/reducers/isFetchingReducer';

describe('isFetching Reducer', () => {

    test('Initial state', () => {
        const action = { type: 'dummy_action' };
        expect(reducer(undefined, action)).toBeFalse();
    });

    test('Returns correct state for REQUEST_ARTICLES', () => {
        const action = { type: "REQUEST_ARTICLES" };
        expect(reducer(undefined, action)).toBeTrue();
    });

    test('Returns correct state for GET_ARTICLES_FULFILLED', () => {
        const action = { type: "GET_ARTICLES_FULFILLED" };
        expect(reducer(undefined, action)).toBeFalse();
    });

    test('Returns correct state for GET_WISHLIST_REJECTED', () => {
        const action = { type: "GET_WISHLIST_REJECTED" };
        expect(reducer(undefined, action)).toBeFalse();
    });

    test('Returns correct state for GET_ARTICLES_REJECTED', () => {
        const action = { type: "GET_ARTICLES_REJECTED" };
        expect(reducer(undefined, action)).toBeFalse();
    });
});