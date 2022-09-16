import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm.jsx';
import PostFilter from './components/PostFilter';
import './styles/App.css';
import MyModal from './components/UI/Modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';



function App() {

const [posts, setPosts] = useState([

])

const [filter, setFilter] = useState({sort:'', query:''})
const [modal, setModal] = useState(false)
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
/* const [title, setTitle] = useState('');
const [subTitle, setSubTitle] = useState(''); */


const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(false)
}

//get Post From Child Component
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

async function fetchPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  setPosts(response.data)
}

  return (
    <div className='App'>
      <MyButton
        onClick={fetchPosts}
      >
        GET POSTS
      </MyButton>
      <MyButton
        style={{marginTop: 30}}
        onClick={() => setModal(true)}
      >
        Create Post
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts}  title={'Post Lists'} 
      />
    </div>
  );
}

export default App;
