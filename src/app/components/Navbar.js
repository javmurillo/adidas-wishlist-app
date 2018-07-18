import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Stateless Functional Component
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08"
                    aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                <a className="navbar-brand" href="#">
                    <img src="/assets/img/adidas_logo.png" width="63" height="43"
                         className="d-inline-block align-top" alt="logo"/>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/" exact><FontAwesomeIcon icon="home" /> Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/wishlist"><FontAwesomeIcon icon="star" /> Wishlist</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/api-docs" target="_blank"><FontAwesomeIcon icon="server"/> API</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};