

function FriendResultCard({friend, user}){

    console.log(user,friend)

    function handleRequest(){
        fetch(`http://localhost:3000/requests`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                sender_id: user.id,
                receiver_id: friend.id
            })
        }).then(res=>res.json()).then(data=>console.log(data))
    }

    return(
        <div>
            <h3>{friend.username}</h3>
            <img src={friend.image} />
            <button onClick={handleRequest}>Send friend request</button>

        </div>
    )
}

export default FriendResultCard