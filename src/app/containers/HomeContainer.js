import React from "react";
import {connect} from "react-redux";

import SorterContainer from "./SorterContainer";
import SearchFormContainer from "./SearchFormContainer"

import { Home } from "../components/Home";
import { ErrorMessage} from "../components/ErrorMessage";

import {addToWishlist, getWishlist, removeFromWishlist} from "../actions/wishlistActions";

class HomeContainer extends React.Component {
    //We get the Wishlist to update the state in case of page refresh
    componentDidMount() {
        this.props.getWishlist();
    }

    render() {
        //Error handling
        if (this.props.errorMessage) {
            return (
                <div className="container">
                    <SearchFormContainer/>
                    <hr className="home-hr-margin"/>
                    <ErrorMessage error={this.props.errorMessage}/>
                </div>
            )
        }
        return (
            <div className="container">
                <SearchFormContainer/>
                <hr className="home-hr-margin"/>
                {/* if (query.articlesList == 0) */
                (this.props.home.articlesList.length === 0) ?
                    ( <h6>No results to show</h6>) :

                /* else */
                (<div>
                    <SorterContainer/>
                    <Home articles={this.props.home.articlesList} wishlist={this.props.wishlist.articlesList}
                        addToWishlist={(article) => this.props.addToWishlist(article)}
                        removeFromWishlist={(id) => this.props.removeFromWishlist(id)}/>
                </div>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home,
        wishlist: state.wishlist,
        errorMessage: state.errorMessage,
        sortParam: state.sortParam
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToWishlist: (article) => {
            dispatch(addToWishlist(article)).catch(error => {});
        },
        removeFromWishlist: (id) => {
            dispatch(removeFromWishlist(id)).catch(error => {});
        },
        getWishlist: () => {
            dispatch(getWishlist()).catch(error => {});
        },
    };
};

HomeContainer.propTypes = {
    home: window.PropTypes.object,
    wishlist: window.PropTypes.object,
    errorMessage: window.PropTypes.object,
    sortParam: window.PropTypes.string,
    addToWishlist: window.PropTypes.func,
    removeFromWishlist: window.PropTypes.func,
    getWishlist: window.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);