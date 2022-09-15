import React, { useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm.jsx';
import PostFilter from './components/PostFilter';
import './styles/App.css';
import MyModal from './components/UI/Modal/MyModal';
import MyButton from './components/UI/button/MyButton';



function App() {

const [posts, setPosts] = useState([
  {id: 1, title: 'aa', body: 'cc'},
  {id: 2, title: 'bb', body: 'bb'},
  {id: 3, title: 'cc', body: 'aa'},
])

const [filter, setFilter] = useState({sort:'', query:''})
const [modal, setModal] = useState(false)
/* const [title, setTitle] = useState('');
const [subTitle, setSubTitle] = useState(''); */


//sorting Posts Using useMemo
const sortedPosts = useMemo(()=>{
  if(filter.sort) {
    return [...posts].sort((a,b) => a[filter.sort].localeCompare[b[filter.sort]] )
  }
  return posts;
},[filter.sort, posts])

//Get sortedPosts and use alredy sortedPosts for SearchQuery
const sortedAndSearchedPosts = useMemo (()=> {
  return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLowerCase()))
},[filter.query, sortedPosts])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(false)
}

//get Post From Child Component
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className='App'>
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
