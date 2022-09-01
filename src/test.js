import { useEffect, useState } from "react"


function Test(){

    const [user, setUser] = useState(undefined)

    useEffect(()=>{
        fetch('http://localhost:3000/users/1').then(res=>res.json()).then(data=>setUser(data))
    },[])

    return(
        <>
        <p>{user}</p>
            <form>

            </form>


        </>
    )
}

export default Test