import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

import { Layout } from "./layout";
import Home from "./containers/HomeContainer";
import Wishlist from "./containers/WishlistContainer";

export const Router = () => (
    <div>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/wishlist" component={Wishlist} />
                <Redirect to="/"/>
            </Switch>
        </Layout>
    </div>
)