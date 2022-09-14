

function FriendSearch({handleSubmit}){

    return(
        <>
        <div className="postForm">
            <form className="postForm" onSubmit={(e)=>handleSubmit(e)}>
                <label>Users search: </label>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
        </div>
        </>
    )
}

export default FriendSearch