import React from "react";
import classes from './CenterBlock.module.css';

function CenterBlock({ children, ...props }) {
    return ( 
        <>
            <div {...props} className={classes.CenterBlock} style={{
                width: props.width,
                height: props.height,
                gap: props.gap
            }}>
                {children}
            </div>
        </>
     );
}

export default CenterBlock;