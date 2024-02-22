import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import classes from "./Chat.module.css";

import chat_bg from "../../../assets/chat_bg.png";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";

function Chat({ children, ...props }) {
  let chatMass = [
    {
      fio: "Джатдоев Алим",
      text: "Привет",
      date: "2024-02-22 13:12:46",
      showMess: "true",
      moderedMess: "true",
    },
    {
      fio: "Гочияев Руслан",
      text: "Привет Привет Привет",
      date: "2024-02-22 13:17:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Уртенов Азамат",
      text: "Hello",
      date: "2024-02-22 13:25:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Джатдоев Алим",
      text: "Привет",
      date: "2024-02-22 13:12:46",
      showMess: "true",
      moderedMess: "false",
    },
    {
      fio: "Гочияев Руслан",
      text: "Привет Привет Привет",
      date: "2024-02-22 13:17:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Уртенов Азамат",
      text: "Hello",
      date: "2024-02-22 13:25:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Джатдоев Алим",
      text: "Привет",
      date: "2024-02-22 13:12:46",
      showMess: "true",
      moderedMess: "false",
    },
    {
      fio: "Гочияев Руслан",
      text: "Привет Привет Привет",
      date: "2024-02-22 13:17:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Уртенов Азамат",
      text: "Hello",
      date: "2024-02-22 13:25:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Джатдоев Алим",
      text: "Привет",
      date: "2024-02-22 13:12:46",
      showMess: "true",
      moderedMess: "false",
    },
    {
      fio: "Гочияев Руслан",
      text: "Привет Привет Привет",
      date: "2024-02-22 13:17:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Уртенов Азамат",
      text: "Hello",
      date: "2024-02-22 13:25:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Джатдоев Алим",
      text: "Привет",
      date: "2024-02-22 13:12:46",
      showMess: "true",
      moderedMess: "false",
    },
    {
      fio: "Гочияев Руслан",
      text: "Привет Привет Привет",
      date: "2024-02-22 13:17:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Уртенов Азамат",
      text: "Hello",
      date: "2024-02-22 13:25:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Джатдоев Алим",
      text: "Привет",
      date: "2024-02-22 13:12:46",
      showMess: "true",
      moderedMess: "false",
    },
    {
      fio: "Гочияев Руслан",
      text: "Привет Привет Привет",
      date: "2024-02-22 13:17:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Уртенов Азамат",
      text: "Hello",
      date: "2024-02-22 13:25:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Джатдоев Алим",
      text: "Привет",
      date: "2024-02-22 13:12:46",
      showMess: "true",
      moderedMess: "false",
    },
    {
      fio: "Гочияев Руслан",
      text: "Привет Привет Привет",
      date: "2024-02-22 13:17:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Уртенов Азамат",
      text: "Hello",
      date: "2024-02-22 13:25:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Джатдоев Алим",
      text: "Привет",
      date: "2024-02-22 13:12:46",
      showMess: "true",
      moderedMess: "false",
    },
    {
      fio: "Гочияев Руслан",
      text: "Привет Привет Привет",
      date: "2024-02-22 13:17:46",
      showMess: "false",
      moderedMess: "true",
    },
    {
      fio: "Уртенов Азамат",
      text: "Hello",
      date: "2024-02-22 13:25:46",
      showMess: "false",
      moderedMess: "true",
    },
  ];

  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);
  const prevHeightRef = useRef(0);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // const response = await axios.get('https://gorchay.kchturism.ru/api/message.php');
        // const data = response.data;
        // setMessages(data);
        setMessages(chatMass);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    return () => {};
  }, []);

  const delay = 5000;

  const displayMessages = async () => {
    for (let i = 0; i < messages.length; i++) {
      if (
        messages[i].showMess === "false" &&
        messages[i].moderedMess === "true"
      ) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[i].showMess = "true";
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
      <div
        className={classes.fullWidthChatBlock}
        style={{
          background: `url(${chat_bg})`,
          backgroundPosition: `center center`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className={classes.Chat} ref={chatEndRef} style={{}}>
          {messages.map((message, index) => (
            <div key={index} className={classes.message}>
              {message.showMess === "true" &&
                message.moderedMess === "true" && (
                  <div className={classes.messBlock}>
                    <div className={classes.chat_fio}>{message.fio}</div>
                    <div className={classes.chat_text}>{message.text}</div>
                    <div className={classes.chat_date}>{message.date}</div>
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className={classes.textPositionChat}
          style={{

          }}
        >
          <input
            type="text"
            placeholder="Сообщение"
            style={{
              width: "100%",
              height: "50px",
              outline: "none",
              borderRadius: "50px",
              border: "none",
              padding: "0 20px",
              fontSize: "16px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Chat;
