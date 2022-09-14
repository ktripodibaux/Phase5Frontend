import { useEffect, useState } from "react"
import Post from "./Post"
import PostForm from "./PostForm"
import SinglePost from "./SinglePost"
import { Link } from "react-router-dom"
import ProfilePictureForm from "./ProfilePictureForm"


function ProfilePage({user, handleNewUser}){

    const [posts, setPosts] = useState([])
    const [makingPost, setMakingPost] = useState(false)
    const [currentPost, setCurrentPost] = useState(undefined)
    const [changingPicture, setChangingPicture] = useState(false)

    

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:3000/user_posts/${user.id}`).then(res=>res.json()).then(data=>setPosts(data))
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



    function handleNewForm () {
        setMakingPost(!makingPost)
    }

    function changeProfilePicture(e){
        e.preventDefault()
        const picture = e.target[0].value
        fetch(`http://localhost:3000/users/${user.id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                image: picture
            })
        }).then(res=>res.json()).then(data=>handleNewUser(data))
        handlePictureEdit()
    }

    function handlePictureEdit(){
        setChangingPicture(!changingPicture)
    }



    

    if (!user){
        return(
            <>
            <br></br>
            <Link className="notLoggedIn" to="/"> <p>You Must be logged in to have a profile! Click here to login</p></Link>
            </>

        )
    }

    const form = <ProfilePictureForm handleNewPicture={changeProfilePicture} />
    const button = <button onClick={()=>handlePictureEdit()}>Edit profile picture</button>
    

    return(
        <>
            {/* {makingPost? form : button}
            
            {currentPost ? display :  postsArray} */}
            {/* <h1>posts page</h1> */}
            {/* {button} */}
            <div className="Profile">
                <img src={user.image}></img>
                {/* <div className="center"> */}
                    <h2>{user.username}</h2>
                    {changingPicture ? form : button}
                {/* </div> */}
            </div>
            {currentPost? mainPost : postsArray}
            
        </>
    )
}

export default ProfilePage