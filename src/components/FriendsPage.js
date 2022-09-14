import { useEffect, useState } from "react"
import FriendResultCard from "./FriendResultCard"
import FriendSearch from "./FriendSearch"
import { Link } from "react-router-dom"
import FriendCard from "./FriendCard"


function FriendsPage({user}){

    const [searchResults, setSearchResults] = useState(undefined)
    const [friends, setFriends] = useState(undefined)

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:3000/user_friends_list/${user.id}`).then(res=>res.json()).then(data=>setFriends(data))
        }
    },[])

    
    
    
    let cardsDisplay = []
    
    function handleSubmit(e){
        e.preventDefault()
        const input =  e.target[0].value
        let newArray = []
        fetch('http://localhost:3000/users').then(res=>res.json()).then(data=>{data.forEach(dat=>{
                if (dat.username.toLowerCase().includes(input.toLowerCase())){
                    newArray.push(dat)
                }
            })
            setSearchResults(newArray)
        }
        )
        e.target[0].value = ''
    }

    let friendsList = []

    if(friends){
        friends.map(friend=>{
            friendsList.push(<FriendCard removeFriend={removeFriend} friend={friend} />)
        })
    }
    
    
    if (searchResults){
        cardsDisplay = searchResults.map(result=>{
            return <FriendResultCard user={user} friend={result} />
        })
    }

    function removeFriend(friend){

        fetch(`http://localhost:3000/users_friends/${user.id}`).then(res=>res.json()).then(data=>{
            data.map(dat=>{
                if(dat.user1.username == friend.username || dat.user2.username == friend.username){
                    fetch(`http://localhost:3000/friendships/${dat.id}`,{
                        method: 'DELETE'
                    }).then(res=>res.json()).then(data=>console.log(data))
                }
            })
        })

        let newArray = friends.filter(fri=>{
            return fri != friend
        })
        
        setFriends(newArray)
    }

    if (!user){
        return(
            <>
            <br></br>
            <Link className="notLoggedIn" to="/"> <p>You Must be logged in to make and add friends Click here to login</p></Link>
            </>
        )
    }


    


    return(

        <>
            <FriendSearch handleSubmit={handleSubmit} />
                {cardsDisplay}
            <div className="friendsPage">
                {friendsList.length > 0 ?<h3> Friends list: </h3>:<h3>No friends to display, start making some!</h3>}
                {friendsList}
            </div>
            
        </>
    )
}

export default FriendsPage