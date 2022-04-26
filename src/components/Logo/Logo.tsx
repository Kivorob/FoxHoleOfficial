import React from 'react';
import style from "./Logo.module.scss"

const logo = require("../../img/Logo.png")

const Logo = () => {
    return (
        <a className={style.logo} href="#">
            <img src={logo} alt="Logo"/>
        </a>
    );
};

export default Logo;