

function Login ({handleNewUser}) {

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
                    password: "password"
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
    }

    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            
            <label>Username:</label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <label>Password:</label>
                <br></br>
                <input type="password"></input>
                <br></br>
                <label>New User: </label>
                <input value="accept" type="checkbox"></input>
                <br></br>
                <input type="submit"></input>
        </form>
    )
}

export default Login