import React from "react";
import CenterBlock from '../Standart/CenterBlock/CenterBlock'
import backgroundMainImg from "../../../public/backgroundMainImg.png"

function Main_Page({ children, ...props }) {
    return (
        <>
            <CenterBlock
                width={'100%'}
                height={'100vh'}
                background={backgroundMainImg}
            >
                
            </CenterBlock>
        </>
    );
}

export default Main_Page;