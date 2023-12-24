import React, { useState } from "react";
import PostList from "./main/ListofPosts";
import "./styles/App.css";
import PostAdd from "./main/AddPost";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, username: 'Anonomys', text: 'God save our souls!', tag: '#SaintChurch' },
    { id: 2, username: 'Lazy_frog1347', text: 'the quite warming today', tag: '#Weather' },
    { id: 3, username: 'WatchingDog 3', text: 'The madness is coming', tag: '#News' },
    { id: 5, username: 'Noname98', text: 'How re u all doing today lads?', tag: '#2034' },
  ]);

  const [orPosts, setOrPosts] = useState([...posts]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setOrPosts([...orPosts, newPost]);
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
    setOrPosts(orPosts.filter(p => p.id !== post.id));
  }

  const sortedByTags = tag => {
    setPosts(posts.filter(p => p.tag === tag));
  }

  const showAll = posts => {
    setPosts([...posts]);
  }

  return (
    <div className="App">
      <PostAdd create={createPost} />
      {posts.length !== 0
        ? <PostList orPosts={orPosts} show={showAll} sort={sortedByTags} remove={removePost} posts={posts} title='Опубликованные посты' />
        : <p style={{margin:20, fontSize:40}}>No posts for today (ಥ_ಥ)</p>
      }
    </div>
  );
}

export default App;