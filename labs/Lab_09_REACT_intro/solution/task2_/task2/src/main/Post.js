import React, { useState } from 'react';

const Post = ({ post, remove }) => {
    const [like, setLike] = useState('default');

    const likeOnClick = () => {
        setLike('green');
    }

    return (
        <>
          <div className = 'Post'>
            <div className = 'post__text'>
              <p id = 'username'>{post.username}</p>
              <p>{post.text}</p>
              <p>{post.tag}</p>
            </div>
            <div className = "post__button">
              <button id = "like" style={{ backgroundColor: like }} onClick={likeOnClick}>Like&lt;3</button>
              <button id = "delete" onClick={()=>remove(post)}>Delete!</button>
            </div>
          </div>
        </>
    );
};

export default Post;