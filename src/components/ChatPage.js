import { useEffect, useState } from "react";
import ChatsContainer from "./ChatsContainer";
import Login from "./Login";
import Message from "./Message";
import MessagesWindow from "./MessagesWindow";


function ChatPage({user}){


    const [chats, setChats] = useState(undefined)
    const [messages, setMessages] = useState(undefined)
    const [currentChat, setCurrentChat] = useState(undefined)
    const [makingNewChat, setMakingNewChat] = useState(false)
    const [friendsSearch, setFriendsSearch] = useState(undefined)


    useEffect(()=>{
        fetch(`http://localhost:3000/users_chats/${user.id}`).then(res=>res.json()).then(data=>setChats(data))
    },[])

    // console.log(friendsSearch)

    function selectChat (id) {
        fetch(`http://localhost:3000/chats/${id}`).then(res=>res.json()).then(data=>setMessages(data))
        setCurrentChat(id)
    }

    function handleSubmit(e){
        e.preventDefault()
        const input = e.target[0].value

        fetch('http://localhost:3000/messages',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                content: input,
                User_id: user.id,
                Chat_id: currentChat
                
            })
        }).then(res=>res.json()).then(data=>setMessages([...messages, data]))
        e.target[0].value = ''
    }

    function changeMakingChat(){
        setMakingNewChat(!makingNewChat)
        setFriendsSearch(undefined)
        // console.log(makingNewChat)
    }

    function handleNewChat(e){
        e.preventDefault()
        // console.log(e.target[0].value)
        
        const input =  e.target[0].value
        let newArray = []
        fetch(`http://localhost:3000/users_friends/${user.id}`).then(res=>res.json()).then(data=>{data.forEach(dat=>{
            // console.log(dat)
            if(dat.user1.username.toLowerCase().includes(input.toLowerCase())){
                newArray.push(dat.user1)
            }

            if(dat.user2.username.toLowerCase().includes(input.toLowerCase())){
                newArray.push(dat.user2)
            }
            })
            setFriendsSearch(newArray)
        }
        )
        e.target[0].value = ''
    }

    function createNewChat(newChatter){
        fetch(`http://localhost:3000/chats`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user1_id: user.id,
                user2_id: newChatter.id
            })
        }).then(res=>res.json()).then(data=>{
            setChats([...chats, data])
            selectChat(data.id)
        })
    }

   
    

    return(
        <div className="chatPage">
            <ChatsContainer createNewChat={createNewChat} friendsSearch={friendsSearch} handleNewChat={handleNewChat} makingNewChat={makingNewChat} changeMakingChat={changeMakingChat} user={user} selectChat={selectChat} chats={chats} />
            <MessagesWindow handleSubmit={handleSubmit} user={user} messages={messages} />
        </div>
    )
}

export default ChatPage