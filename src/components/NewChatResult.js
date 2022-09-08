

function NewChatResult({result, createNewChat}) {

    return(
        <h3 onClick={()=>createNewChat(result)}>{result.username}</h3>
    )
}

export default NewChatResult