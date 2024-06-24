import React from 'react';

export const Messages = () => {
  const [messages, setMessages] = React.useState(["a", "b"]);

//   function handleMessages() {
//     const messageLength = messages.length;
//     if (messageLength === 0) {
//       return <p>You are all caught up</p>;
//     } else if (messageLength === 1) {
//       return <p>You have {messageLength} unread message</p>;
//     } else {
//       return <p>You have {messageLength} unread messages</p>;
//     }
//   }

  return (
    <div>
      {/* {handleMessages()} */}
      { messages.length === 0 ?
        <h1>You are all caught up:</h1>:
        <h1>You have {messages.length} unread 
        {/* message {messages.length > 1 && "s"} */}
        {messages.length > 1 ? " messages" : " message"}
        </h1> }
    </div>
  );
}
