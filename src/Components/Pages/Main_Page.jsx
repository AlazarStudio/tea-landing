import React from "react";
import CenterBlock from '../Standart/CenterBlock/CenterBlock'
import ColumnBlock from '../Standart/ColumnBlock/ColumnBlock'
import RowBlock from '../Standart/RowBlock/RowBlock'
import Button from "../Standart/Button/Button";
import H2 from "../Standart/H2/H2";
import Text from "../Standart/Text/Text";
import EventBlock from "../Blocks/EventBlock/EventBlock";
import MessageBlock from "../Blocks/MessageBlock/MessageBlock";

import backgroundMainImg from "../../assets/backgroundMainImg.png"
import logo from "../../assets/герб.png"
import teaName from "../../assets/ДЕНЬ ГОРНОГО ЧАЯ.png"
import partner1 from "../../assets/partner1.png"
import partner2 from "../../assets/partner2.png"
import mainBlockLineImg from "../../assets/mainBlockLineImg.png"
import chatBackground from "../../assets/chatBackground.png"

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
                                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99996 21.5C6.55646 20.2433 5.21847 18.8656 3.99998 17.3814C2.17142 15.1523 1.00989e-06 11.8327 1.00989e-06 8.66931C-0.00161974 5.36547 1.9477 2.38623 4.93834 1.12183C7.92898 -0.142565 11.3714 0.5571 13.6594 2.89434C15.1639 4.42306 16.0067 6.50255 16 8.66931C16 11.8327 13.8285 15.1523 11.9999 17.3814C10.7814 18.8656 9.44346 20.2433 7.99996 21.5ZM7.99996 5.17003C6.77506 5.17003 5.6432 5.83699 5.03075 6.91967C4.41829 8.00235 4.41829 9.33627 5.03075 10.419C5.6432 11.5016 6.77506 12.1686 7.99996 12.1686C9.8935 12.1686 11.4285 10.6019 11.4285 8.66931C11.4285 6.73671 9.8935 5.17003 7.99996 5.17003Z"
                                        fill="white"
                                    />
                                </svg>

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

                <CenterBlock width={'100%'} id="programm">
                    <ColumnBlock width={'var(--blockWidth)'} gap={'80px'}>
                        <H2>ПРОГРАММА МЕРОПРИЯТИЯ</H2>
                        <ColumnBlock>
                            <RowBlock>
                                <EventBlock title={'12.00 - 12.10'} body={'Приветствие и знакомство с командой региона'} color={'#fff'} background_color={'#007030'} />
                                <EventBlock title={'12.00 - 12.10'} body={'Приветствие и знакомство с командой региона'} color={'#000'} background_color={'#fff'} bottomImg={'true'} />
                                <EventBlock title={'12.00 - 12.10'} body={'Приветствие и знакомство с командой региона'} color={'#fff'} background_color={'#E02010'} />
                            </RowBlock>
                            <RowBlock>
                                <EventBlock title={'12.00 - 12.10'} body={'Приветствие и знакомство с командой региона'} color={'#000'} background_color={'#fff'} bottomImg={'true'} />
                                <EventBlock title={'12.00 - 12.10'} body={'Приветствие и знакомство с командой региона'} color={'#fff'} background_color={'#0090D0'} />
                                <EventBlock title={'12.00 - 12.10'} body={'Приветствие и знакомство с командой региона'} color={'#000'} background_color={'#fff'} bottomImg={'true'} />
                            </RowBlock>
                            <RowBlock>
                                <EventBlock title={'12.00 - 12.10'} body={'Приветствие и знакомство с командой региона'} color={'#fff'} background_color={'#E02010'} />
                                <EventBlock title={'12.00 - 12.10'} body={'Приветствие и знакомство с командой региона'} color={'#000'} background_color={'#fff'} bottomImg={'true'} />
                                <EventBlock title={'12.00 - 12.10'} body={'Приветствие и знакомство с командой региона'} color={'#fff'} background_color={'#007030'} />
                            </RowBlock>
                        </ColumnBlock>
                    </ColumnBlock>
                </CenterBlock>

                <CenterBlock id="chat">
                    <ColumnBlock width={'var(--blockWidth)'} gap={'80px'} background={chatBackground} padding={'50px'} borderRadius={'30px'}>
                        <CenterBlock gap={'50px'}>
                            <H2 color={'#fff'}>ИНТЕРАКТИВНЫЙ ЧАТ</H2>
                            <ColumnBlock>
                                <Text color={'#fff'} width={'650px'}>
                                    Здесь вы можете написать сообщение, которое отобразиться на главном экране мероприятия.
                                </Text>
                                <Text color={'#fff'} width={'650px'}>
                                    Сообщения отправляются с интервалом в 5 минут.
                                </Text>
                            </ColumnBlock>
                            <MessageBlock/>
                        </CenterBlock>
                    </ColumnBlock>
                </CenterBlock>
            </main>
        </>
    );
}

export default Main_Page;