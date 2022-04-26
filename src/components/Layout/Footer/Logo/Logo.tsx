import React from 'react';
import style from "./Logo.module.scss"

const logo = require("../../../../img/Logo.png")

const Logo = () => {
    return (
        <div className={style.logo}>
            <img src={logo} alt="Logo"/>
        </div>
    );
};

export default Logo;