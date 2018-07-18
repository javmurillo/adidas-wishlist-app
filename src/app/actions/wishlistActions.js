import axios from "axios";

// Actions related to the Wishlist

// Getting the stored Wishlist
export function getWishlist() {
    return {
        type: "GET_WISHLIST",
        payload: new Promise((resolve, reject) => {
            axios.get('/api/wishlist')
                .then(response => {
                    // Dispatch an action with type "GET_WISHLIST"_FULFILLED" and payload: wishlistArticles
                    const wishlistArticles = response.data;
                    resolve(wishlistArticles)
                }).catch(error => {
                // Dispatch a second action in response to the error with type GET_WISHLIST_REJECTED
                reject({method: "GET /api/wishlist", title:"Internal server error.",
                    message: "The Wishlist could not be returned.", errorClass: "alert-danger", error: error});
            });
        })
    };
}

// Adding an article to the Wishlist given his entire object
export function addToWishlist(article) {
    return {
        type: "ADD_TO_WISHLIST",
        payload: new Promise((resolve, reject) => {
            axios.post('/api/wishlist', { article: article})
                .then(response => {
                    // Dispatch an action with type "ADD_TO_WISHLIST_FULFILLED" and payload: articleAdded
                    const articleAdded = response.data;
                    resolve(articleAdded)
                })
                // Dispatch a second action in response to the error with type ADD_TO_WISHLIST_REJECTED
                .catch(function (error) {
                    //Returns an empty array in case of error
                    reject({method: "POST /api/wishlist", title:"Internal server error.",
                        message: "The article could not be added to the Wishlist", errorClass: "alert-danger", error: error});
                })
        })
    };
}

// Removing an article from the Wishlist given his id
export function removeFromWishlist(id) {
    return {
        type: "REMOVE_FROM_WISHLIST",
        payload: new Promise((resolve, reject) => {
            axios.delete('/api/wishlist/' + id)
                .then(response => {
                    // Dispatch an action with type "REMOVE_FROM_WISHLIST_FULFILLED" and payload: id
                    resolve(id)
                })
                // Dispatch a second action in response to the error with type REMOVE_FROM_WISHLIST_REJECTED
                .catch(function (error) {
                    //Returns an empty array in case of error
                    reject({method: "DELETE /api/wishlist/:id", title:"Internal server error.",
                        message: "Article with ID: " + id + " could not be deleted.", errorClass: "alert-danger", error: error});
                })
        })
    };
}

// Clearing the Wishlist
export function clearWishlist() {
    return {
        type: "CLEAR_WISHLIST",
        payload: new Promise((resolve, reject) => {
            axios.delete('/api/wishlist')
                .then(response => {
                    // Dispatch an action with type "CLEAR_WISHLIST_FULFILLED" and payload: wishlistArticles
                    const wishlistArticles = response.data;
                    resolve(wishlistArticles)
                })
                .catch(function (error) {
                    // Dispatch a second action in response to the error with type CLEAR_WISHLIST_REJECTED
                    reject({method: "DELETE /api/wishlist", title:"Internal server error.",
                        message: "The Wishlist could not be deleted", errorClass: "alert-danger", error: error});
                })
        })
    };
}