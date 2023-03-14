import React, { useState } from "react";
import ChatRoom from "../../pages/ChatRoom";

function ChatBox({ userDetails }) {
  const [showChat, setShowChat] = useState(true);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="chat-container">
      <div className="chat-header" onClick={toggleChat}>
        Chat with {userDetails.name}
        {showChat ? "-" : "+"}
      </div>
      {showChat && (
        <div className="chat-body">
          <ChatRoom userDetails={userDetails} />
        </div>
      )}
    </div>
  );
}

export default ChatBox;

