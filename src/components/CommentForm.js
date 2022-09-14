

function CommentForm({addComment}){

    return(
        <div className="postForm">
            <form className="postForm" onSubmit={(e)=>addComment(e)}>
                <label>Comment: </label>
                <input type="text"></input>
                
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default CommentForm