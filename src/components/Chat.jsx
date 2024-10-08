import React, {useContext} from "react";
import classes from "./Chat.module.css";
import {formatUnixTimestamp} from "../ChatApps/fetchingData.js";
import {ChatsContext} from "../context/ChatsContext.jsx";
const Chat = ({ chatData }) => {
  const {setActiveChat} =  useContext(ChatsContext)
  const onClickHandler = () => {
      setActiveChat(chatData.chat_id)
  };
  const lastMassageData = chatData.messages[chatData.messages.length - 1]
  return (
    <div onClick={onClickHandler} className={classes.chatBlock}>
        <p>{chatData.name}</p>
        <p>{lastMassageData.content}</p>
      <p>{formatUnixTimestamp(lastMassageData.unix_time_stamp)}</p>
      <p>{chatData.message}</p>
    </div>
  );
};

export default Chat;
