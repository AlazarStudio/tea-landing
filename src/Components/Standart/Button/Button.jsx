import React from "react";
import classes from './Button.module.css';
import { Link } from "react-router-dom";

function Button({ children, ...props }) {
    return (
        <>
            <Link {...props} href={props.link} className={classes.Button} style={{ width: props.width, height: props.height }}>
                {children}
            </Link>
        </>
    );
}

export default Button;