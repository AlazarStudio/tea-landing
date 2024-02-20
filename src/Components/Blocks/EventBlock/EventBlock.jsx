import React from "react";
import classes from './EventBlock.module.css';

import lineImg from '../../../assets/lineImg.png'

function EventBlock({ children, ...props }) {
    return ( 
        <>
            <div className={classes.EventBlock} style={{color: props.color, backgroundColor: props.background_color}}>
                <div className={classes.EventBlock_title}>{props.title}</div>
                <div className={classes.EventBlock_body}>{props.body}</div>
                <div className={classes.EventBlock_img}>
                    {props.bottomImg ? <img src={lineImg} /> : null}
                </div>
            </div>
        </>
     );
}

export default EventBlock;