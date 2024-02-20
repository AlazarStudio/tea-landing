import React from "react";
import classes from './RowBlock.module.css';

function RowBlock({ children, ...props }) {
    return ( 
        <>
            <div {...props} className={classes.RowBlock} style={{
                width: props.width,
                height: props.height,
                gap: props.gap
            }}>
                {children}
            </div>
        </>
     );
}

export default RowBlock;