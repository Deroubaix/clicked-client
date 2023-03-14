import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { AuthContext } from '../context/auth.context';
import '/styles/chatRoom.css';

function ChatRoom({ userId }) {
  const [inputValue, setInputValue] = useState('');
  const [chatId, setChatId] = useState("")
  const [chatMsg, setChatMsg] = useState()

  const { id } = useParams();
  const {user} = useContext(AuthContext)

  const createChatRoom = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/chat/${user._id}/${id}`
      );
      console.log(response.data);
      setChatId(response.data[0]._id)
      setChatMsg(response.data[0].messages)
    } catch (error) {
      console.log(error);
    }
  };


  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
      try {
    event.preventDefault();
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/messages/${chatId}/${user._id}`, {text: inputValue}
        );
        console.log(response.data);
        setInputValue('');
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    createChatRoom()
  }, [inputValue])

  return (
    <div className="chat">
      <div className="message-list">
        {chatMsg && chatMsg.map((message, index) => (
            <p key={index} className={message.author._id === user._id ? "my-message" : "other-message"}>
              {message.author.name}: {message.text}
            </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button className="chat-btn" type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;




