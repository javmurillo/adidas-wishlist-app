import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Wishlist } from "../components/Wishlist";
import { ErrorMessage} from "../components/ErrorMessage";

import { getWishlist, addToWishlist, removeFromWishlist, clearWishlist  } from "../actions/wishlistActions";
import { requestArticles } from "../actions/isFetchingActions";

class WishlistContainer extends React.Component {
    //We update the Wishlist state when the component initializes
    componentDidMount() {
        this.props.getWishlist();
    }

    render() {
        //Error handling
        if (this.props.errorMessage) {
            return (
                <div className="container">
                    <h2><FontAwesomeIcon icon="gift"/><br/>Your Wishlist</h2>
                    <h5>Save products while shopping to your own personal Wish List to view and purchase later</h5>
                    <hr className="wishlist-hr-margin"/>
                    <ErrorMessage error={this.props.errorMessage}/>
                </div>
            )
        }
        return (
            <div className="container">
                <h2><FontAwesomeIcon icon="gift"/><br/>Your Wishlist</h2>
                <h5>Save products while shopping to your own personal Wish List to view and purchase later</h5>
                <hr className="wishlist-hr-margin"/>

                { /* if (isFetching and wishlist.articlesList != 0) */
                (this.props.isFetching && this.props.wishlist.articlesList.length !== 0) ?
                    ( <div className="text-center"><FontAwesomeIcon spin icon="spinner" size="6x"/></div>) : (

                /* else if (wishlist.articlesList) === 0) */
                (this.props.wishlist.articlesList.length === 0) ?
                    ( <h6>Your Wishlist is empty!</h6>) :

                //else
                    ( <Wishlist clearWishlist={this.props.clearWishlist} removeFromWishlist={(id) => this.props.removeFromWishlist(id)}
                        wishlist={this.props.wishlist.articlesList}/>)
                )}
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        wishlist: state.wishlist,
        isFetching: state.isFetching,
        errorMessage: state.errorMessage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWishlist: () => {
            dispatch(requestArticles());
            dispatch(getWishlist()).catch(error => {});
        },
        addToWishlist: (article) => {
            dispatch(addToWishlist(article)).catch(error => {});
        },
        removeFromWishlist: (id) => {
            dispatch(removeFromWishlist(id)).catch(error => {});
        },
        clearWishlist: () => {
            dispatch(clearWishlist()).catch(error => {});
        }
    };
};

WishlistContainer.propTypes = {
    wishlist: window.PropTypes.object,
    isFetching: window.PropTypes.bool,
    errorMessage: window.PropTypes.string,
    getWishlist: window.PropTypes.func,
    addToWishlist: window.PropTypes.func,
    removeFromWishlist: window.PropTypes.func,
    clearWishlist: window.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistContainer);
