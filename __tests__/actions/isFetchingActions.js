import configureStore from 'redux-mock-store';

// Actions to be tested
import * as actions from '../../src/app/actions/isFetchingActions';

const mockStore = configureStore();
const store = mockStore();

describe('isFetching actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });

    test('Dispatches REQUEST_ARTICLES', () => {
        const action = actions.requestArticles();
        store.dispatch(action);
        const result = store.getActions();
        expect(result[0].type).toEqual("REQUEST_ARTICLES");
    });
});