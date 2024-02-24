import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import classes from "./Chat.module.css";

import chat_bg from "../../../assets/chat_bg.png";

function Chat({ children, ...props }) {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);
  const prevHeightRef = useRef(0);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('https://gorchay.kchturism.ru/api/message.php');
        const data = response.data;
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
    const pollingInterval = setInterval(fetchMessages, 5000);
    
    return () => {};
  }, []);

  const delay = 5000;

  const displayMessages = async () => {
    for (let i = 0; i < messages.length; i++) {
      if (
        messages[i].showmess === "false" &&
        messages[i].moderedmess === "true"
      ) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[i].showmess = "true";
          axios.get(`https://gorchay.kchturism.ru/api/update_message.php?message_id=${updatedMessages[i].id}`);
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
              {message.showmess === "true" &&
                message.moderedmess === "true" && (
                  <div className={classes.messBlock}>
                    <div className={classes.chat_fio}>{message.fio}</div>
                    <div className={classes.chat_text}>{message.text}</div>
                    <div className={classes.chat_date}>{message.date}</div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Chat;




// 