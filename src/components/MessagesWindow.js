import ChatForm from "./ChatForm"
import Message from "./Message"


function MessagesWindow({messages, user, handleSubmit}){

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
                <ChatForm handleSubmit={handleSubmit} />
        </div>
    )
}

export default MessagesWindow