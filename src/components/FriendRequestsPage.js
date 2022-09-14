import { useEffect, useState } from "react";
import FriendRequestCard from "./FriendRequestCard";
import { Link } from "react-router-dom"


function FriendRequestPage({user, requests, removeRequest}){

  



    let listOfCards = [];

    if (requests){
        if (requests.length>0){
            listOfCards = requests.map(req=>{
                return <FriendRequestCard removeCard={removeRequest} user={user} request={req} />
            })
        }
    }

    if (!user){
        return(
            <>
            <br></br>
            <Link className="notLoggedIn" to="/"> <p>You Must be logged in to view or recieve friend requests! Click here to login</p></Link>
            </>

        )
    }



    return(
        <>
            {listOfCards}
        </>
    )
}

export default FriendRequestPage