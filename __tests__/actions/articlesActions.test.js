import configureStore from 'redux-mock-store';

// Actions to be tested
import * as actions from '../../src/app/actions/articlesActions';

const mockStore = configureStore();
const store = mockStore();

describe('Article actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });

    test('Dispatches GET_ARTICLES and the correct payload', () => {
        let action = actions.getArticlesList("Ultraboost", "BY_REVIEWS");
        return action.payload.then((data) => {
            action = {
                type: action.type,
                meta: action.meta,
                payload: data
            }
            store.dispatch(action);
            const result = store.getActions();
            expect(result[0].type).toEqual("GET_ARTICLES");
            expect(result[0].meta.sortParam).toEqual("BY_REVIEWS");
            expect(result[0].payload[0]).toContainKeys(['suggestion', 'image', 'url', 'rating', 'reviews', 'subTitle',
                'isPreorder', 'salePrice', 'standardPrice']);
        })
    });

    test('Dispatches SORT_ARTICLES and the correct payload', () => {
        const action = actions.sortArticlesList("BY_REVIEWS");
        store.dispatch(action);
        const result = store.getActions();
        expect(result[0].type).toEqual("SORT_ARTICLES");
        expect(result[0].payload).toEqual("BY_REVIEWS");
    });
});