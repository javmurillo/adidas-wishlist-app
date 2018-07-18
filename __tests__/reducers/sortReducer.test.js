import reducer from '../../src/app/reducers/sortReducer';

describe('Sort Reducer', () => {

    test('Initial state', () => {
        const action = { type: 'dummy_action' };
        expect(reducer(undefined, action)).toEqual("BY_REVIEWS");
    });

    test('Returns correct state for BY_REVIEWS', () => {
        const action = { type: "BY_REVIEWS" };
        expect(reducer(undefined, action)).toEqual("BY_REVIEWS");
    });

    test('Returns correct state for BY_PRICE', () => {
        const action = { type: "BY_PRICE" };
        expect(reducer(undefined, action)).toEqual("BY_PRICE");
    });
});