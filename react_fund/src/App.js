import React, { useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm.jsx';
import './styles/App.css';
import PostFilter from './components/PostFilter';


function App() {

const [posts, setPosts] = useState([
  {id: 1, title: 'aa', body: 'cc'},
  {id: 2, title: 'bb', body: 'bb'},
  {id: 3, title: 'cc', body: 'aa'},
])

const [filter, setFilter] = useState({sort: '', query: ''})

/* const [title, setTitle] = useState('');
const [subTitle, setSubTitle] = useState(''); */


//sorting Posts Using useMemo
const sortedPosts = useMemo(()=>{
  console.log('function sort is working')
  if(filter.sort) {
    setPosts([...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort])))
  }
  return posts;
},[filter.sort, posts])

//Get sortedPosts and use alredy sortedPosts for SearchQuery
const sortedAndSearchedPosts = useMemo(()=>{
  return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
},[filter.query, sortedPosts])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
}

//get Post From Child Component
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className='App'>

      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length !== 0 
      ? <PostList remove={removePost} posts={sortedAndSearchedPosts}  title={'Post Lists'} 
      />
      : <h1 style={{textAlign: 'center'}}>There is no Posts</h1>
      }
    </div>
  );
}

export default App;
