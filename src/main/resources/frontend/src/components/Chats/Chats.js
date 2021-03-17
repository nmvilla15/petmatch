import React from "react";
import Chat from "../Chat/Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Lexi"
        message="I'm a fancy girl looking for a quite home. I love to cuddle and eat peanut butter."
        timestamp="6 mins ago"
        profilePic="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk1fHxkb2dzfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
      />
      <Chat
        name="Charlie"
        message="I a very sweet fella, but a little skiddish. I've had a ruff life and am looking for a nice family to call my own."
        timestamp="1 hr ago"
        profilePic="https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODN8fGRvZ3N8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
      />
      <Chat
        name="Zoey"
        message="Ready for countless adventures? Me too!"
        timestamp="4 hrs ago"
        profilePic="https://i.pinimg.com/originals/cb/d4/1f/cbd41fb83c06a915a79ed0ab9ca63789.jpg"
      />
    </div>
  );
}

export default Chats;
