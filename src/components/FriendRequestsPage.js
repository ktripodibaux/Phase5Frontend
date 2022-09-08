import { useEffect, useState } from "react";
import FriendRequestCard from "./FriendRequestCard";


function FriendRequestPage({user, requests, removeRequest}){

  



    let listOfCards = [];

    if (requests){
        if (requests.length>0){
            listOfCards = requests.map(req=>{
                return <FriendRequestCard removeCard={removeRequest} user={user} request={req} />
            })
        }
    }

   



    return(
        <>
            {listOfCards}
        </>
    )
}

export default FriendRequestPage