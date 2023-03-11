// import React from "react";
// import { Message } from "../components/Message";
// import { useParams } from "react-router-dom";

// function Chat() {
//   const { data } = useParams();
//   console.log("MY DATA", data);

//   return (
//     <div>
//       <h1>Hello</h1>
//       <Message name={data.name} />
//     </div>
//   );
// }

// export default Chat;

import React from "react";
import { Message } from "../components/Message/Message";
import { useParams } from "react-router-dom";

function Chat() {
  const { data } = useParams();
  const parsedData = JSON.parse(decodeURIComponent(data));
  console.log("MY DATA", parsedData);

  return (
    <div>
      <h1>Chat with</h1>
      <Message name={parsedData.name} />
    </div>
  );
}

export default Chat;
