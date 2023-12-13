import data from "../models/services/DataService.js";
import Post from "./Post.jsx";
import CreatePost from "./CreatePost.jsx";
import {useContext, useState} from "react";
import "../styles/Home.css";
import UserContext from "../context/UserContext.js";

export default function Home() {

    const user = useContext(UserContext);
    //get data as local state to update render
    const [posts, updatePosts] = useState(data);

    const handleCreatePost = (post) => {
        updatePosts([...posts, post]);
    }

    return (
        <div className="home">
            <header>
                <h1>Forum instantané</h1>
            </header>
            <main>
                <h2>👋 Bienvenue, {user.pseudo}</h2>
                {
                    posts.map((e) => <Post post={e}/>)
                }
                <CreatePost onCreatePost={handleCreatePost}/>
            </main>
        </div>
    );
}