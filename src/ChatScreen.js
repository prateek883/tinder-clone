import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/7/31/w900X450/17_4TWO032913_22637227.JPG",
      message: "whatsup broh!!!..",
    },
    {
      name: "Ellen",
      image:
        "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/7/31/w900X450/17_4TWO032913_22637227.JPG",
      message: "Good Morning",
    },
    {
      message: "Hows are you is everything OK !..",
    },
  ]);

  const handleSend = e => {
      e.preventDefault();

      setMessages([...messages, { message: input }])
      setInput("");
  }



  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        YOU MATCHED WITH ELLEN ON 10/01/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
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
          value={input}
          onChange={e => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a Message...."
            type="text"
          />
          <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
        </form>
    </div>
  );
}

export default ChatScreen;
