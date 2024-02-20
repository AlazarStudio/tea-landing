import React from "react";
import classes from './ColumnBlock.module.css';

function ColumnBlock({ children, ...props }) {
    return (
        <>
            <div className={classes.ColumnBlock} style={{
                width: props.width,
                height: props.height,
                gap: props.gap,
                background: `url(${props.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                justifyContent: props.justifyContent
            }}>
                {children}
            </div>
        </>
    );
}

export default ColumnBlock;