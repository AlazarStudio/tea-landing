import React from "react";
import classes from './MyH1.module.css';

function MyH1({ children, ...props }) {
    return (
        <>
            <h1 {...props} style={{
                fontFamily: props.font_family,
                fontSize: props.font_size,
                fontWeight: props.font-weight,
                textAlign: props.text-align,
                lineHeight: props.line-height,
                letterSpacing: props.letter-spacing,
                width: props.width,
                height: props.height,
                padding: props.padding,
                margin: props.margin,
                display: props.display,
                
            }}>
                {children}
            </h1>
        </>
    );
}

export default MyH1;