

function NewChatForm({handleNewChat}){


    return(
        <>
            <form onSubmit={(e)=>handleNewChat(e)}>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default NewChatForm