import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function ChatRooms() {
  const [chatRooms, setChatRooms] = useState([]);
  const { user } = useContext(AuthContext);
  /* const { chatId } = useParams(); */

  const storedToken = localStorage.getItem("authToken");

  const getChats = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/chats/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      console.log(response);
      setChatRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChats();
  }, [user]);

  return (
    <div>
      {/* <h1>hiii</h1>
      <h1>hiii</h1> */}
      {/* {chatRooms.map((mychat) => {
        <div key={chatRooms._id}>
          <h1>hi!</h1>
        </div>;
      })} */}
      {chatRooms.map((chatRoom) => (
        <div key={chatRoom._id}>
          <h2>Chat Room</h2>
          {/* <p>Other User: {chatRoom.otherUser}</p> */}
          <ul>
            {chatRoom.userIds.map((users) => (
              <li key={users._id}>
              <img src={users.imageUrl} alt="profilepic" />
                <p>Author: {message.author.name}</p>
                <p>Message: {message.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ChatRooms;
