import configureStore from 'redux-mock-store';

// Actions to be tested
import * as actions from '../../src/app/actions/sortActions';

const mockStore = configureStore();
const store = mockStore();

describe('Sort actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });

    test('Dispatches BY_REVIEWS', () => {
        const action = actions.changeSortParam("BY_REVIEWS");
        store.dispatch(action);
        const result = store.getActions();
        expect(result[0].type).toEqual("BY_REVIEWS");
    });

    test('Dispatches BY_PRICE', () => {
        const action = actions.changeSortParam("BY_PRICE");
        store.dispatch(action);
        const result = store.getActions();
        expect(result[0].type).toEqual("BY_PRICE");
    });
});