import React from 'react';
import Post from './Post';
import PostTags from './Tags';

const PostList = ({ posts, title, remove, sort, show, orPosts }) => {

    const uniqTags = (posts) => {
        const tags = posts.map(post => post.tag)
        const uniqTag = tags.filter((value, index, self) =>
            self.indexOf(value) === index
        );
        return uniqTag;
    }

    return (
        <div className = 'tags_list'>
            <h3 style={{ margin: 10}}>{title}</h3>
            <p style={{margin: 10}}>Теги постов:</p>
            {uniqTags(posts).map((tag,index) =>
                <PostTags sort={sort} tag={tag} key={posts[index].key} />
            )}
            <button id = "show_all" onClick={()=>show(orPosts)}>Show all</button>
            {posts.map(post =>
                <Post remove={remove} post={post} key={post.id} />
            )}
        </div>
    );
};

export default PostList;