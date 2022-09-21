import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm.jsx';
import PostFilter from './components/PostFilter';
import './styles/App.css';
import MyModal from './components/UI/Modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import  PostService  from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';



function App() {

const [posts, setPosts] = useState([])
const [filter, setFilter] = useState({sort:'', query:''})
const [modal, setModal] = useState(false)
const [totalPages, setTotalPages] = useState(0)
const [limit, setLimit] = useState(10)
const [page, setPage] = useState(1)
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
const pagesArray = getPagesArray(totalPages)


const [fetchPosts, isLoading, postError ] = useFetching (async() => {
  const response = await PostService.getAll(limit, page);
  setPosts(response.data)
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit))
})
console.log(pagesArray)
console.log(totalPages)
/* const [title, setTitle] = useState('');
const [subTitle, setSubTitle] = useState(''); */

//this useEffect will work once because array don't have any deps
useEffect(()=> {
  fetchPosts();
},[])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(false)
}

//get Post From Child Component
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

const changePage = (page) => {
  setPage(page)
  fetchPosts();
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
      {postError &&
            <h1>Error ${postError}</h1>
        }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JavaScript Posts"/>
            <div style={{height: 20, background: 'red'}}/>
            {isLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        }
        <div className='page__wrapper'>
            {pagesArray.map(p =>
              <span 
                    onClick={() => changePage(p)}
                    key={p} 
                    className={page === p ? 'page page__current' : 'page'}>{p}</span>
            )}
        </div>
    </div>
  );
}

export default App;
