import React, { useState } from 'react';

const PostAdd = ({ create }) => {
    const [post, setPost] = useState({ username: '', text: '', tag: '' });

    const addNewPost = () => {
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({ username: '', text: '', tag: '' });
    }

    return (
        <div className = 'auth_fields'>
            <input
                onChange={e => setPost({ ...post, username: e.target.value })}
                value={post.username}
                type="text"
                placeholder="User name"
            />
            <input
                onChange={e => setPost({ ...post, text: e.target.value })}
                value={post.text}
                type="text"
                placeholder="Text"
            />
            <input
                onChange={e => setPost({ ...post, tag: e.target.value })}
                value={post.tag}
                type='text'
                placeholder="Tag"
            />
            <button id = "add_post" onClick={addNewPost}>Add a post</button>
        </div>
    );
};

export default PostAdd;