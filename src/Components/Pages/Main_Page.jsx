import React from "react";
import CenterBlock from '../Standart/CenterBlock/CenterBlock'
import ColumnBlock from '../Standart/ColumnBlock/ColumnBlock'
import { Link } from "react-router-dom";

import backgroundMainImg from "../../assets/backgroundMainImg.png"
import logo from "../../assets/герб.png"
import teaName from "../../assets/ДЕНЬ ГОРНОГО ЧАЯ.png"
import place from "../../assets/place.png"
import Button from "../Standart/Button/Button";

function Main_Page({ children, ...props }) {
    return (
        <>
            <CenterBlock
                width={'100%'}
                height={'100vh'}
                background={backgroundMainImg}
            >
                <ColumnBlock
                    width={'900px'}
                    gap={'50px'}
                    justifyContent={'center'}
                >
                    <CenterBlock>
                        <img src={logo} alt="" style={{ width: '186px' }} />
                    </CenterBlock>
                    <CenterBlock>
                        <img src={teaName} alt="" style={{ width: '669px' }} />
                    </CenterBlock>
                    <CenterBlock>
                        <Button width={'319px'} height={'60px'}>
                            <img src={place} alt="" />
                            Домбай
                        </Button>
                    </CenterBlock>

                </ColumnBlock >
            </CenterBlock >
        </>
    );
}

export default Main_Page;