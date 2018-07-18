import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Article } from "../components/Article";
import {Home} from "./Home";

// Stateless Functional Component
export const Wishlist = (props) => {
    return (
        <div>
            <div className="text-center"><button onClick={props.clearWishlist} type="button" className="btn btn-secondary">
                <FontAwesomeIcon icon="trash-alt" size='1x'/> Clear Wishist</button></div>
            <br/>
            <div className="row">
                {props.wishlist.map((article) => {
                    const reviews = (!article.reviews ? '0' : article.reviews) + " reviews";
                    const parsedImg = article.image.substring(0, article.image.length - 19);
                    const price = (!article.salePrice)
                        ? <span className="price-new"> {article.standardPrice}</span>
                        : (
                            <span><span className="price-new">{article.salePrice}</span> <del className="price-old">{article.standardPrice}</del></span>
                        );
                    var stars = [];
                    for (var i = 0; i < article.rating; i++) {
                        stars.push(<FontAwesomeIcon color="gold" icon="star"/>);
                    }
                    for (var i = article.rating; i < 5; i++) {
                        stars.push(<FontAwesomeIcon color="gray" icon="star"/>);
                    }
                    const parsedProps = {
                        reviews: reviews,
                        image: parsedImg,
                        price: price,
                        stars: stars,
                    }
                    const articleButton = {
                        className: "btn btn-sm btn-danger float-right darkred-button",
                        text: "Remove from Wishlist"
                    };
                    return (
                        <Article articleOnClick={props.removeFromWishlist} parameter={article._id} key={article._id} article={article} parsed={parsedProps} articleButton={articleButton}/>
                    );
                })}
            </div>
        </div>
    );
};

Wishlist.propTypes = {
    wishlist: window.PropTypes.array,
    clearWishlist: window.PropTypes.func,
    removeFromWishlist: window.PropTypes.func
};