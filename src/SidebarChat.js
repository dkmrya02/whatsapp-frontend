import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F131874561_380627859704218_8827024090799306637_n.jpg%3Foh%3D71f9d7ac1e1a10747e5f98d4c69c89bc%26oe%3D601AFD10&t=l&u=919899742615-1587619386%40g.us&i=1608270566&n=Aq5VfJ3ezd4U3TN9sElC1DQNDidtns6Qm8fAdYmRa2I%3D"/>
            <div className="sidebarChat__info">
                <h2>DNA Team</h2>
                <p>Thanks Abhishek!</p>
            </div>
        </div>
    )
}

export default SidebarChat
