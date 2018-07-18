import configureStore from 'redux-mock-store';
import moxios from 'moxios';

import * as actions from '../../src/app/actions/wishlistActions';

const mockStore = configureStore();
const store = mockStore();

import articleMock from '../mocks/articleMock.json';

describe('Wishlist actions', () => {
    beforeEach(function () {
        store.clearActions();
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    test('Dispatches GET_WISHLIST and the correct payload', () => {
        //Mocking the next request: GET /api/wishlist
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: [],
            });
        });
        let action = actions.getWishlist();
        return action.payload.then((data) => {
            action = {
                type: action.type,
                payload: data
            };
            store.dispatch(action);
            const result = store.getActions();
            expect(result[0].type).toEqual("GET_WISHLIST");
            expect(result[0].payload).toBeEmpty();
        })
    });

    test('Dispatches ADD_TO_WISHLIST and the correct payload', () => {
        //Mocking the next request: GET /api/wishlist
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: articleMock,
            });
        });

        let action = actions.addToWishlist(articleMock);
        return action.payload.then((data) => {
            action = {
                type: action.type,
                payload: data
            };
            store.dispatch(action);
            const result = store.getActions();
            expect(result[0].type).toEqual("ADD_TO_WISHLIST");
            expect(result[0].payload).toContainKeys(['suggestion', 'image', 'url', 'rating', 'reviews', 'subTitle',
                'isPreorder', 'salePrice', 'standardPrice']);
        })
    });

    test('Dispatches REMOVE_FROM_WISHLIST and the correct payload', () => {
        //Mocking the next request: GET /api/wishlist
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: "mockid",
            });
        });
        let action = actions.removeFromWishlist("mockid");
        return action.payload.then((data) => {
            action = {
                type: action.type,
                payload: data
            }
            store.dispatch(action);
            const result = store.getActions();
            expect(result[0].type).toEqual("REMOVE_FROM_WISHLIST");
            expect(result[0].payload).toEqual("mockid");
        })
    });

    test('Dispatches CLEAR_WISHLIST and the correct payload', () => {
        //Mocking the next request: GET /api/wishlist
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: [],
            });
        });
        let action = actions.clearWishlist();
        return action.payload.then((data) => {
            action = {
                type: action.type,
                payload: data
            };
            store.dispatch(action);
            const result = store.getActions();
            expect(result[0].type).toEqual("CLEAR_WISHLIST");
            expect(result[0].payload).toBeEmpty();
        })
    });
});