import React from "react";

// Stateless Functional Component
export const Sorter = (props) => {
    return (
        <div className="select-right">
            <select className="custom-select" id="select" value={props.sortParam} onChange={(event) => props.change(event)}>
                <option value="BY_REVIEWS">Reviews</option>
                <option value="BY_PRICE">Price</option>
            </select>
        </div>
    );
};

Sorter.propTypes = {
    sortParam: window.PropTypes.string,
    change: window.PropTypes.func
};