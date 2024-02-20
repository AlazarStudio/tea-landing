import React from "react";
import classes from './MessageBlock.module.css';
import Button from "../../Standart/Button/Button";

function MessageBlock({ children, ...props }) {
    function click() {
        let message = $("#messagePlace").val();
        $("#messagePlace").val('');
        console.log(message);
    }

    return (
        <>
            <textarea id="messagePlace" placeholder="Ваше сообщение" style={{
                width: '708px',
                height: '238px',
                borderRadius: '20px',
                padding: '30px',
                outline: 'none',
                fontSize: '16px',
                resize: 'none',
            }}></textarea>

            <Button onClick={click} width={'319px'} height={'60px'}>
                Отправить
            </Button>
        </>
    );
}

export default MessageBlock;