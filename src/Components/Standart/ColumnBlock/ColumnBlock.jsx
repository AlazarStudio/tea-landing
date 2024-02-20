import React from "react";
import classes from './ColumnBlock.module.css';

function ColumnBlock({ children, ...props }) {
    return (
        <>
            <div {...props} className={classes.ColumnBlock} style={{
                width: props.width,
                height: props.height,
                gap: props.gap
            }}>
                {children}
            </div>
        </>
    );
}

export default ColumnBlock;