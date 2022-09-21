import React, { useState } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from './UI/button/MyButton';


function PostForm({ create }) {

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = e => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost);
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      {/*Managable Component*/}
      <MyInput
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value.toLowerCase() })}
        type="text"
        placeholder="Post name"
      />
      {/*No Managable Component*/}
      <MyInput
        type="text"
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value.toLowerCase() })}
        placeholder="Post Description"
      />
      <MyButton onClick={addNewPost}>Create New Post</MyButton>
    </form>
  )
}

export default PostForm