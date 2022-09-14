

function ProfilePictureForm({handleNewPicture}){

    return(
        <form onSubmit={handleNewPicture}>
            <input type="text"></input>
            <input type="submit"></input>
        </form>
    )
}

export default ProfilePictureForm