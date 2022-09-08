import { useEffect, useState } from "react"
import ChatsContainer from "./ChatsContainer"
import Message from "./Message"


function Test({user}){

    const [users, setUsers] = useState(undefined)
    const [chats, setChats] = useState(undefined)
    const [messages, setMessages] = useState(undefined)

    

    useEffect(()=>{

        fetch('http://localhost:3000/users_chats/1').then(res=>res.json()).then(data=>setChats(data))
        
    },[])


    function selectChat (id) {
        fetch(`http://localhost:3000/chats/${id}`).then(res=>res.json()).then(data=>setMessages(data))
    }


    // console.log(users[0])

    function handleSubmit(e){
        e.preventDefault()
        const input = e.target[0].value

        fetch('http://localhost:3000/messages',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                content: input,
                User_id: user.id,
                Chat_id: 1
                
            })
        }).then(res=>res.json()).then(data=>setMessages([...messages, data]))
    }

    let listOfMessages = []

    if(messages){

        messages.map(message=>{
            // console.log(message)
            listOfMessages.push(<Message text={message} />)
        })
    //     fetch('http://localhost:3000/chats/1').then(res=>res.json()).then(data=>{
    //         data.map(dat=>{
    //             // console.log(dat.content)
    //             listOfMessages.push(<Message content={dat.content} />)
    //         }
            
    //     )
    //     console.log(data)
    
    // })

    }

    return(
        <>
            <ChatsContainer selectChat={selectChat} chats={chats} />
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text"></input>
                <input type="submit"></input>
            </form>

            <ol>
                {listOfMessages}
            </ol>

        </>
    )
}

export default Test