import React, { useContext, useEffect, useState } from "react";
import {
  fetchFirstApi,
  fetchSecondApi,
  fetchThirdApi,
} from "../ChatApps/fetchingData.js";
import classes from "./SideBar.module.css";
import Chat from "./Chat.jsx";
import { ChatsContext } from "../context/ChatsContext.jsx";
const SideBar = () => {
  const { chats, setChats } = useContext(ChatsContext);
  useEffect(() => {
    fetchFirstApi(setChats);
    fetchSecondApi(setChats);
    fetchThirdApi(setChats);
  }, []);
  return (
    <div className={classes.sideBar}>
      {chats.map((chatData) => (
        <Chat key={chatData.chat_id} chatData={chatData} />
      ))}
    </div>
  );
};

export default SideBar;
