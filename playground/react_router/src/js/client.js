import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/" component={Featured}></Route>
            <Route exact path="/archives/" component={Archives}></Route>
            <Route exact path="/archives/:article" component={Archives}></Route>
            <Route exact path="/settings" component={Settings}></Route>
        </Layout>
    </Router>,
    app);

