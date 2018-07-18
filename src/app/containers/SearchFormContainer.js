import React from "react";
import { connect } from "react-redux";

import { Search } from "../components/Search";

import { getArticlesList } from "../actions/articlesActions";

class SearchFormContainer extends React.Component {
    render() {
        return (
            <Search getArticlesList={(query) => this.props.getArticlesList(query, this.props.sortParam)}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home,
        sortParam: state.sortParam
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getArticlesList: (query, sortParam) => {
            dispatch(getArticlesList(query, sortParam)).catch(error => {});
        }
    };
};

SearchFormContainer.propTypes = {
    home: window.PropTypes.object,
    sortParam: window.PropTypes.string,
    getArticlesList: window.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer);
