import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost, editPost } from "./store";
import Post from "./Post";

const Feed = () => {
    const posts = useSelector((state) => state.feed.posts);
    const dispatch = useDispatch();

    const handleAddPost = () => {
        const post = {
            id: Date.now(),
            avatar: "https://via.placeholder.com/50",
            name: "John Smith",
            username: "@johnsmith",
            date: new Date().toISOString().slice(0, 10),
            content: "New post",
        };
        dispatch(addPost(post));
    };

    const handleDeletePost = (id) => {
        dispatch(deletePost(id));
    };

    const handleEditPost = (id, content) => {
        dispatch(editPost({ id, content }));
    };

    return (
        <div className="feed">
            <button onClick={handleAddPost}>Add post</button>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                    onDelete={() => handleDeletePost(post.id)}
                    onEdit={(content) => handleEditPost(post.id, content)}
                />
            ))}
        </div>
    );
};

export default Feed;
