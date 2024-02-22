import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import classes from './Chat.module.css';

function Chat({ children, ...props }) {
    const [messages, setMessages] = useState([]);
    const chatEndRef = useRef(null);
    const prevHeightRef = useRef(0);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // const response = await axios.get('https://gorchay.kchturism.ru/api/message.php');
                // const data = response.data;
                // setMessages(data);
                setMessages(props.chatMass);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();

        return () => { };
    }, []);

    const delay = 5000;

    const displayMessages = async () => {
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].showMess === 'false' && messages[i].moderedMess === 'true') {
                await new Promise(resolve => setTimeout(resolve, delay));
                setMessages(prevMessages => {
                    const updatedMessages = [...prevMessages];
                    updatedMessages[i].showMess = 'true';
                    return updatedMessages;
                });
            }
        }
    };

    useEffect(() => {
        displayMessages();
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        const chatElement = chatEndRef.current;
        if (chatElement) {
            const { scrollHeight, clientHeight } = chatElement;
            if (scrollHeight > prevHeightRef.current) {
                chatElement.scrollTop = scrollHeight - clientHeight;
                prevHeightRef.current = scrollHeight;
            }
        }
    };

    return (
        <>
            <div className={classes.Chat} ref={chatEndRef}>
                {messages.map((message, index) => (
                    <div key={index} className={classes.message}>
                        {message.showMess === 'true' && message.moderedMess === 'true' && (
                            <div className={classes.messBlock}>
                                <div>{message.fio}</div>
                                <div>{message.text}</div>
                                <div>{message.date}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Chat;