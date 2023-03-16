import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import "/styles/yourChat.css";

function ChatRooms() {
  const [chatRooms, setChatRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  const getChats = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/chats/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setChatRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChats();
  }, [user]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredChatRooms = chatRooms.filter((chatRoom) =>
    chatRoom.userIds[1].name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="chat-rooms-container-chat">
    <h2 className="your-chats">Chats</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <button type="submit" className="search-button-chat">
          Search
        </button>
      </div>
      
      {filteredChatRooms.map((chatRoom) => (
        <div className="chat-room-chat" key={chatRoom._id}>
          <div className="user-list-chat">
            {chatRoom.userIds.length > 1 && (
              <div className="user-chat" key={chatRoom.userIds[1]._id}>
                <div className="pleaseWork">
                  <Link to={`/clicks/${chatRoom.userIds[1]._id}`}>
                    <img
                      className="profile-pic-chat"
                      src={chatRoom.userIds[1].imageUrl}
                      alt="profilepic"
                    />
                  </Link>
                  <p>{chatRoom.userIds[1].name}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}



export default ChatRooms;
