import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import "/styles/yourChat.css";

/* function ChatRooms() {
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
      <h1 className="your-chats">Chats</h1>
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
                  {chatRoom.userIds[0]._id == user._id ? (
                    <Link className="no-under" to={`/clicks/${chatRoom.userIds[1]._id}`}>
                      <img
                        className="profile-pic-chat"
                        src={chatRoom.userIds[1].imageUrl}
                        alt="profilepic"
                      />
                      <p>{chatRoom.userIds[1].name}</p>
                    </Link>
                  ) : (
                    <Link className="no-under"  to={`/clicks/${chatRoom.userIds[0]._id}`}>
                      <img
                        className="profile-pic-chat"
                        src={chatRoom.userIds[0].imageUrl}
                        alt="profilepic"
                      />
                      <p>{chatRoom.userIds[0].name}</p>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} */


function ChatRooms() {

  const [chatRooms, setChatRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const storedToken = localStorage.getItem("authToken");

  function Loading() {
    return (
      <div className="loading-container">
        <img src="../../images/Loading.gif" alt="Loading..." />
      </div>
    );
  }

  const getChats = async () => {
    try {
      setIsLoading(true); // set isLoading to true before making the API call
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/chats/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setChatRooms(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // set isLoading to false after the API call is completed (whether it was successful or not)
    }
  };

  useEffect(() => {
    getChats();
  }, [user]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  

  const filteredChatRooms = chatRooms.filter((chatRoom) => {
    const user1Name = chatRoom.userIds[0].name.toLowerCase();
    const user2Name = chatRoom.userIds[1].name.toLowerCase();
    const query = searchQuery.toLowerCase();
    return user1Name.includes(query) || user2Name.includes(query);
  });
  

  return (
    <div className="chat-rooms-container-chat">
      <h1 className="your-chats">Chats</h1>
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

      {isLoading && <Loading />} {/* render the Loading component if isLoading is true */}

      {!isLoading && filteredChatRooms.length === 0 && (
        <p>No results found</p>
      )}

      {!isLoading && filteredChatRooms.map((chatRoom) => (
        <div className="chat-room-chat" key={chatRoom._id}>
          <div className="user-list-chat">
            {chatRoom.userIds.length > 1 && (
              <div className="user-chat" key={chatRoom.userIds[1]._id}>
                <div className="pleaseWork">
                  {chatRoom.userIds[0]._id == user._id ? (
                    <Link className="no-under" to={`/clicks/${chatRoom.userIds[1]._id}`}>
                      <img
                        className="profile-pic-chat"
                        src={chatRoom.userIds[1].imageUrl}
                        alt="profilepic"
                      />
                      <p>{chatRoom.userIds[1].name}</p>
                    </Link>
                  ) : (
                    <Link className="no-under"  to={`/clicks/${chatRoom.userIds[0]._id}`}>
                      <img
                        className="profile-pic-chat"
                        src={chatRoom.userIds[0].imageUrl}
                        alt="profilepic"
                      />
                      <p>{chatRoom.userIds[0].name}</p>
                    </Link>
                  )}
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
