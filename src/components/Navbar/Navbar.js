import React from 'react';
import style from './navbar.module.css';


const Navbar = () => {
    return (
        <div className={style.navbarContainer}>
            <div className={style.navbarContainerIn}>
                <div className={style.navbarLogo}><h1>hiDucation</h1></div>
                <div className={style.navbarList}>
                    <div className={style.navbarText}>
                        <div className={style.navbarListTextStyle}>home</div>
                    </div>
                    <div className={style.navbarText}>
                        <div className={style.navbarListTextStyle}>products</div>
                    </div>
                    <div className={style.navbarText}>
                        <div className={style.navbarListTextStyle}>about us</div>
                    </div>
                    <div className={style.navbarText}>
                        <div className={style.navbarListTextStyle}>team</div>
                    </div>
                    <div className={style.navbarText}>
                        <div className={style.navbarListTextStyle}>contact</div>
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