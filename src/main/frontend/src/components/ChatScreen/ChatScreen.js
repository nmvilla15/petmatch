import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Charlie",
      image:
        "https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODN8fGRvZ3N8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      message:
        "Hi! I am currently available for adoption through Austin Pet's Alive.",
    },
    {
      name: "Charlie",
      image:
        "https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODN8fGRvZ3N8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      message:
        "If you would like to find out more about APA's adoption process please reply: More Info",
    },
    {
      message: "More Info",
    },
    {
      name: "Charlie",
      image:
        "https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODN8fGRvZ3N8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      message:
        "Thank you! One of our adoption specialists will reach out to you shortly!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        message: input,
      },
    ]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH CHARLIE ON 3/17/2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__icon"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          type="text"
          placeholder="Type a message"
          className="chatScreen__inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="chatScreen__inputButton" onClick={handleSend}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
