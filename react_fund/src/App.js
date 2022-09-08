import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';


function App() {

const [posts, setPosts] = useState([
  {id: 1, title: '1. JavaScript', body: 'Description'},
  {id: 2, title: '2. JavaScript', body: 'Description'},
  {id: 3, title: '3. JavaScript', body: 'Description'}
])
const [posts2, setPosts2] = useState([
  {id: 1, title: '1. Python', body: 'Description'},
  {id: 2, title: '2. Python', body: 'Description'},
  {id: 3, title: '3. Pithon', body: 'Description'}
])

  return (
    <div className='App'>
      <PostList posts={posts} title='Post List 1'/>
      <PostList posts={posts2} title='Post List 2'/>
    </div>
  );
}

export default App;
