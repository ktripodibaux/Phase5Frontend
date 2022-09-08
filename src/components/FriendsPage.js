import { useEffect, useState } from "react"
import FriendResultCard from "./FriendResultCard"
import FriendSearch from "./FriendSearch"


function FriendsPage({user}){

    const [searchResults, setSearchResults] = useState(undefined)

    
    
    
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
    
    
    if (searchResults){
        cardsDisplay = searchResults.map(result=>{
            return <FriendResultCard user={user} friend={result} />
        })
    }

    


    return(

        <>
            <FriendSearch handleSubmit={handleSubmit} />
            {cardsDisplay}

            
        </>
    )
}

export default FriendsPage