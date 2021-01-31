import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react"; 
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F131874561_380627859704218_8827024090799306637_n.jpg%3Foh%3D71f9d7ac1e1a10747e5f98d4c69c89bc%26oe%3D601AFD10&t=l&u=919899742615-1587619386%40g.us&i=1608270566&n=Aq5VfJ3ezd4U3TN9sElC1DQNDidtns6Qm8fAdYmRa2I%3D"/>

                <div className="chat__headerInfo">
                    <h3>DNA Team</h3>
                    <p>last seen at ....</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Noel</span>
            Happy Birthday Dilip
            <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">Dilip</span>
            Thanks Noel!
            <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name ">Abhishek</span>
            Happy Birthday Dilip!
            <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Dilip</span>
            Thanks Abhishek!
            <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a Message" type="text" />
                    <button type="submit">
                        Send a Message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
