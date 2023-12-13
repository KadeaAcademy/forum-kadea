import {useContext, useState} from "react";
import UserContext from "../context/UserContext.js";
import "../styles/CreatePost.css";

export default function CreatePost({onCreatePost}) {

    const [content, setContent] = useState("");
    // get user information from context
    const user = useContext(UserContext);

    return (
        <div className="create-post">
            <h2>Créer un post</h2>
            <textarea
                type="text"
                placeholder="Votre message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={
                ()=>{

                    const id = Math.floor(Math.random() * 1000);

                    const post = {
                        id : id,
                        author : user.pseudo,
                        dateTime : new Date().toISOString(),
                        content : content
                    }

                    onCreatePost(post);
                    // reset text area
                    setContent("");
                }
            }>Publier</button>
        </div>
    );
}