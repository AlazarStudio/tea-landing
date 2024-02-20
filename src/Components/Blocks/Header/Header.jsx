import React from "react";
import classes from './Header.module.css';

import CenterBlock from '../../Standart/CenterBlock/CenterBlock'

function Header({ children, ...props }) {
    return ( 
        <>
            <CenterBlock>
                <ul>
                    <li><a href="">Программа</a></li>
                    <li><a href="">Интерактивный чат</a></li>
                    <li><a href="">Регистрация</a></li>
                </ul>
            </CenterBlock>
        </>
     );
}

export default Header;