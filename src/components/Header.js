import { Link } from "react-router-dom"


function Header({requests, user}){

    let requestNumber;
    
    if(requests){
        requestNumber = requests.length
    }

    // console.log(requestNumber)

    return(
        <div className="header">

        {/* <h1>This is the header</h1> */}
        <Link to="/">Login</Link>
        <br></br>
        <Link to="/posts">Feed</Link>
        <br></br>
        <Link to="/chat">Chat</Link>
        <br></br>
        <h1>Simply Social</h1>
        <Link to="/profile">{user ? `${user.username}'s Profile` : "Profile"}</Link>
        <br></br>
        <Link to="/friends">Friends</Link>
        <br></br>
        <Link to="/requests">{requestNumber > 0? `Requests:  ${requestNumber}` : "Requests"}</Link>
        <br></br>
        
        </div>
    )
}

export default Header