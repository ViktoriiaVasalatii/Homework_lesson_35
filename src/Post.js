import React, { useState } from "react";

const Post = ({ post, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(post.content);

  const handleDelete = () => {
    onDelete();
  };

  const handleEdit = () => {
    onEdit(content);
    setIsEditing(false);
  };

  return (
    <div className="post">
      <img src={post.avatar} alt={post.name} />
      <div className="post-details">
        <div className="post-header">
          <h3>{post.name}</h3>
          <span>{post.username}</span>
          <span>{post.date}</span>
        </div>
        {isEditing ? (
          <div className="post-content">
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={handleEdit}>Save</button>
          </div>
        ) : (
          <div className="post-content">
            {post.content}
            <div className="post-actions">
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;