

function ChatForm({handleSubmit}){

    return(

        <form className="flex" onSubmit={(e)=>handleSubmit(e)}>
                <input className="messageBar" type="text"></input>
                <input className="enter" type="submit"></input>
            </form>
    )
}

export default ChatForm