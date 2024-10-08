import React, {useContext} from 'react';
import classes from './ChatBody.module.css'
import {ChatsContext} from "../context/ChatsContext.jsx";
import Message from "./Message.jsx";
const ChatBody = () => {
    const {chats, activeChat} = useContext(ChatsContext)
    if(!activeChat){
        return <div className={classes.chatBody}></div>
    }
    const chatById = chats.find(chat => chat.chat_id === activeChat)
    return (
        <div className={classes.chatBody}>
            {chatById.messages.map(message => <Message key={message.message_id} name={chatById.name} message={message}/>
            )}

        </div>
    );
};

export default ChatBody;