import React from "react";

import { Article } from "../components/Article";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Stateless Functional Component
export const Home = (props) => {
    return (
            <div className="row">
                {props.articles.map((article) => {
                    // Since we do not have an ID available from the API and an "inWishlist" field, we generate one
                    // from the article's URL in order to check what article is in the wishlist, and to assign unique
                    // keys to each {Article} child. By this way we achieve two things:
                    //  1. The key is not identical between sibling components.
                    //  2. The key do not change between renders.
                    const _id = new Buffer(article.url).toString('base64');
                    article['_id'] = _id;
                    const reviews = (!article.reviews ? '0' : article.reviews) + " reviews";
                    const parsedImg = article.image.substring(0, article.image.length - 19);
                    const price = (!article.salePrice)
                        ? <span className="price-new"> {article.standardPrice}</span>
                        : (
                            <span><span className="price-new">{article.salePrice}</span>
                                <del className="price-old">{article.standardPrice}</del></span>
                        );
                    // We push FontAwesome HTML stars code to the array depending on the article's rating in order to
                    // render them.
                    let stars = [];
                    for (let i = 0; i < article.rating; i++) {
                        stars.push(<FontAwesomeIcon color="gold" icon="star"/>);
                    }
                    for (let i = article.rating; i < 5; i++) {
                        stars.push(<FontAwesomeIcon color="gray" icon="star"/>);
                    }
                    // All the parsed properties necessaries to render the article correctly are passed through an
                    // object.
                    const parsedProps = {
                        reviews: reviews,
                        image: parsedImg,
                        price: price,
                        stars: stars,
                    }
                    // If the article's ID equals to one in the Wishlist, we return an Article child with the
                    // corresponding properties of an 'inWishList' article, including the button text and style.
                    const isInWishlist = props.wishlist.some(wishlistArticle => wishlistArticle['_id'] === _id);
                    let articleButton;
                    if (isInWishlist) {
                        articleButton = {
                            className: "btn btn-sm btn-danger float-right darkred-button",
                            text: "Remove from Wishlist"
                        }
                        return (
                            <Article articleOnClick={props.removeFromWishlist} parameter={_id} key={_id}
                                     article={article} parsed={parsedProps} articleButton={articleButton}/>
                        );
                    }
                    // Else, we return a 'not in the Wishlist' Article child
                    else {
                        articleButton = {
                            className: "btn btn-sm btn-primary float-right black-button",
                            text: "Add to Wishlist"
                        }
                        return (
                            <Article articleOnClick={props.addToWishlist} parameter={article} key={_id}
                                     article={article} parsed={parsedProps} articleButton={articleButton}/>
                        );
                    }
                })}
            </div>
    );
};

Home.propTypes = {
    articles: window.PropTypes.array,
    wishlist: window.PropTypes.array,
    addToWishlist: window.PropTypes.func,
    removeFromWishlist: window.PropTypes.func
};