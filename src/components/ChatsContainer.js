import ChatsCard from "./ChatsCard"
import NewChatForm from "./NewChatForm"
import NewChatResult from "./NewChatResult"


function ChatsContainer({chats, selectChat, user, changeMakingChat, makingNewChat, handleNewChat, friendsSearch, createNewChat}){

    // console.log(chats)

    let chatCardList = []
    let friendSearchResults = []

    if (friendsSearch){
        friendsSearch.map(search=>{
            friendSearchResults.push(<NewChatResult createNewChat={createNewChat} result={search} />)
        })
    }

    if (chats){
        chats.map(chat=>{
            chatCardList.push(<ChatsCard user={user} selectChat={selectChat} chat={chat} />)
        })
    }

    return(
        <div className="chatsContainer">
            {makingNewChat ? <NewChatForm handleNewChat={handleNewChat} /> : null}
            <button onClick={changeMakingChat}>{makingNewChat ? "Cancel" : "Make New Chat"}</button>
            {friendSearchResults.length > 0 ? <p>Click to start a new chat!</p> : null}
            {friendSearchResults}
            {chatCardList}
        </div>
    )
}

export default ChatsContainer