import React, { useState, useEffect } from "react";
import Button from "../../Standart/Button/Button";

import Text from "../../Standart/Text/Text";

function MessageBlock({ children, ...props }) {
    const [lastSentTime, setLastSentTime] = useState(localStorage.getItem('lastSentTime'));
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = new Date().getTime();
            if (lastSentTime && currentTime - parseInt(lastSentTime) < 5 * 60 * 1000) {
                const timePassed = currentTime - parseInt(lastSentTime);
                const remainingTime = 5 * 60 * 1000 - timePassed;
                setTimeLeft(remainingTime);
            } else {
                setTimeLeft(0);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [lastSentTime]);

    function click() {
        let timeOut = 5;
        const currentTime = new Date().getTime();
        if (lastSentTime && currentTime - parseInt(lastSentTime) < timeOut * 60 * 1000) {
            alert("Вы можете отправлять сообщения только раз в 5 минут.");
            return;
        }

        let message = $("#messagePlace").val();
        $("#messagePlace").val('');
        console.log(message);

        localStorage.setItem('lastSentTime', currentTime);
        setLastSentTime(currentTime);
    }

    const minutes = Math.floor(timeLeft / (1000 * 60));
    const seconds = Math.floor((timeLeft / 1000) % 60);

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

            {timeLeft > 0 && (
                <Text color={'#fff'}>
                    Подождите {minutes} минут {seconds} секунд, прежде чем отправить сообщение снова.
                </Text>
            )}

            <Button onClick={click} width={'319px'} height={'60px'} disabled={timeLeft > 0} timeLeft={timeLeft}>
                Отправить
            </Button>
        </>
    );
}

export default MessageBlock;
