import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            query: ""
        };
    }

    //We update the articles list on each key stroke
    onHandleChange(event) {
        this.setState({
            query: event.target.value
        });
        this.props.getArticlesList(event.target.value)
    }

    render() {
        return (
            <div>
                <h2>Search for articles consuming the Adidas API</h2>
                <h5>https://www.adidas.co.uk/api/suggestions/&#123;query&#125;</h5>
                <div className="row no-gutters">
                    <div className="col">
                        <input className="form-control border-secondary border-right-0 rounded-0" type="text" value={this.state.query}
                               placeholder="E.g. Ultraboost Shoes" onChange={(event) => this.onHandleChange(event)} />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right" type="button" onClick={() => this.props.getArticlesList(this.state.query)}>
                            <FontAwesomeIcon icon="search" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    getArticlesList: window.PropTypes.func,
};