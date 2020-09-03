import React from 'react';
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Mark"
            message="yo whats up!"
            timestamp="40 seconds ago"
            /*profilePic="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg"*/
             />
             <Chat
            name="Ellen"
            message="Looking awesome"
            timestamp="40 seconds ago"
            profilePic="https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/w_sexy_gr.jpg"
             />
             <Chat
            name="Sandra"
            message="amazing broh..."
            timestamp="40 seconds ago"
            profilePic="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             />
             <Chat
            name="John"
            message="ola"
            timestamp="40 seconds ago"
            profilePic="https://www.healthline.com/hlcmsresource/images/topic_centers/2018-9/Portrait_Female_Smile_Blond-1200x628-Facebook.jpg"
             />
        </div>
    )
}

export default Chats
