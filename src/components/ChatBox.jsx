import React, { useState } from "react";
import ChatRoom from "../pages/ChatRoom";
import "/styles/chatBox.css";


function ChatBox({ userDetails }) {


  return (
    <div className="chat-container">
      <div className="chat-header" >
        Chat with {userDetails.name}
       
      </div>
      
        <div className="chat-body">
          <ChatRoom userDetails={userDetails} />
          
        </div>

    </div>
  );
}

export default ChatBox;
