

function Message({text, user}){

    let side = 'left'
    // console.log(text)

    let side2 = ""

    if(user){
        if(text.User.username == user.username){
            side = "right"
            side2="left2"
        }

    }

    return(

        <>
            
                <div className={side}>
                    <div className={side2}>
                        <p>{text.content}</p>
                        <p>{text.User.username}</p>
                    </div>
                </div>
            

        </>
    )
}

export default Message