
import './App.css'
import SideBar from "./components/SideBar.jsx";
import ChatBody from "./components/ChatBody.jsx";
import {ChatsContext} from "./context/ChatsContext";
import {useState} from "react";


function App() {
  const [activeChat, setActiveChat] = useState()
  const  [chats, setChats] = useState([])

  return (
      <ChatsContext.Provider value={{chats, setChats,activeChat, setActiveChat}}>
    <div className='body'>
        <ChatBody/>
      <SideBar/>
    </div>
      </ChatsContext.Provider>
  )
}

export default App
