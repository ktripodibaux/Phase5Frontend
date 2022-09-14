import { useEffect, useState } from "react"


function Post({post, displayPost, user}){


    

    const moment = require("moment")
    let momentObj = moment(post.created_at)
    // console.log(post)
    
    

    
    
    




    return(
        <div className="postCard" onClick={()=>displayPost(post)}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Posted by {post.User.username} on {momentObj.format('MMMM Do YYYY, h:mm:ss a')}</p>

        </div>
    )
}

export default Post