import React from "react";

import { Navbar } from "./components/Navbar";

//Loading FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import {ErrorMessage} from "./components/ErrorMessage";

library.add(faHome);
library.add(faStar);
library.add(faSearch);
library.add(faExternalLinkAlt);
library.add(faLink);
library.add(faGift);
library.add(faTrashAlt);
library.add(faSpinner);
library.add(faServer);

export const Layout = (props) => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: window.PropTypes.element.isRequired
}