import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';


function App() {

const [posts, setPosts] = useState([
  {id: 1, title: '1. JavaScript', body: 'Description'},
  {id: 2, title: '2. JavaScript', body: 'Description'},
  {id: 3, title: '3. JavaScript', body: 'Description'}
])

const [title, setTitle] = useState('');

const addNewPost = (e) => {
  e.preventDefault()
  console.log(title)
}

  return (
    <div className='App'>
      <form>
        <div>
          {/*Managable Component*/}
          <MyInput 
          value={title}
          onChange= {e => setTitle(e.target.value)}
          type='text' 
          placeholder='Post name'
          />
          <MyInput type='text' placeholder='Post description'/>
          <MyButton onClick={addNewPost}>create post</MyButton>
        </div>
      </form>
      <PostList posts={posts} title='Post List 1'/>
    </div>
  );
}

export default App;
