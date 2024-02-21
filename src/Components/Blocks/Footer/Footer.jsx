import React from "react";
import classes from './Footer.module.css';
import RowBlock from "../../Standart/RowBlock/RowBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";

function Footer({ children, ...props }) {
    return (
        <>
            <div className={classes.Footer}>
                <CenterBlock>
                    <ColumnBlock width={'100%'}>
                        <CenterBlock gap={'50px'}>
                            <div className={classes.Footer_line}></div>
                            <ColumnBlock>
                                <CenterBlock gap={'20px'}>
                                    <a href="/" className={classes.Footer_link}>Политика конфиденциальности</a>
                                    <div className={classes.Footer_link}>Согласие на обработку персональных данных</div>
                                    <div className={classes.Footer_link}>Контактный номер 8000000000</div>
                                </CenterBlock>
                            </ColumnBlock>
                        </CenterBlock>
                    </ColumnBlock>
                </CenterBlock >
            </div >
        </>
    );
}

export default Footer;