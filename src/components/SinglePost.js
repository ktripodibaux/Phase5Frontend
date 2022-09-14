import { useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"
import UpdateForm from "./UpdateForm"


function SinglePost({post, displayPost, user, handleDelete}){



    const [updating, setUpdate] = useState(false)
    const [author, setAuthor] = useState(false)
    const [comments, setComments] = useState(undefined)

    useEffect(()=>{
        setComments(post.Comments)
        fetch(`http://localhost:3000/posts/${post.id}`).then(res=>res.json()).then(data=>setComments(data.Comments))
        if(post.User.username == user.username){
            setAuthor(true)
        }

    },[])

    function changeUpdate(){
        setUpdate(!updating)
    }

    function handleUpdate(e){
        e.preventDefault()
        
        const content = e.target[0].value
        changeUpdate()
        post.content = content
    
        fetch(`http://localhost:3000/posts/${post.id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                content: content,
                // password: user.password
            })
        }).then(res=>res.json()).then(data=>console.log(data))
    
    }

    function moreComment(comment){
        setComments([...comments, comment])
    }

    function addComment(e){

        e.preventDefault()
        // if (!user){
        //     setLoggedIn(false)
        // }
        
        const comment = e.target[0].value
        console.log(comment, user.id, post.id)
        // console.log(comment)
        // console.log(user)
        // console.log(post)
        e.target[0].value = ''

        if(user){
            fetch('http://localhost:3000/comments',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    content: comment,
                    User_id: user.id,
                    Post_id: post.id
                })
            }).then(res=>res.json()).then(data=>moreComment(data))
        }

    }

    function removeComment(old){
        const newArray = comments.filter(comment=>{
            return comment != old
        })
        setComments(newArray)
    }

    

    
    const form = <UpdateForm handleUpdate={handleUpdate} />
    
    const updateButton = <button onClick={changeUpdate}>Edit</button>
    const deleteButton = <button onClick={()=>handleDelete(post)}>Delete</button>
    
    let commentsList = []

    const moment = require("moment")
    let momentObj = moment(post.created_at)
    
    if(comments){
        comments.map(comment=>{
            commentsList.push(<CommentCard removeComment={removeComment} user={user} comment={comment} />)
        })
        
    }

    
    return (
        <>
                <button onClick={displayPost}>Back</button>
            <div className="displayPost">
                <h2 className="postTitle"> {post.title}</h2>
                {updating? form : <p>{post.content}</p>}
                <p>Posted by {post.User.username} on {momentObj.format('MMMM Do YYYY, h:mm:ss a')}</p>
                {author ? updateButton : null}
            {author ? deleteButton : null}
            </div>
            <div className="container">
            <CommentForm addComment={addComment}/>
                {commentsList}
            </div>
        </>
    )
}

export default SinglePost