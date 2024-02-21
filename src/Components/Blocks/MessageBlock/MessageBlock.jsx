import React, { useState, useEffect } from "react";
import Button from "../../Standart/Button/Button";
import axios from 'axios';
import Text from "../../Standart/Text/Text";

function MessageBlock({ children, ...props }) {
    const [lastSentTime, setLastSentTime] = useState(localStorage.getItem('lastSentTime'));
    const [timeLeft, setTimeLeft] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            let timerNum = 1;
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

    const fetchData = async () => {
        try {
            const response = await axios.get('http://gorchay.kchturism.ru/api/message.php');
            console.log(response.data);
            // Обработка полученных данных
        } catch (error) {
            console.error('Error fetching data:', error);
            // Обработка ошибки
        }
    };

    function handleClick() {
        if (timeLeft > 0) {
            alert("Вы можете отправлять сообщения только раз в 5 минут.");
            return;
        }

        const currentTime = new Date().getTime();
        localStorage.setItem('lastSentTime', currentTime);
        setLastSentTime(currentTime);

        fetchData();
    }

    const minutes = Math.floor(timeLeft / (1000 * 60));
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return (
        <>
            <textarea 
                id="messagePlace" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ваше сообщение" 
                style={{
                    width: '708px',
                    height: '238px',
                    borderRadius: '20px',
                    padding: '30px',
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
