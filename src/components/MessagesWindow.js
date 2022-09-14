import ChatForm from "./ChatForm"
import Message from "./Message"


function MessagesWindow({messages, user, handleSubmit, currentChat}){

    let listOfMessages = []

    if(messages){

        messages.map(message=>{
            // console.log(message)
            listOfMessages.push(<Message user={user} text={message} />)
        })
    }

    

    return(
        <div className="messagesWindow">
            {/* <ol> */}
                {listOfMessages}
            {/* </ol> */}
                {/* {listOfMessages.length > 0 ? <ChatForm handleSubmit={handleSubmit} /> : null} */}
                {currentChat ? <ChatForm handleSubmit={handleSubmit} /> : null}
        </div>
    )
}

export default MessagesWindow