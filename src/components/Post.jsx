import {useContext} from "react";
import UserContext from "../context/UserContext.js";
import "../styles/Post.css";

export default function Post({post}) {

    const user = useContext(UserContext);

    return (
        <div className="post">
            <h3>{post.author} - {post.dateTime}</h3>
            <p>{post.content}</p>
        </div>
    );
}