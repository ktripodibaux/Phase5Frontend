

function ChatsCard({chat, selectChat, user}){

    // console.log(chat)

    return(
        <div onClick={()=>selectChat(chat.id)} className="chatsCard">
            <h3>{chat.user1.username == user.username ? chat.user2.username : chat.user1.username}</h3>
        </div>
    )
}

export default ChatsCard