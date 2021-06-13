import React from 'react';
import style from '../AboutUs/aboutUs.module.css'
import {aboutUsText} from "../Util/Util";

const AboutUs = () => {
    return (
        <div className={style.aboutUsContainer}>
          <h1 className={style.aboutUsText1}>About hiDucation Mission</h1>
            <p className={style.aboutUsText2}>Your best teacher is YOU!</p>
            <div className={style.aboutUsContainerIn}>
                <div className={style.aboutUsContainerIn1}>
                    {aboutUsText}
                </div>
                <div className={style.aboutUsContainerIn2}>
                    <div className={style.block}></div>
                </div>
            </div>
            <h1 className={style.aboutUsText1}>Success stories</h1>
            <div className={style.aboutUsContainerStories}>

                

            </div>
        </div>
    );
};

export default AboutUs;