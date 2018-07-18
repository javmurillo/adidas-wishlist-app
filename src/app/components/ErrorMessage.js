import React from "react";

// Stateless Functional Component
export const ErrorMessage = (props) => {
    return (
        <div>
            <div className={`alert alert-dismissible ${ props.error.errorClass }`} role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <strong>{props.error.method}</strong><br/>
                <strong>{props.error.title}</strong><br/> {props.error.message}
            </div>
        </div>
    );
};

ErrorMessage.propTypes = {
    errorClass: window.PropTypes.string,
    method: window.PropTypes.string,
    title: window.PropTypes.string,
    message: window.PropTypes.string
};