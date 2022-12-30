import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAction } from "../redux/actions/postActions";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");

    const dispatch = useDispatch();

    const handleAddPost = () => {
        // Validate the inputs

        const id = Math.floor(Math.random() * 136736723);
        const newPost = { title, post, id, likes: 0 }
        dispatch(createPostAction(newPost));

        const posts = JSON.parse(localStorage.getItem('posts') || "[]")

        localStorage.setItem("posts", JSON.stringify([...posts, newPost]))

        setTitle("");
        setPost("");
    };

    return (
        <div className="bg-white max-w-2xl mx-auto my-10 p-6 rounded-lg">
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-3 border mt-1"
                    type="text"
                    placeholder="Enter title"
                />
            </div>
            <div className="flex flex-col mt-3">
                <label htmlFor="title">Post</label>
                <input
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    className="p-3 border mt-1"
                    type="text"
                    placeholder="Enter post"
                />
            </div>
            <div className="mt-4">
                <button
                    onClick={handleAddPost}
                    className="bg-[#00a47e] text-white p-2 px--6 rounded-md"
                >
                    Submit Post
                </button>
            </div>
        </div>
    );
};

export default AddPostForm;
