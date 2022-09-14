import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm.jsx';
import './styles/App.css';
import MySelect from './components/UI/select/MySelect';


function App() {

const [posts, setPosts] = useState([
  {id: 1, title: 'aa', body: 'cc'},
  {id: 2, title: 'bb', body: 'bb'},
  {id: 3, title: 'cc', body: 'aa'},
])

const [selectedSort, setSelectedSort] = useState('')

/* const [title, setTitle] = useState('');
const [subTitle, setSubTitle] = useState(''); */

const createPost = (newPost) => {
  setPosts([...posts, newPost])
}

//get Post From Child Component

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

const sortPosts = (sort) => {
  setSelectedSort(sort)
  setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
}

  return (
    <div className='App'>

      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="select"
          options={[
            {value: 'title', name: 'name' },
            {value: 'body', name: 'description' }
          ]}
        />
      </div>
      {posts.length !== 0 
      ? <PostList remove={removePost} posts={posts}  title={'Post Lists'} 
      />
      : <h1 style={{textAlign: 'center'}}>There is no Posts</h1>
      }
    </div>
  );
}

export default App;
