import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {aboutUsPage, contactPage, homePage, productsPage, teamPage} from "../Util/Util";
import Home from "../Home/Home";
import Products from "../Products/Products";
import AboutUs from "../AboutUs/AboutUs";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path={['/', `${homePage}`]} exact component={Home}/>
                <Route path={['/', `${productsPage}`]} exact component={Products}/>
                <Route path={['/', `${aboutUsPage}`]} exact component={AboutUs}/>
                <Route path={['/', `${teamPage}`]} exact component={Team}/>
                <Route path={['/', `${contactPage}`]} exact component={Contact}/>
            </Switch>

        </div>
    );
};

export default Main;