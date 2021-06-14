import React from 'react';
import style from './home.module.css'

const Home = () => {
    return (
        <div id='home' className={style.homeContainer}>
            <h1 className={style.homeText1}>hiDucation</h1>
            <p className={style.homeText2}>Revolutionize eLearning</p>
            <div className={style.homeContainerVideo}>
                {/*<video className={style.homeVideo}>*/}
                {/*    //TODO*/}
                {/*</video>*/}
            </div>
            <p className={style.homeText3}>(Promotional video here)</p>
        </div>
    );
};

export default Home;