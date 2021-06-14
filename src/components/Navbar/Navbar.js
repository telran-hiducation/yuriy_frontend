import React from 'react';
import style from './navbar.module.css';
import {Anchor} from "antd";

const {Link} = Anchor;

const Navbar = () => {
    return (
        <Anchor targetOffset='80'>
            <div className={style.navbarContainer}>
                <div className={style.navbarContainerIn}>
                    <h1>
                        <Link href='#home' title='hiDucation'/>
                    </h1>
                    <div className={style.navbarList}>
                        <Link href='#home' title='home'/>
                        <Link href='#products' title='products'/>
                        <Link href='#aboutUs' title='about us'/>
                        <Link href='#team' title='team'/>
                        <Link href='#contact' title='contact'/>
                    </div>
                    <div className={style.navbarLogin}>
                        <button className={style.navButtonStyle}>Sign in</button>
                    </div>
                </div>
            </div>
        </Anchor>
    );
}

export default Navbar;
// <Anchor>
//     <div className={style.navbarContainer}>
//         <div className={style.navbarContainerIn}>
//             <Link href='#home'>
//                 <div className={style.navbarLogo}><h1>hiDucation</h1></div>
//             </Link>
//             <div className={style.navbarList}>
//                 <div className={style.navbarText}>
//                     <Link href='#home' title='Home' to={homePage}>
//                         <div className={style.navbarListTextStyle}>home</div>
//                     </Link>
//                 </div>
//                 <div className={style.navbarText}>
//                     <Link href='#products' title='Products' to={productsPage}>
//                         <div className={style.navbarListTextStyle}>products</div>
//                     </Link>
//                 </div>
//                 <div className={style.navbarText}>
//                     <Link href='#aboutUs' title='AboutUs' to={aboutUsPage}>
//                         <div className={style.navbarListTextStyle}>about us</div>
//                     </Link>
//                 </div>
//                 <div className={style.navbarText}>
//                     <Link href='#team' title='Team' to={teamPage}>
//                         <div className={style.navbarListTextStyle}>team</div>
//                     </Link>
//                 </div>
//                 <div className={style.navbarText}>
//                     <Link href='#contact' title='Contact' to={contactPage}>
//                         <div className={style.navbarListTextStyle}>contact</div>
//                     </Link>
//                 </div>
//             </div>
//             <div className={style.navbarLogin}>
//                 <button className={style.navButtonStyle}>Sign in</button>
//             </div>
//         </div>
//     </div>
// </Anchor>