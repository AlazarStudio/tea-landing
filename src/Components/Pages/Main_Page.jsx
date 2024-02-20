import React from "react";
import CenterBlock from '../Standart/CenterBlock/CenterBlock'
import ColumnBlock from '../Standart/ColumnBlock/ColumnBlock'
import RowBlock from '../Standart/RowBlock/RowBlock'
import Button from "../Standart/Button/Button";
import H2 from "../Standart/H2/H2";

import backgroundMainImg from "../../assets/backgroundMainImg.png"
import logo from "../../assets/герб.png"
import teaName from "../../assets/ДЕНЬ ГОРНОГО ЧАЯ.png"
import place from "../../assets/place.png"
import partner1 from "../../assets/partner1.png"
import partner2 from "../../assets/partner2.png"
import mainBlockLineImg from "../../assets/mainBlockLineImg.png"

function Main_Page({ children, ...props }) {
    return (
        <>
            <main>
                <CenterBlock
                    width={'100%'}
                    height={'100vh'}
                    background={backgroundMainImg}
                    gap={'70px'}
                    padding={'100px 0 0 0'}
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

                    <CenterBlock>
                        <RowBlock width={'100%'} gap={'100px'}>
                            <img src={partner1} alt="" style={{ width: '352px', height: '100px' }} />
                            <img src={partner2} alt="" style={{ width: '352px', height: '100px' }} />
                        </RowBlock>
                    </CenterBlock>
                </CenterBlock >

                <CenterBlock>
                    <img src={mainBlockLineImg} alt="" width={'100%'} style={{ marginTop: '-81px' }} />
                </CenterBlock>

                <CenterBlock>
                    <RowBlock width={'100%'} gap={'100px'}>
                        <H2>
                            sdfgsdf
                        </H2>
                    </RowBlock>
                </CenterBlock>
            </main>
        </>
    );
}

export default Main_Page;