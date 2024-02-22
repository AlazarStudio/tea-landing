import React, { useState, useEffect } from "react";
import Button from "../../Standart/Button/Button";
import axios from 'axios';
import Text from "../../Standart/Text/Text";

function MessageBlock({ children, ...props }) {
    const [lastSentTime, setLastSentTime] = useState(localStorage.getItem('lastSentTime'));
    const [timeLeft, setTimeLeft] = useState(0);
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            let timerNum = 5;
            const currentTime = new Date().getTime();
            if (lastSentTime && currentTime - parseInt(lastSentTime) < timerNum * 60 * 1000) {
                const timePassed = currentTime - parseInt(lastSentTime);
                const remainingTime = timerNum * 60 * 1000 - timePassed;
                setTimeLeft(remainingTime);
            } else {
                setTimeLeft(0);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [lastSentTime]);

    const fetchData = async (messageUserName, messageData) => {
        try {
            const response = await axios.get(`https://gorchay.kchturism.ru/api/add_message.php?messageUserName=${messageUserName}&message=${messageData}`);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    function handleClick() {
        if (timeLeft > 0) {
            alert("Вы можете отправлять сообщения только раз в 5 минут.");
            return;
        }

        if (message != '' && userName != ''){
            const currentTime = new Date().getTime();
            localStorage.setItem('lastSentTime', currentTime);
            setLastSentTime(currentTime);
    
            fetchData(userName, message);
            setMessage('');
            setUserName('');
            alert('Сообщение успешно отправлено');
        } else {
            alert('Заполните все поля');
        }

    }

    const minutes = Math.floor(timeLeft / (1000 * 60));
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return (
        <>
            <input type="text"
                id="messageName"
                placeholder="Ваше Имя"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                    width: '708px',
                    height: '40px',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '0 20px',
                    outline: 'none',
                    fontSize: '16px',
                    resize: 'none',
                }}
                required />
            <textarea
                id="messagePlace"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ваше сообщение"
                style={{
                    width: '708px',
                    height: '238px',
                    borderRadius: '10px',
                    padding: '20px',
                    outline: 'none',
                    fontSize: '16px',
                    resize: 'none',
                }}
                required
            ></textarea>

            {timeLeft > 0 && (
                <Text color={'#fff'}>
                    Подождите {minutes} минут {seconds} секунд, прежде чем отправить сообщение снова.
                </Text>
            )}


            <Button onClick={handleClick} width={'319px'} height={'60px'} disabled={timeLeft > 0} timeLeft={timeLeft}>
                Отправить
            </Button>
        </>
    );
}

export default MessageBlock;
