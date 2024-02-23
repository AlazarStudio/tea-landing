import React from "react";
import classes from "./EventBlock.module.css";

import lineImg from "../../../assets/lineImg.png";
import Button from "../../Standart/Button/Button";

function EventBlock({ children, ...props }) {
  let strText = "";

  if (props.split == "split") {
    let text = props.split ? props.body.split(". ") : props.body;

    strText = text.map((part, index) => (
      <div style={{marginBottom: '5px'}} key={index} dangerouslySetInnerHTML={{ __html: part }} />
    ));
  }

  return (
    <>
      <div
        className={classes.EventBlock}
        style={{ color: props.color, backgroundColor: props.background_color }}
      >
        {props.title ? (
          <div className={classes.EventBlock__gapBlock}>
            <div className={classes.EventBlock__gapBlock___text}>
              {props.title ? (
                <div className={classes.EventBlock_title}>{props.title}</div>
              ) : null}

              {props.body ? (
                <div className={classes.EventBlock_body}>
                  {props.split ? strText : props.body}
                </div>
              ) : null}
            </div>
            {props.button ? (
              <Button
                link={props.link}
                width={"319px"}
                height={"60px"}
                style={{
                  border: `1px solid ${props.color}`,
                  color: props.color,
                  height: "60px",
                  backgroundColor: props.background_color,
                }}
              >
                <svg
                  width="16"
                  height="22"
                  viewBox="0 0 16 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99996 21.5C6.55646 20.2433 5.21847 18.8656 3.99998 17.3814C2.17142 15.1523 1.00989e-06 11.8327 1.00989e-06 8.66931C-0.00161974 5.36547 1.9477 2.38623 4.93834 1.12183C7.92898 -0.142565 11.3714 0.5571 13.6594 2.89434C15.1639 4.42306 16.0067 6.50255 16 8.66931C16 11.8327 13.8285 15.1523 11.9999 17.3814C10.7814 18.8656 9.44346 20.2433 7.99996 21.5ZM7.99996 5.17003C6.77506 5.17003 5.6432 5.83699 5.03075 6.91967C4.41829 8.00235 4.41829 9.33627 5.03075 10.419C5.6432 11.5016 6.77506 12.1686 7.99996 12.1686C9.8935 12.1686 11.4285 10.6019 11.4285 8.66931C11.4285 6.73671 9.8935 5.17003 7.99996 5.17003Z"
                    fill={props.color}
                  />
                </svg>
                <div style={{ maxWidth: "77%" }}>{props.button}</div>
              </Button>
            ) : null}
          </div>
        ) : null}

        {props.img ? (
          <div className={classes.EventBlock_img__full}>
            <img src={props.img} alt="" />
          </div>
        ) : null}

        <div className={classes.EventBlock_img}>
          {props.bottomImg ? <img src={lineImg} /> : null}
        </div>
      </div>
    </>
  );
}

export default EventBlock;
