import React from "react";
import { formatUnixTimestamp } from "../ChatApps/fetchingData.js";
import classes from "./message.module.css";
const Message = ({ message, name }) => {
  const isRoleManager = message.role === "manager";
  return (
    <div className={`${classes.messageContainer} ${isRoleManager && classes.managerClass}`}>
      <div
        className={classes.messageStyle}
      >
        <h2>{message.role === "manager" ? "You (manager)" : name}</h2>
        <p className={classes.date}>
          {formatUnixTimestamp(message.unix_time_stamp)}
        </p>
        <p className={classes.textClass}>{message.content}</p>
      </div>
    </div>
  );
};

export default Message;
