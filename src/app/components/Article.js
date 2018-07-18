import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Stateless Functional Component
export const Article = (props) => {
    return (
        <div className="col-md-4">
            <figure className="card card-product">
                <div className="img-wrap"><img src={props.parsed.image}/></div>
                <figcaption className="info-wrap">
                    <a href={props.article.url} target="_blank"><h4 className="title">{props.article.suggestion}
                        <FontAwesomeIcon style={{float:'right'}} icon="external-link-alt" size='1x'/></h4></a>
                    <p className="desc">{props.article.subTitle}</p>
                    <div className="rating-wrap">
                        <div className="label-reviews">{props.parsed.reviews}</div>
                        <div className="label-rating">
                            {props.parsed.stars}
                        </div>
                    </div>
                </figcaption>
                <div className="bottom-wrap">
                    <button onClick={() => props.articleOnClick(props.parameter)} className={props.articleButton.className}>{props.articleButton.text}</button>
                    <div className="price-wrap h5">
                        {props.parsed.price}
                    </div>
                </div>
            </figure>
        </div>
    );
}

Article.propTypes = {
    parsed: window.PropTypes.object,
    article: window.PropTypes.object,
    suggestion: window.PropTypes.string,
    subTitle: window.PropTypes.string,
    reviews: window.PropTypes.string,
    stars: window.PropTypes.array,
    articleButton: window.PropTypes.object,
    className: window.PropTypes.string,
    text: window.PropTypes.string,
    price: window.PropTypes.string,
    parameter: window.PropTypes.string,
    articleOnClick: window.PropTypes.func
};