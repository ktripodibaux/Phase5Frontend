import { useEffect, useState } from "react";


function CommentCard({comment, user, removeComment}){

    // console.log(comment)

    const [same, setSame] = useState(false)
    const [poster, setPoster] = useState(undefined)

    const moment = require("moment");
    useEffect(()=>{

        fetch(`http://localhost:3000/users/${comment.User_id}`).then(res=>res.json()).then(data=>{
            // console.log(data)
        setPoster(data.username)})

        if (user){
            // console.log(user, posti.User)
            if (user.id === comment.User_id){
                setSame(true)  
            }
        }
    },[])

    function deleteComment(){
        removeComment(comment)
        fetch(`http://localhost:3000/comments/${comment.id}`,{
            method: 'DELETE'
        }).then(res=>res.json()).then(data=>console.log(data))
    }

    return(
        <div className="commentCard">
            <p>{comment.content}</p>
            <p>{poster}</p>
            {same ? <button onClick={()=>deleteComment(comment)}>delete</button> : null}
        </div>
    )
}

export default CommentCard