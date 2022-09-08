

function FriendSearch({handleSubmit}){

    return(
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default FriendSearch