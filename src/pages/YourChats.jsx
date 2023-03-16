import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import "/styles/yourChat.css";

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
    <div className="chat-rooms-container-chat">
      {chatRooms.map((chatRoom) => (
        <div className="chat-room-chat" key={chatRoom._id}>
        
          <div className="user-list-chat">
            {chatRoom.userIds.length > 1 && (
              <div className="user-chat" key={chatRoom.userIds[1]._id}>
                <Link to={`/clicks/${chatRoom.userIds[1]._id}`} >
                  <img className="profile-pic-chat" src={chatRoom.userIds[1].imageUrl} alt="profilepic" />
                  <p>{chatRoom.userIds[1].name}</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );




  
  

  
}  

export default ChatRooms;
