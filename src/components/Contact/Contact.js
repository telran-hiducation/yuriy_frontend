import React from 'react';
import style from '../Contact/contact.module.css'
import {contactText} from "../Util/Util";
const Contact = () => {
    return (
        <div id='contact' className={style.contactContainer}>
            <p className={style.contactText1}>Get in Touch</p>
            <p className={style.contactText2}>{contactText}</p>
        </div>
    );
};

export default Contact;