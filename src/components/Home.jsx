import data from "../models/services/DataService.js";
import Post from "./Post.jsx";
import CreatePost from "./CreatePost.jsx";
import {useState} from "react";
import "./Home.css";

export default function Home() {

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
                {
                    posts.map((e) => <Post post={e}/>)
                }
                <CreatePost onCreatePost={handleCreatePost}/>
            </main>
        </div>
    );
}