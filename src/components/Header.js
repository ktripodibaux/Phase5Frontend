import { Link } from "react-router-dom"


function Header({requests, user}){

    let requestNumber;
    
    if(requests){
        requestNumber = requests.length
    }

    // console.log(requestNumber)

    return(
        <>

        {/* <h1>This is the header</h1> */}
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/chat">chat</Link>
        <br></br>
        <Link to="/friends">Friends</Link>
        <br></br>
        <Link to="/requests">{requestNumber > 0? `Requests:  ${requestNumber}` : "Requests"}</Link>
        <br></br>
        
        </>
    )
}

export default Header