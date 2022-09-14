

function Login ({handleNewUser, currentUser}) {

    function handleSubmit(e){
        e.preventDefault()
        const name = e.target[0].value
        const password = e.target[1].value
        const checked = e.target[2].checked
        console.log(name,password, checked)
        
        if (checked){
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify({
                    username: name,
                    password: password,
                    image: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                })
            }).then(res=>res.json()).then(data=>{
                handleNewUser(data)
            // console.log(data)
            })
        }
        else {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify({
                    username: name,
                    password: password
                })
            }).then(res=>res.json()).then(data=>{
                handleNewUser(data)
                    console.log(data)
            })
        }

         e.target[0].value = ''
         e.target[1].value = ''
        e.target[2].checked = false
    }



    return(
        <div className="login centered">
            <div className="centered">
                {currentUser ? <h2>Welcome {currentUser.username}!</h2> : null}
                {currentUser ? null : <form  onSubmit={(e)=>handleSubmit(e)}>
                    
                    <label>Username:</label>
                        {/* <br></br> */}
                        <input type="text"></input>
                        {/* <br></br> */}
                        <label>Password:</label>
                        {/* <br></br> */}
                        <input type="password"></input>
                        {/* <br></br> */}
                        <label>New User: </label>
                        <input value="accept" type="checkbox"></input>
                        {/* <br></br> */}
                        <input type="submit"></input>
                </form>}
                
                {currentUser ? <button onClick={()=>handleNewUser(undefined)}>LogOut</button> : null}
            </div>
        </div>
    )
}

export default Login