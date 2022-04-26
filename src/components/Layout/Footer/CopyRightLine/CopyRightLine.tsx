import React from 'react';
import style from "./CopyRightLine.module.scss"
import Logo from "../../../Logo/Logo";
import VKIcon from "../../../Icons/VKIcon/VKIcon";

const CopyRightLine = () => {
    return (
        <div className={style.container}>
            <div className={style.copyright}>
                <Logo/>
                <div className={style.item}>
                    <div className={style.text}>
                        <p>Копирование материалов разрешено только по согласию администрации</p>
                        <p>Содержимое сайта не является публичной офертой</p>
                    </div>
                    <a className={style.ref1} href="/">Политика конфиденциальности</a>
                    <a className={style.ref2} href="/">Публичная оферта</a>
                </div>
                <div className={style.icon}>
                    <VKIcon/>
                </div>
            </div>
        </div>
    );
};

export default CopyRightLine;