

function FriendRequestCard({removeCard, request, user}){

    // console.log(requests[0])

    function handleDelete(){
        fetch(`http://localhost:3000/requests/${request.id}`,{
            method: "DELETE"
        }).then(res=>res.json()).then(data=>console.log(data))
        removeCard(request)
    }

    function handleAddFriend(){
        fetch(`http://localhost:3000/friendships`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user1_id: request.sender.id,
                user2_id: user.id
            })
        }).then(res=>res.json()).then(data=>console.log(data))
        handleDelete()
    }



    return(
        <div>
            <h3>{request.sender.username}</h3>
            <img />
            <button onClick={handleAddFriend}>add friend</button>
            <button onClick={handleDelete}>Reject</button>
        </div>
    )
}

export default FriendRequestCard