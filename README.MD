# Adidas Wishlist App [![Build Status](https://travis-ci.org/javmurillo/adidas-wishlist-app.svg?branch=master)](https://travis-ci.org/javmurillo/adidas-wishlist-app)

Adidas Wishlist App is a *Single-Page Application* built with ReactJS + Redux for the front-end, and NodeJS + ExpressJS for the back-end. Users can add suggested articles by the Adidas API to their wishlist. At the moment, the current server implementation does not distinct user sessions, and implements an in-memory storage for the sake of convenience.

![home](https://github.com/javmurillo/adidas-wishlist-app/blob/master/screenshot.png?raw=true)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Please, make sure the following components are installed on your computer before installing:

 - **[NodeJS](https://nodejs.org/en/download/)**. Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside the browser.
 - **[npm](https://www.npmjs.com/)**. Package manager for JavaScript.
 - **[newman](https://github.com/postmanlabs/newman)**. Command line Collection Runner for Postman.


### Installing

Step by step instructions in order to run the application locally:

1.  Clone or download the repository into your computer.
```
git clone https://github.com/javmurillo/adidas-wishlist-app.git
```
2.  Navigate to the created directory.
```
cd adidas-wishlist-app
```
3.  Install all dependencies.
```
npm install
```
4.  Build the application and start the server.
```
npm run node
```
5.  The application is now running at [http://localhost:3002](http://localhost:3002/).

## Running the tests

Please, follow the steps listed below in order to run both unit and API tests:

### Unit tests

The following command performs the tests regarding to the correct behaviour of Redux actions and reducers, divided in 9 test suites and 33 tests. To achieve a complete testing solution, React components tests need to be implemented too.
```
npm test
```

### API tests

The API is tested by running a Postman Collection which performs and checks the correct responses following the next use case:
 1. The Adidas API is working.
 2. Adds a new article to the wishlist successfully.
 3. Adds a second article to the wishlist successfully.
 4. Cannot add an article with duplicate id.
 5. Removes the first article.
 6. The Wishlist has two articles stored.
 7. Clears the Wishlist successfully.

These tests consumes the API especified in the postman environment file `postman_environment.json`. The live server by default.
```
newman run API.postman_collection.json -e postman_environment.json
```

## Deployment

The apllication is live at http://wishlist.javmurillo.me/ running on a [Raspberry Pi Model B](https://www.raspberrypi.org/).

### Continous Integration

In order to ensure new pushes do not break anything, this repository implements a pipeline which considers a build as *passing* if it completes the previous mentioned tests successfully.

```
language: node_js  
node_js:  
  - "8.2.1"  
  
install:  
  - npm install newman  
    - npm install jest  
  
before_script:  
  - node --version  
    - npm --version  
    - node_modules/.bin/newman --version  
    - node_modules/.bin/jest --version  
  
script:  
  - node_modules/.bin/newman run API.postman_collection.json -e postman_environment.json  
    - node_modules/.bin/jest --runInBand
```
### API Documentation

The API docs are available at http://wishlist.javmurillo.me/api-docs

![enter image description here](https://github.com/javmurillo/adidas-wishlist-app/blob/master/screenshot2.png?raw=true)

## Docker
The application was dockerize with the following configuration file and commands:
```
FROM node:8
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
CMD npm run node
EXPOSE 3002
```
```
$ docker build -t [USERNAME]/adidas-wishlist-app .
```
```
$ docker login -u <username> -p <password>
```
```
$ docker push [USERNAME]/hello-world
```
In this way, the image can be download with:
```
$ docker run javmurillo/adidas-wishlist-app # listening at :3002
```

## Built With

*  [NodeJS](https://nodejs.org/en/) - Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside the browser.
* [Nginx](https://www.nginx.com/) - Web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.
* [PM2](http://pm2.keymetrics.io/) - Process manager for the JavaScript runtime Node.js
* [ExpressJS](https://expressjs.com/) - Web application framework for Node.js, released as free and open-source software
* [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces.
* [Redux](https://redux.js.org/) - Open-source JavaScript library for managing application state
* [Webpack](https://webpack.js.org/) - Open-source JavaScript module bundler.
* [Babel](https://babeljs.io/) - JavaScript compiler.
* [Jest](https://jestjs.io/docs/en/api) - JavaScript Testing library.
* [Swagger](https://swagger.io/) - Open source software framework backed by a large ecosystem of tools that helps developers design, build, document, and consume RESTful Web services.
* [TravisCI](https://travis-ci.org/) - Hosted, distributed continuous integration service used to build and test software projects hosted at GitHub
* [Bootstrap](https://getbootstrap.com/) - Free and open-source front-end framework for designing websites and web applications.


## Rationale
### About Technologies
Since all my previous projects were build with MEAN Stack, NodeJS and ExpressJS were chosen for the back-end. In the front-end, ReactJS with Redux in order to improve my skills with other frameworks.

### About Ids
Since we do not have an Id available from the API and an "inWishlist" field to manipulate, we must generate one in order to check which articles are already in the wishlist. In this way we render an Article component whose properties will depend on this comparison.

 - In the wishlist Article: `<Article articleOnClick={props.removeFromWishlist} ... />`
 - Not in the wishlist Article: `<Article articleOnClick={props.addToWishlist} ... />`

The URL string field is encoded with `base64` , generating our custom Id in a fast a simple way.

By assigning unique keys to each Article we achieve two things:
 1. The key is not identical between sibling components.
 2. The key do not change between renders.

### About Sorting

The application implements a sorter which can sort the home articles list by reviews number and price. When the user interacts with it, the sorter dispatches two actions: **to change the sort parameter**, and **to sort the current article list**. By dispatching these actions, not only the current list will be sorted by that parameter, but all following queries.

### About Wishlist loading indicator

Before dispatching the action that updates the wishlist state, we dispatch `REQUEST_ARTICLES` to indicate we are going to do an API request, so the reducer which manages the loading state must return `true`. When the action that updates the wishlist has been resolved (successfully or not, to avoid stucks), the same action which comes to the wishlist reducer is received by the `fetchingReducer`, returning `false` (request ended).

### Error handling

Thanks to `redux-promise-middleware`, all failed API requests are dispatched with the ending string `_REJECTED`. By this way, we can easily capture all these kind of actions in a single reducer `errorMessageReducer`, which will render an error notification with the given message.

## Authors

* **Javier Murillo** - *jmurillo93@gmail.com* - [GitHub](https://github.com/javmurillo)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.