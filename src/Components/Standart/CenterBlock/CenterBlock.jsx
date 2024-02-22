import React from "react";
import classes from './CenterBlock.module.css';

function CenterBlock({ children, ...props }) {
    return ( 
        <>
            <div {...props} className={classes.CenterBlock} style={{
                width: props.width,
                height: props.height,
                gap: props.gap,
                background: `url(${props.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundColor: props.backgroundColor,
                margin: props.margin,
                padding: props.padding,
                border: props.border,
            }}>
                {children}
            </div>
        </>
     );
}

export default CenterBlock;