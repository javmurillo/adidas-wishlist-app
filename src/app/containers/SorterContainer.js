import React from "react";
import { connect } from "react-redux";

import { Sorter } from "../components/Sorter";

import { sortArticlesList } from "../actions/articlesActions";
import { changeSortParam } from "../actions/sortActions";


class SorterContainer extends React.Component {
    change(event) {
        //First, we change the sortParam state. Thereafter every result will be sorted by that parameter.
        this.props.changeSortParam(event.target.value);
        //Second, we sort the current home articles list by the given parameter.
        this.props.sortArticlesList(event.target.value);
    }

    render() {
        return (
            <Sorter sortParam={this.props.sortParam} change={(event) => this.change(event)}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sortParam: state.sortParam
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSortParam: (sortParam) => {
            dispatch(changeSortParam(sortParam));
        },
        sortArticlesList: (sortType) => {
            dispatch(sortArticlesList(sortType));
        }
    };
};

SorterContainer.propTypes = {
    sortParam: window.PropTypes.string,
    changeSortParam: window.PropTypes.func,
    sortArticlesList: window.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SorterContainer);