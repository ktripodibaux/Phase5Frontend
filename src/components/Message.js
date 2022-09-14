

function Message({text, user}){

    // let side = 'left'
    // console.log(text)

    // let side2 = ""
        let message = 'receive'
        let align = 'side1'

        if(text.User.username == user.username){
            // side = "right"
            // side2="left2"
            message = 'send'
            align = "side2"
        }



    return(

        <>
            <div className="messageBox">
                <div className="message">
                    <div className={message}>
                        <p>{text.content}</p>
                        <p className={align}>{text.User.username}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Message