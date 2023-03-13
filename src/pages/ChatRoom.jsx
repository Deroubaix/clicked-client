import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { AuthContext } from '../context/auth.context';

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

/*   useEffect(() => {
    const socket = io('http://localhost:5173');
    // Send the "id" event to the server when the component mounts
    socket.emit('id', userId);
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
    event.preventDefault();
    const socket = io.connect('http://localhost:5173');
    // Send the message using the "message" event
    socket.emit('message', inputValue);
   
    console.log(inputValue);
    console.log('message sent');

    // Add the new message to the messages state array
    setMessages([...messages, inputValue]);

    setInputValue('');


   
      // Send the new message to the server to be stored in the database
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue }),
      }); 

      socket.on('message', (data) => {
        setMessages(data)
      })

   if (!response.ok) {
        throw new Error('Failed to send message to the server');
      }
    } catch (error) {
      console.error(error);
    }
  }; */

  return (
    <div>
 
        {chatMsg && chatMsg.map((message, index) => (
            <p key={index}>{message.author.name}: {message.text}</p>
        ))}
 
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;





/* import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function ChatRoom({ userId }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:5173');

    // Send the "id" event to the server when the component mounts
    socket.emit('id', userId);

    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const socket = io('http://localhost:5173');
    // Send the message using the "message" event
    socket.emit('message', inputValue);
    setInputValue('')
    console.log(inputValue)
    console.log ("message sent");
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom; */
