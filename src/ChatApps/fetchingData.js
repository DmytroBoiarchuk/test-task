export async function fetchSecondApi(setChats) {
  const response = await fetch("https://aclean-52e2f83f8d01.herokuapp.com/shpp-first");
  const newChat = await response.json();
  const resultChat = transformChatData(newChat);

  setChats((prevState) => {
    if (prevState.some((chat) => chat.chat_id === resultChat.chat_id)) {
      return [...prevState];
    } else {
      return [...prevState, transformChatData(newChat)];
    }
  });
}
export async function fetchFirstApi(setChats) {
  const response = await fetch("https://aclean-52e2f83f8d01.herokuapp.com");
  const newChat = await response.json();
  const resultChat = {
    chat_id: 2,
    source: "viber",
    phone_number: "+38098XXXXXXX",
    name: "Michaela",
    messages: [
      {
        role: 'test',
        message_id: Math.random().toString(),
        content: newChat.message,
        unix_time_stamp: convertToUnixTime(newChat.date),
      },
    ],
  };
  setChats((prevState) => {
    if (prevState.some((chat) => chat.chat_id === resultChat.chat_id)) {
      return [...prevState];
    } else {
      return [...prevState, resultChat];
    }
  });
}
export async function fetchThirdApi(setChats) {
  const response = await fetch("https://aclean-52e2f83f8d01.herokuapp.com/shpp-second");
  const newChat = await response.json();

  setChats((prevState) => {
    if (prevState.some((chat) => chat.chat_id === newChat.chat_id)) {
      return [...prevState];
    } else {
      return [...prevState, newChat];
    }
  });
}
function transformChatData(originalData) {
  const transformedData = {
    chat_id: 3,
    source: "Instagram",
    phone_number: "+38098XXXXXXX",
    name: "Stasy",
    messages: [],
  };

  Object.keys(originalData).forEach((key) => {
    const message = originalData[key];

    const unixTimeStamp = Math.floor(new Date(message.date).getTime() / 1000);

    transformedData.messages.push({
      message_id: message.message_id,
      unix_time_stamp: unixTimeStamp,
      role: message.role,
      content: message.content,
    });
  });
  return transformedData;
}

function convertToUnixTime(dateString) {
  const [day, month, year] = dateString.split(".").map(Number);
  const date = new Date(year, month - 1, day);
  return Math.floor(date.getTime() / 1000);
}
export function formatUnixTimestamp(unixTimeStamp) {
  const date = new Date(unixTimeStamp * 1000);
  return date.toLocaleString("uk-UA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
