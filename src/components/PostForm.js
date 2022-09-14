

function PostForm({handleSubmit}){

    return(
        <>
        <div className="postForm">
            <form className="postForm" onSubmit={(e)=>handleSubmit(e)}>
                <label>Title: </label>
                <input type="text"></input>
                <br></br>
                <label>Content: </label>
                <textarea 
            rows="1" cols="33">

            </textarea>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
        </>
    )
}

export default PostForm