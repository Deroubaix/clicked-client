import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const socket = io('http://localhost:5173');
    // Send the message using the "message" event
    socket.emit('message', inputValue);
    setInputValue('');
    console.log(inputValue);
    console.log('message sent');

    // Add the new message to the messages state array
    setMessages([...messages, inputValue]);



    try {
      // Send the new message to the server to be stored in the database
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message to the server');
      }
    } catch (error) {
      console.error(error);
    }
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
