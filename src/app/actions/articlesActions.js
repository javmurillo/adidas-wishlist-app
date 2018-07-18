import axios from 'axios';

// Actions related to the Home articles list

// Getting the home articles list given a [query] and a [sortParam]eter
export function getArticlesList(query, sortParam) {
    return {
        type: "GET_ARTICLES",
        meta: { sortParam },
        payload: new Promise((resolve, reject) => {
            axios.get('https://www.adidas.co.uk/api/suggestions/' + query)
                .then(response => {
                    const articles = response.data.products;
                    resolve(articles)
                })
                .catch(function (error) {
                    //Empty query case -> ""
                    resolve([]);
                })
        })
    };
}

// Sorting the home articles list given the [sortType]
export function sortArticlesList(sortType) {
    return {
        type: "SORT_ARTICLES",
        payload: sortType
    };
}