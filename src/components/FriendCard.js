

function FriendCard({friend, removeFriend}){

    return(
        <div className="searchFriend">
            <img src={friend.image}></img>
            <h1>{friend.username}</h1>
            <button onClick={()=>removeFriend(friend)}>RemoveFriend</button>
        </div>
    )
}

export default FriendCard