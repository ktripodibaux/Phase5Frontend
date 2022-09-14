import { useEffect, useState } from "react"
import Post from "./Post"
import PostForm from "./PostForm"
import SinglePost from "./SinglePost"
import { Link } from "react-router-dom"


function PostsPage({user}){

    const [posts, setPosts] = useState([])
    const [makingPost, setMakingPost] = useState(false)
    const [currentPost, setCurrentPost] = useState(undefined)

    

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:3000/user_feed/${user.id}`).then(res=>res.json()).then(data=>setPosts(data))
        }
    },[])

    

    let postsArray = []

    if(posts){
        posts.map(post=>{
            postsArray.push(<Post user={user} displayPost={handleDisplayPost} post={post} />)
        })
        postsArray.reverse()
    }

    function handleDisplayPost(post){
        if (!currentPost){
            setCurrentPost(post)
        }
        else {
            setCurrentPost(undefined)
        }
    }

    function handleDelete(post){
        const newArray = posts.filter(sample=>{
            return sample != post
        })
        setPosts(newArray)
        // post.comments.map(comment=>{
        //     fetch(`http://localhost:3000/comments/${comment.id}`,{
        //         method: "DELETE"
        //     })
        // })
    //    console.log(post.id)


        fetch(`http://localhost:3000/posts/${post.id}`,{
            method: "DELETE"
        }).then(res=>res.json()).then(data=>console.log(data))
    }

    const mainPost = <SinglePost handleDelete={handleDelete} user={user} post={currentPost} displayPost={handleDisplayPost} />

    const form = <PostForm handleSubmit={handleSubmit} />

    function handleNewForm () {
        setMakingPost(!makingPost)
    }


    const button = <button className="button" onClick={handleNewForm}>Make new post</button>

    function handleSubmit(e){
        e.preventDefault()
        const title = e.target[0].value
        const content = e.target[1].value
        // console.log(title, content, user)
        fetch('http://localhost:3000/posts',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                content: content,
                User_id: user.id
            })
        }).then(res=>res.json()).then(data=>{setPosts([ data, ...posts])
        e.target[0].value = ''
        e.target[1].value = ''
        })
        handleNewForm()

    }

    if (!user){
        return(
            <>
            <br></br>
            <Link className="notLoggedIn" to="/"> <p>You Must be logged in to view posts! Click here to login</p></Link>
            </>
        )
    }
    

    return(
        <>
            {/* {makingPost? form : button}
            
            {currentPost ? display :  postsArray} */}
            {/* <h1>posts page</h1> */}
            {/* {button} */}
            {makingPost ? form : button}
            {currentPost? mainPost : postsArray.reverse()}
            
        </>
    )
}

export default PostsPage