import React from 'react';
import style from './navbar.module.css';
import {Link, Route, Switch} from "react-router-dom";
import {aboutUsPage, contactPage, homePage, productsPage, teamPage} from "../Util/Util";
import Home from "../Home/Home";
import Products from "../Products/Products";
import AboutUs from "../AboutUs/AboutUs";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";


const Navbar = () => {
    return (
        <div className={style.navbarContainer}>
            <div className={style.navbarContainerIn}>
                <Link to={homePage}>
                <div className={style.navbarLogo}><h1>hiDucation</h1></div>
                </Link>
                <div className={style.navbarList}>
                    <div className={style.navbarText}>
                        <Link to={homePage}>
                        <div className={style.navbarListTextStyle}>home</div>
                        </Link>
                    </div>
                    <div className={style.navbarText}>
                        <Link to={productsPage}>
                        <div className={style.navbarListTextStyle}>products</div>
                        </Link>
                    </div>
                    <div className={style.navbarText}>
                        <Link to={aboutUsPage}>
                        <div className={style.navbarListTextStyle}>about us</div>
                        </Link>
                    </div>
                    <div className={style.navbarText}>
                        <Link to={teamPage}>
                        <div className={style.navbarListTextStyle}>team</div>
                        </Link>
                    </div>
                    <div className={style.navbarText}>
                        <Link to={contactPage}>
                        <div className={style.navbarListTextStyle}>contact</div>
                        </Link>
                    </div>
                </div>

                <div className={style.navbarLogin}>
                    <button className={style.navButtonStyle}>Sign in</button>
                </div>
            </div>
        </div>

    );
}

export default Navbar;