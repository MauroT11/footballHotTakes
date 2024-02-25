import { useLocation } from "react-router-dom"

export default function PostDetails(serverURL) {

    const post = useLocation()

    // WHEN BUTTON GETS PRESSED THE ID AND LIKE OF THE POST INCREASES AND UPDATES POST ON DB
    async function handleLikes(id, likes) {
        console.log('liked')

        let like = likes + 1

        let results = await fetch(`${serverURL.serverURL}like`, {
            method: 'PUT',
            mode: 'cors',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, like })
        });
        console.log(results)
    }

    async function handleDelete() {
        console.log('DELETE')
    }

    return (
        <div id="postDetails">
            {/* <h1>POST DETAILS</h1> */}
            <h1>{post.state.title}</h1>
            <h3>{post.state.category}</h3>
            <p>{post.state.content}</p>
            <h4>{post.state.likes} Like(s)</h4>
            <div id="postBtns">
                <button className="postBtn" onClick={() => handleLikes(post.state.id, post.state.likes)}>👍</button>
                {/* <button className="postBtn" onClick={() => handleLikes(post.id, post.likes)}>👎</button> */}
                <button className="postBtn delete" onClick={handleDelete}>🗙</button>
            </div>
        </div>
    )
}