import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm.jsx';
import './styles/App.css';


function App() {

const [posts, setPosts] = useState([
  {id: 1, title: 'JavaScript', body: 'Description'},
  {id: 2, title: 'JavaScript', body: 'Description'},
  {id: 3, title: 'JavaScript', body: 'Description'},
])

/* const [title, setTitle] = useState('');
const [subTitle, setSubTitle] = useState(''); */

const createPost = (newPost) => {
  setPosts([...posts, newPost])
}

//get Post From Child Component

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className='App'>
      <PostForm 
      create={createPost}
      />
      {posts.length !== 0 
      ? <PostList remove={removePost} posts={posts}  title={'Post Lists'} 
      />
      : <h1 style={{textAlign: 'center'}}>There is no Posts</h1>
      }
    </div>
  );
}

export default App;
